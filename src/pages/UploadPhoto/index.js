import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {AddPhotoIcon, RemovePhotoIcon} from '../../assets/icons';
import {ILNullPhoto} from '../../assets/illustrations';
import {Button, Gap, Link} from '../../components/atoms';
import Header from '../../components/molecules/Header';
import {colors} from '../../utils/colors';
import {fonts} from '../../utils/fonts';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {showMessage} from 'react-native-flash-message';
import {getDatabase, ref, set, update} from 'firebase/database';
import { storeData } from '../../utils';

const UploadPhoto = ({navigation, route}) => {
  const {fullName, job, uid} = route.params;
  const [photoForDatabase, setPhotoForDatabase] = useState('');

  const [hasPhoto, setHasPhoto] = useState(false);
  const [photo, setPhoto] = useState(ILNullPhoto);

  const getImage = () => {
    launchImageLibrary({quality: 0.5, maxWidth: 200, maxHeight: 200, includeBase64: true}, callback => {
      console.log('response: ', callback);

      if (callback.didCancel || callback.errorMessage) {
        showMessage({
          message: 'Anda belum mengupload photo',
          type: 'default',
          backgroundColor: colors.error,
          color: colors.white,
        });
      } else {
        const source = {uri: callback.assets[0].uri};

        setPhotoForDatabase(
          `data: ${callback.assets[0].type};base64, ${callback.assets[0].base64}`,
        );

        setPhoto(source);
        setHasPhoto(true);
      }
    });
  };

  const uploadAndContinue = () => {
    
    const db = getDatabase();
    update(ref(db, 'users/' + uid), {photoForDatabase});

    const data = route.params;
    data.photo = photoForDatabase;

    storeData('user', data);

    navigation.replace('MainApp');
  };

  return (
    <View style={styles.page}>
      <Header onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <View style={styles.profile}>
          <TouchableOpacity style={styles.avatarWrapper} onPress={getImage}>
            <Image source={photo} style={styles.avatar} />
            {hasPhoto && <RemovePhotoIcon style={styles.addPhoto} />}
            {!hasPhoto && <AddPhotoIcon style={styles.addPhoto} />}
          </TouchableOpacity>
          <Text style={styles.name}>{fullName}</Text>
          <Text style={styles.job}>{job}</Text>
        </View>
        <View>
          <Button
            disable={!hasPhoto}
            title="Upload and Continue"
            onPress={() => navigation.replace('MainApp')}
          />
          <Gap height={20} />
          <Link
            title="Skip for this"
            align="center"
            size={16}
            onPress={uploadAndContinue}
          />
        </View>
      </View>
    </View>
  );
};

export default UploadPhoto;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },

  content: {
    flex: 1,
    paddingHorizontal: 40,
    paddingBottom: 64,
    justifyContent: 'space-between',
  },

  profile: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  avatar: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
  },

  avatarWrapper: {
    width: 130,
    height: 130,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 130 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },

  addPhoto: {
    position: 'absolute',
    right: 6,
    bottom: 0,
  },

  name: {
    fontSize: 24,
    fontFamily: fonts.primary[600],
    textAlign: 'center',
  },

  job: {
    textAlign: 'center',
    fontSize: 18,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
    marginTop: 4,
  },
});

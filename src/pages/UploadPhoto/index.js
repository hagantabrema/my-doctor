import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {AddPhotoIcon} from '../../assets/icons';
import {ILNullPhoto} from '../../assets/illustrations';
import {Button, Gap, Link} from '../../components/atoms';
import Header from '../../components/molecules/Header';
import {colors} from '../../utils/colors';
import {fonts} from '../../utils/fonts';

const UploadPhoto = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header />
      <View style={styles.content}>
        <View style={styles.profile}>
          <View style={styles.avatarWrapper}>
            <Image source={ILNullPhoto} style={styles.avatar} />
            <AddPhotoIcon style={styles.addPhoto} />
          </View>
          <Text style={styles.name}>Shayna Melinda</Text>
          <Text style={styles.job}>Product Designer</Text>
        </View>
        <View>
          <Button
            title="Upload and Continue"
            onPress={() => navigation.replace('MainApp')}
          />
          <Gap height={20} />
          <Link
            title="Skip for this"
            align="center"
            size={16}
            onPress={() => navigation.replace('MainApp')}
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

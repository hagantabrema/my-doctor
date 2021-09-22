import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {RemovePhotoIcon} from '../../../assets';
import {colors, fonts} from '../../../utils';

const Profile = ({name, job, isRemove, photo}) => {
  return (
    <View style={styles.container}>
      <View style={styles.profileBorder}>
        <Image source={photo} style={styles.avatar} />
        {isRemove && <RemovePhotoIcon style={styles.removePhoto} />}
      </View>
      {name && (
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.job}>{job}</Text>
        </View>
      )}
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },

  avatar: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
  },

  profileBorder: {
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
    borderWidth: 1,
    borderColor: colors.border,
    justifyContent: 'center',
    alignItems: 'center',
  },

  removePhoto: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },

  name: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 16,
    textAlign: 'center',
  },

  job: {
    fontSize: 16,
    fontFamily: fonts.primary[300],
    color: colors.text.secondary,
    marginTop: 2,
    textAlign: 'center',
  },
});

import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  HelpIcon,
  LanguageIcon,
  NextIcon,
  ProfileIcon,
  RatingIcon,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

const DoctorList = ({picture, name, message, type, onPress, icon}) => {
  const Icon = () => {
    if (icon === 'edit-profile') {
      return <ProfileIcon />;
    }

    if (icon === 'language') {
      return <LanguageIcon />;
    }

    if (icon === 'rate') {
      return <RatingIcon />;
    }

    if (icon === 'help') {
      return <HelpIcon />;
    }

    return <ProfileIcon />;
  };

  {
    /* contoh dummy data dengan state */
  }
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {icon ? <Icon /> : <Image source={picture} style={styles.avatar} />}
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.message}>{message}</Text>
      </View>
      {type === 'next' && <NextIcon />}
    </TouchableOpacity>
  );
};

export default DoctorList;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
  },

  content: {
    flex: 1,
    marginLeft: 16
  },

  name: {
    fontSize: 16,
    fontFamily: fonts.primary[400],
    color: colors.text.primary,
  },

  message: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.secondary,
  },
});

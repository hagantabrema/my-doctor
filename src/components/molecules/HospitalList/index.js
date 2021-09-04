import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const HospitalList = ({title, name, address, picture}) => {
  return (
    <View style={styles.container}>
      {/*contoh data inline*/}
      <Image source={picture} style={styles.picture} />
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.desc}>{address}</Text>
      </View>
    </View>
  );
};

export default HospitalList;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    alignItems: 'center'
  },

  picture: {
    width: 80,
    height: 80,
    borderRadius: 11,
    marginRight: 16
  },

  title: {
      fontSize: 16,
      fontFamily: fonts.primary[400],
      color: colors.text.primary
  },

  desc: {
      fontSize: 12,
      fontFamily: fonts.primary[300],
      color: colors.text.secondary,
      marginTop: 6
  }
});

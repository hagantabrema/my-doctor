import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DummyDoctor1, DummyDoctor3} from '../../../assets';
import {colors, fonts} from '../../../utils';
import {Button} from '../../atoms';

const DarkHeader = ({onPress}) => {
  return (
    <View style={styles.container}>
      <Button type="icon-button" icon="light-back" onPress={onPress}/>
      <View style={styles.content}>
        <Text style={styles.name}>Alexander Jannie</Text>
        <Text style={styles.job}>Dokter Anak</Text>
      </View>
      <Image source={DummyDoctor1} style={styles.avatar}/>
    </View>
  );
};

export default DarkHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.secondary,
    paddingVertical: 30,
    paddingLeft: 20,
    paddingRight: 16,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'center'
  },

  content: {
      flex: 1
  },

  name: {
      fontSize: 20,
      fontFamily: fonts.primary[600],
      color: colors.white,
      textAlign: 'center'
  },

  job: {
      fontSize: 14,
      fontFamily: fonts.primary[300],
      color: colors.text.subtitle,
      textAlign: 'center',
  },

  avatar: {
      width: 46,
      height: 46,
      borderRadius: 46 / 2
  },
});

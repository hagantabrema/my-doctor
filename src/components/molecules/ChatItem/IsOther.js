import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DummyDoctor1} from '../../../assets';
import {colors, fonts} from '../../../utils';

const IsOther = () => {
  return (
    <View style={styles.container}>
      <Image source={DummyDoctor1} style={styles.avatar} />
      <View>
        <View style={styles.chatContent}>
          <Text style={styles.text}>
            Ibu Dokter, apakah memakan jeruk tiap hari itu buruk?
          </Text>
        </View>
        <Text style={styles.date}>10.00 AM</Text>
      </View>
    </View>
  );
};

export default IsOther;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    marginLeft: 16,
    alignItems: 'flex-end',
    flexDirection: 'row',
  },

  avatar: {
    height: 30,
    width: 30,
    borderRadius: 30 / 2,
    marginRight: 12,
  },

  chatContent: {
    padding: 12,
    paddingRight: 18,
    backgroundColor: colors.primary,
    maxWidth: '80%',
    borderRadius: 10,
    borderBottomLeftRadius: 0,
  },

  text: {
    fontSize: 14,
    fontFamily: fonts.primary[400],
    color: colors.white,
  },

  date: {
    fontSize: 11,
    fontFamily: fonts.primary[400],
    marginTop: 8,
  },
});

import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILLogo} from '../../assets';
import {colors} from '../../utils/colors';
import {fonts} from '../../utils/fonts';
import {getAuth, onAuthStateChanged} from 'firebase/auth';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // user login
          console.log('active user: ', user);
          navigation.replace('MainApp');
        } else {
          // user logout
          navigation.replace('GetStarted');
        }
      });
    }, 2000);
  }, [navigation]);

  return (
    <View style={styles.page}>
      <ILLogo />
      <Text style={styles.title}>My Doctor</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 25,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 5,
  },
});

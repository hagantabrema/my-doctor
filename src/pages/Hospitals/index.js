import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {Hospital1, Hospital2, Hospital3, ILHospitalBG} from '../../assets/';
import HospitalList from '../../components/molecules/HospitalList';
import {colors, fonts} from '../../utils';

const Hospitals = () => {
  return (
    <View style={styles.page}>
      <ImageBackground source={ILHospitalBG} style={styles.background}>
        <Text style={styles.title}>Nearby Hospitals</Text>
        <Text style={styles.subtitle}>3 tersedia</Text>
      </ImageBackground>
      <View style={styles.content}>
        {/*contoh data inline*/}
          <HospitalList title="Rumah Sakit" name="Citra Bunga Merdeka" address="Jln. Surya Sejahtera 20" picture={Hospital1}/>
          <HospitalList title="Rumah Sakit Anak" name="Happy Family & Kids" address="Jln. Surya Sejahtera 20" picture={Hospital2}/>
          <HospitalList title="Rumah Sakit Jiwa" name="Tingkatan Paling Atas" address="Jln. Surya Sejahtera 20" picture={Hospital3}/>
      </View>
    </View>
  );
};

export default Hospitals;

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.secondary,
        flex: 1
    },

    background: {
        height: 240,
        paddingTop: 30
    },

    title: {
        fontSize: 20,
        fontFamily: fonts.primary[600],
        color: colors.white,
        textAlign: 'center',
    },

    subtitle: {
        fontSize: 14,
        fontFamily: fonts.primary[300],
        color: colors.white,
        marginTop: 6,
        textAlign: 'center'
    },

    content: {
        backgroundColor: colors.white,
        flex: 1,
        borderRadius: 20,
        marginTop: -20,
        paddingTop: 14
    },
});

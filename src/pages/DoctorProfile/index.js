import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Gap} from '../../components/atoms';
import {Header, Profile, ProfileItem} from '../../components/molecules';
import {colors} from '../../utils';

const DoctorProfile = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Profile" onPress={() => navigation.goBack()} />
      <Profile name="Nairobi Putri Hayza" job="Dokter Anak" />
      <Gap height={26} />
      <ProfileItem label="Alumnus" value="Universitas Indonesia, 2020" />
      <ProfileItem label="Tempat Praktik" value="Rumah Sakit Umum, Bandung" />
      <ProfileItem label="No. STR" value="0000116622081996" />
      <Gap height={23} />
      <View style={styles.button}>
        <Button title="Start Consultation" onPress={() => navigation.navigate('Chat')}/>
      </View>
    </View>
  );
};

export default DoctorProfile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },

  button: {
    paddingHorizontal: 40,
  },
});

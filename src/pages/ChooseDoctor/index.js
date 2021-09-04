import React from 'react';
import {StyleSheet, View} from 'react-native';
import {DummyDoctor1, DummyDoctor2, DummyDoctor3} from '../../assets';
import {DoctorList, Header} from '../../components/molecules';
import {colors} from '../../utils';

const ChooseDoctor = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        type="dark"
        title="Pilih Dokter Anak"
        onPress={() => navigation.goBack()}
      />
      <DoctorList
        type="next"
        picture={DummyDoctor1}
        name="Alexander Jannie"
        message="Wanita"
        onPress={() => navigation.navigate('Chat')}
      />
      <DoctorList
        type="next"
        picture={DummyDoctor2}
        name="John McParker Steve"
        message="Pria"
      />
      <DoctorList
        type="next"
        picture={DummyDoctor3}
        name="Nairobi Putri Hayza"
        message="Wanita"
      />
    </View>
  );
};

export default ChooseDoctor;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

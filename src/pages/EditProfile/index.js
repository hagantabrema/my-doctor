import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Gap, Header, Input, Profile } from '../../components';
import { colors } from '../../utils';

const EditProfile = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Edit Profile" onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <Profile isRemove={true}/>
        <Gap height={26} />
        <Input label="Full Name" />
        <Gap height={24} />
        <Input label="Pekerjaan" />
        <Gap height={24} />
        <Input label="Email Address" />
        <Gap height={24} />
        <Input label="Password" />
        <Gap height={40} />
        <Button title="Save Profile" onPress={() => navigation.goBack()}/>
      </View>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },

  content: {
      padding: 40,
      paddingTop: 0
  },
});

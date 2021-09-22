import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import { ILNullPhoto } from '../../assets';
import {DoctorList, Gap, Header, Profile} from '../../components';
import {colors, getData} from '../../utils';

const UserProfile = ({navigation}) => {
  const [profile, setProfile] = useState({
    fullName: '',
    job: '',
    photo: ILNullPhoto,
  });

  useEffect(() => {
    getData('user').then(res => {
      const data = res;
      data.photo = {uri: res.photo}
      setProfile(data);
    })
  })

  return (
    <View style={styles.page}>
      <Header title="Profile" onPress={() => navigation.goBack()} />
      <Gap height={10} />
      {profile.fullName.length > 0 && (
        <Profile name={profile.fullName} job={profile.job} photo={profile.photo}/>
      )}
      <Gap height={14} />
      <DoctorList
        name="Edit Profile"
        message="Last updated yesterday"
        type="next"
        icon="edit-profile"
        onPress={() => navigation.navigate('EditProfile')}
      />
      <DoctorList
        name="Language"
        message="Available on 12 languages"
        type="next"
        icon="language"
      />
      <DoctorList
        name="Give us rate"
        message="On Google Play Store"
        type="next"
        icon="rate"
      />
      <DoctorList
        name="Help Center"
        message="Read our guidelines"
        type="next"
        icon="help"
      />
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
});

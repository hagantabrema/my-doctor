import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Gap, Header, Input, Loading} from '../../components/';
import {colors, useForm, storeData, getData} from '../../utils/';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import {showMessage, hideMessage} from 'react-native-flash-message';
import {getDatabase, ref, set} from 'firebase/database';

const SignUp = ({navigation}) => {
  const [form, setForm] = useForm({
    fullName: '',
    job: '',
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);

  const onContinue = () => {
    console.log(form);

    setLoading(true);
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then(success => {
        setLoading(false);
        setForm('reset');

        const data = {
          fullName: form.fullName,
          job: form.job,
          email: form.email,
          uid: success.user.uid,
        };

        const db = getDatabase();
        set(ref(db, 'users/' + success.user.uid), data);
        storeData('user', data);

        showMessage({
          message: 'Registrasi berhasil',
          type: 'default',
          backgroundColor: colors.primary,
          color: colors.white,
        });

        navigation.navigate('UploadPhoto', data);
        console.log('register success : ', success);
      })

      .catch(error => {
        setLoading(false);
        const errorCode = error.code;
        const errorMessage = error.message;
        showMessage({
          message: errorMessage,
          type: 'default',
          backgroundColor: colors.error,
          color: colors.white,
        });
        console.log(
          'register failed, ',
          'error code : ',
          errorCode,
          ', ',
          'error message : ',
          errorMessage,
        );
      });
  };

  return (
    <>
      <View style={styles.page}>
        <Header title="Daftar Akun" onPress={() => navigation.goBack()} />
        <ScrollView style={styles.content}>
          <Input
            label="Full Name"
            value={form.fullName}
            onChangeText={value => setForm('fullName', value)}
          />
          <Gap height={24} />
          <Input
            label="Pekerjaan"
            value={form.job}
            onChangeText={value => setForm('job', value)}
          />
          <Gap height={24} />
          <Input
            label="Email Address"
            value={form.email}
            onChangeText={value => setForm('email', value)}
          />
          <Gap height={24} />
          <Input
            label="Password"
            value={form.password}
            onChangeText={value => setForm('password', value)}
            secureTextEntry={true}
          />
          <Gap height={40} />
          <Button title="Continue" onPress={onContinue} />
        </ScrollView>
        {loading && <Loading />}
      </View>
    </>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },

  content: {
    padding: 40,
    paddingTop: 0,
  },
});

import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Gap, Header, Input, Loading} from '../../components/';
import {colors, useForm} from '../../utils/';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import {showMessage, hideMessage} from 'react-native-flash-message';

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
      // .then(userCredential => {
      //   // Signed in
      //   const user = userCredential.user;
      //   // ...
      // })
      .then(success => {
        setLoading(false);
        setForm('reset');
        console.log('register success : ', success);
      })
      .catch(error => {
        // const errorCode = error.code;
        setLoading(false);
        const errorMessage = error.message;
        showMessage({
          message: errorMessage,
          type: 'default',
          backgroundColor: colors.error,
          color: colors.white,
        });
        console.log('register failed : ', errorMessage);
      });
    //navigation.navigate('UploadPhoto')
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

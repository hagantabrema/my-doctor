import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Gap, Header, Input} from '../../components/';
import {colors, useForm} from '../../utils/';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';

const SignUp = ({navigation}) => {
  const [fullName, setFullName] = useState('');
  const [job, setJob] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [form, setForm] = useForm({
    fullName: '',
    job: '',
    email: '',
    password: '',
  });

  const onContinue = () => {
    console.log(form);

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, form.email, form.password)
      // .then(userCredential => {
      //   // Signed in
      //   const user = userCredential.user;
      //   // ...
      // })
      .then(success => {
        console.log('register success : ', success);
      })
      .catch(error => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        console.log('register failed : ', errorMessage);
        // ..
      });
    //navigation.navigate('UploadPhoto')
  };

  return (
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
    </View>
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

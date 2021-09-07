import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Router from './router';
import {initializeApp} from 'firebase/app';
import FlashMessage from 'react-native-flash-message';

//FIREBASE CONFIG
const firebaseConfig = {
  apiKey: 'AIzaSyDxgOHEoko994XmkJ0XQ0M8fpdIMThrDQw',
  authDomain: 'my-doctor-8c068.firebaseapp.com',
  projectId: 'my-doctor-8c068',
  storageBucket: 'my-doctor-8c068.appspot.com',
  messagingSenderId: '657077493514',
  appId: '1:657077493514:web:ae650f0a460c40aabc64f3',
};

const app = initializeApp(firebaseConfig);

const App = () => {
  return (
    <>
    <NavigationContainer>
      <Router />
    </NavigationContainer>
    <FlashMessage position="top" />
    </>
  );
};

export default App;

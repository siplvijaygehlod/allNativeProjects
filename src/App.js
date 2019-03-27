/* eslint-disable react/require-extension */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './component/common';
import LoginForm from './component/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBCL_1rZTNsPEfTOKMJXMl8YZNrDya7Lng',
      authDomain: 'auth-6f832.firebaseapp.com',
      databaseURL: 'https://auth-6f832.firebaseio.com',
      projectId: 'auth-6f832',
      storageBucket: 'auth-6f832.appspot.com',
      messagingSenderId: '272639846166'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;

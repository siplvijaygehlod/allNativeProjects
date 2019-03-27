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
import { Header, Button, CardSection, Spinner } from './component/common';
import LoginForm from './component/LoginForm';

class App extends Component {
  // eslint-disable-next-line no-undef
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBCL_1rZTNsPEfTOKMJXMl8YZNrDya7Lng',
      authDomain: 'auth-6f832.firebaseapp.com',
      databaseURL: 'https://auth-6f832.firebaseio.com',
      projectId: 'auth-6f832',
      storageBucket: 'auth-6f832.appspot.com',
      messagingSenderId: '272639846166'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent = () => {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection >
            <Button onPress={() => firebase.auth().signOut()}>
              Log out
            </Button>
          </CardSection>        
        );
      case false:
        return <LoginForm />;
      default:
          return (
            <CardSection>
              <Spinner size="large" />
            </CardSection>
          );
    }  
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;

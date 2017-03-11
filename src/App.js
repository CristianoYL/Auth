import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Card, CardSection } from './component/common';
import LoginForm from './component/LoginForm';

class App extends Component {

  state = { isLoggedIn: false };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyA-euA3cHpzs69W8NbE_V8Tf8XSXU_y7gM',
      authDomain: 'auth-e3f82.firebaseapp.com',
      databaseURL: 'https://auth-e3f82.firebaseio.com',
      storageBucket: 'auth-e3f82.appspot.com',
      messagingSenderId: '1049766512139'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ isLoggedIn: true });
      } else {
        this.setState({ isLoggedIn: false });
      }
    });
  }

  renderContent() {
    if (this.state.isLoggedIn) {
      return (
        <Card>
          <CardSection>
            <Button
            pressAction={() => firebase.auth().signOut()}
            buttonText={'Log Out'}
            />
          </CardSection>
        </Card>
      );
    }
    return <LoginForm />;
  }

  render() {
    return (
      <View style={{ justifyContent: 'space-around' }}>
        <Header headerText={'Authentication'} />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Card, CardSection, Button, Input, Spinner } from './common';

class LoginForm extends Component {

  state = { email: '', password: '', error: '', isLoading: false };

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      isLoading: false,
      error: ''
    });
  }

  onLoginFail() {
    this.setState({
      isLoading: false,
      error: 'Wrong Password!'
    });
  }

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ error: '' });

    this.setState({ isLoading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
      });
  }

  renderButton() {
    if (this.state.isLoading) {
      return <Spinner spinnerSize="small" />;
    }
    return (
      <Button
      pressAction={this.onButtonPress.bind(this)}
      buttonText={'Login'}
      />
    );
  }

  render() {
    const { errorStyle } = styles;
    return (
      <Card>
        <CardSection>
          <Input
          isPassword={false}
          placeholder={'user@gmail.com'}
          label={'E-mail'}
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
          />
        </CardSection>

        <CardSection >
          <Input
          isPassword
          placeholder={'password'}
          label={'Password'}
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
          />
        </CardSection>

        <Text style={errorStyle}>{this.state.error}</Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorStyle: {
    fontSize: 20,
    color: 'red',
    alignSelf: 'center'
  }
};

export default LoginForm;

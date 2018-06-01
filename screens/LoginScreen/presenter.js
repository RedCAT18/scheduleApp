import React, { Component } from 'react';
import { View, Text, KeyboardAvoidingView, StyleSheet } from 'react-native';

import * as variable from '../../components/common/variables';

import { Button, Input, Card, CardItem } from '../../components/common';

const LoginScreen = props => {
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <Card>
        <Text style={styles.title}>What Is Next?</Text>
      </Card>
      <Card>
        <CardItem>
          <Input
            label="Email"
            value={props.email}
            placeholder={'Enter your email.'}
            onChangeText={value => props.inputForm({ prop: 'email', value })}
          />
        </CardItem>
        <CardItem>
          <Input
            label="Password"
            secureTextEntry={true}
            value={props.password}
            placeholder={'Enter your password'}
            placeholderTextColor={variable.secondLightColor}
            onChangeText={value => props.inputForm({ prop: 'password', value })}
          />
        </CardItem>
        <CardItem>{props.renderMessage(props.message)}</CardItem>
        <Button
          onPressOut={() =>
            props.submitLogin({
              email: props.email,
              password: props.password
            })
          }
        >
          Login
        </Button>
        <Text style={styles.text}>Not a member yet? Register now!</Text>
      </Card>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: variable.bgColor
  },
  title: {
    fontSize: 36,
    fontWeight: '600',
    color: variable.baseColor,
    marginBottom: 20
  },
  text: {
    color: variable.secondDarkColor,
    marginTop: 10,
    textAlign: 'center',
    fontSize: 14
  }
});

export default LoginScreen;

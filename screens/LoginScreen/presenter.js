import React, { Component } from 'react';
import { View, Text, KeyboardAvoidingView, StyleSheet } from 'react-native';

import * as variable from '../../components/common/variables';

import { Button, Input, Card, CardItem } from '../../components/common';

const LoginScreen = props => {
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <Card>
        <Text style={styles.title}>Scheduler</Text>
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
        <Button>Login</Button>
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
    fontSize: 24,
    fontWeight: '600',
    color: variable.darkColor
  }
});

export default LoginScreen;

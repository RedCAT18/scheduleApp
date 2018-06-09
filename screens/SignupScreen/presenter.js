import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  StyleSheet
} from 'react-native';

import PropTypes from 'prop-types';

import * as variable from '../../components/common/variables';

import { Button, Input, Card, CardItem } from '../../components/common';

const SignupScreen = props => {
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <Card>
        <Text style={styles.title}>What Is Next?</Text>
      </Card>
      <Card>
        <CardItem>
          <Input
            label="Name"
            value={props.name}
            placeholder={'Enter your name.'}
            onChangeText={value => props.inputForm({ prop: 'name', value })}
          />
        </CardItem>
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
            placeholder={'Password must be more than 6 characters.'}
            placeholderTextColor={variable.secondLightColor}
            onChangeText={value => props.inputForm({ prop: 'password', value })}
          />
        </CardItem>
        <CardItem>
          <Input
            label="Password Check"
            secureTextEntry={true}
            value={props.passwordcheck}
            placeholder={'Please write password again.'}
            placeholderTextColor={variable.secondLightColor}
            onChangeText={value =>
              props.inputForm({ prop: 'passwordcheck', value })
            }
          />
        </CardItem>

        <CardItem>{props.renderMessage(props.message)}</CardItem>
        <Button
          onPressOut={() =>
            props.submitSignup({
              email: props.email,
              name: props.name,
              password: props.password
            })
          }
        >
          Signup
        </Button>
        <TouchableWithoutFeedback onPressOut={() => props.navigation.goBack()}>
          <View>
            <Text style={styles.text}>Go back to Login</Text>
          </View>
        </TouchableWithoutFeedback>
      </Card>
    </KeyboardAvoidingView>
  );
};

// SignupScreen.propTypes = {
//   name: PropTypes.string.isRequired,
//   email: PropTypes.string.isRequired,
//   password: PropTypes.string.isRequired
// };

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

export default SignupScreen;

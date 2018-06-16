import React from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  Dimensions
} from 'react-native';
import { Button, CardItem } from '../../components/common';
import * as variable from '../../components/common/variables';

import UserForm from '../../components/UserForm';

const { width, height } = Dimensions.get('window');

const UserFormScreen = props => {
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <ScrollView>
        <View style={styles.titlearea}>
          <Text style={styles.title}>Update your Information</Text>
        </View>
        <UserForm {...props} />
        <CardItem>{props.renderMessage(props.message)}</CardItem>
        <View style={styles.buttonarea}>
          <Button
            style={styles.button}
            onPressOut={() => props.updateUser(props)}
          >
            Update
          </Button>
          <Button
            style={[styles.button, styles.grey]}
            onPressOut={() => props.navigation.goBack()}
          >
            Cancel
          </Button>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: variable.bgColor
  },
  titlearea: {
    marginVertical: 40
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: variable.darkColor
  },
  buttonarea: {
    marginVertical: 20,
    alignItems: 'center'
  },
  button: {
    marginBottom: 10,
    width: width * 0.8
  },
  grey: {
    backgroundColor: variable.secondColor
  }
});

export default UserFormScreen;

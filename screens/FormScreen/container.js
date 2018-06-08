import React, { Component } from 'react';
import { Text, StyleSheet, Platform } from 'react-native';

import FormScreen from './presenter';

class Container extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    return {
      title: params ? params.screenTitle : 'Form Title',
      headerTitleStyle: {
        ...Platform.select({
          ios: {
            fontWeight: '100'
          },
          android: {
            fontFamily: 'sans-serif-thin'
          }
        })
      }
    };
  };

  render() {
    return <FormScreen {...this.props} />;
  }
}

export default Container;

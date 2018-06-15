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

  componentWillMount() {
    if (this.props.navigation.state.routeName === 'Edit') {
      this.props.setParamsToUpdate(this.props.navigation.state.params);
    } else {
      this.props.resetForm();
    }
  }

  _saveSchedule(props) {
    return this.props.saveSchedule(props);
  }

  render() {
    return (
      <FormScreen
        {...this.props}
        saveSchedule={() => this._saveSchedule(this.props)}
      />
    );
  }
}

export default Container;

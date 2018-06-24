import React, { Component } from 'react';
import { Text, StyleSheet, Platform } from 'react-native';
import * as variable from '../../components/common/variables';

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

  _renderMessage(message) {
    if (message) {
      return <Text style={styles.warning}>{message}</Text>;
    }
  }

  render() {
    return (
      <FormScreen
        {...this.props}
        renderMessage={this._renderMessage(this.props.message)}
        saveSchedule={() => this._saveSchedule(this.props)}
      />
    );
  }
}

const styles = StyleSheet.create({
  warning: {
    color: variable.warningColor
  }
});

export default Container;

import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import LoginScreen from './presenter';

import * as variable from '../../components/common/variables';

class Container extends Component {
  renderMessage(message) {
    // console.log(this.props);
    if (message) {
      return <Text style={styles.warning}>{message}</Text>;
    }
  }
  render() {
    return <LoginScreen {...this.props} renderMessage={this.renderMessage} />;
  }
}

const styles = StyleSheet.create({
  warning: {
    margin: 5,
    color: variable.warningColor,
    textAlign: 'center'
  }
});

export default Container;

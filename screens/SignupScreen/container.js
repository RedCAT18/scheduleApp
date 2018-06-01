import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import SignupScreen from './presenter';

import * as variable from '../../components/common/variables';

class Container extends Component {
  componentWillMount() {
    this.props.resetState();
  }

  _renderMessage(message) {
    if (message) {
      return <Text style={styles.warning}>{message}</Text>;
    }
  }

  render() {
    return <SignupScreen {...this.props} renderMessage={this._renderMessage} />;
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

import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import SignupScreen from './presenter';

import PropTypes from 'prop-types';

import * as variable from '../../components/common/variables';

class Container extends Component {
  static propTypes = {
    email: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
  };

  componentWillMount() {
    this.props.resetState();
  }

  _renderMessage(message) {
    if (message) {
      return <Text style={styles.warning}>{message}</Text>;
    }
  }

  render() {
    const { email, name, password } = this.props;
    console.log({ email, name, password });
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

import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import UserFormScreen from './presenter';

import * as variable from '../../components/common/variables';

class Container extends Component {
  componentWillMount() {
    this.props.setUserForm(this.props.user);
  }

  _renderMessage(message) {
    if (message) {
      return <Text style={styles.warning}>{message}</Text>;
    }
  }

  render() {
    return (
      <UserFormScreen {...this.props} renderMessage={this._renderMessage} />
    );
  }
}

const styles = StyleSheet.create({
  warning: {
    color: variable.warningColor
  }
});
export default Container;

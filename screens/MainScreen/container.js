import React, { Component } from 'react';
import { View, StyleSteet } from 'react-native';
import MainScreen from './presenter';

class Container extends Component {
  render() {
    // console.log(this.props);
    return <MainScreen {...this.props} />;
  }
}

export default Container;

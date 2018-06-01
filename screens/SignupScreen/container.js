import React, { Component } from 'react';
import SignupScreen from './presenter';

class Container extends Component {
  render() {
    return <SignupScreen {...this.props} />;
  }
}

export default Container;

import React, { Component } from 'react';
import UserScreen from './presenter';

class Container extends Component {
  render() {
    return <UserScreen {...this.props} />;
  }
}

export default Container;

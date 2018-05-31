import React, { Component } from 'react';
import LoginScreen from './presenter';

class Container extends Component {
  componentWillMount() {
    this.props.initializeForm();
  }

  render() {
    return <LoginScreen {...this.props} />;
  }
}

export default Container;

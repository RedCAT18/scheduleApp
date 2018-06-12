import React, { Component } from 'react';
import UserScreen from './presenter';

class Container extends Component {
  _logout() {
    this.props.resetStorage();
    this.props.submitLogout();
  }

  render() {
    return <UserScreen {...this.props} setLogout={() => this._logout()} />;
  }
}

export default Container;

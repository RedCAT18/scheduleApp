import React, { Component } from 'react';

import AuthStack from '../../navigator/AuthStack';
class AppContainer extends Component {
  render() {
    const { isLoggedIn } = this.props;
    if (isLoggedIn) {
      //main navigator
    }
    //auth stack
    return <AuthStack />;
  }
}

export default AppContainer;

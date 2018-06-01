import React, { Component } from 'react';

import AuthStack from '../../navigator/AuthStack';
import MainScreen from '../../screens/MainScreen';

class AppContainer extends Component {
  componentWillReceiveProps(nextProps) {
    const currentProps = this.props;
    if (nextProps.isLoggedIn !== currentProps.isLoggedIn) {
      this._renderScreenByAuth(nextProps.isLoggedIn);
    }
  }

  _renderScreenByAuth(isLoggedIn) {
    return isLoggedIn ? <MainScreen /> : <AuthStack />;
  }

  render() {
    const { isLoggedIn } = this.props;
    return this._renderScreenByAuth(isLoggedIn);
  }
}

export default AppContainer;

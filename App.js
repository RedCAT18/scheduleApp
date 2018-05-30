import React, { Component } from 'react';
import { AppLoading, Asset, Font } from 'expo';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import AppContainer from './components/AppContainer';
import configurationStore from './store/configuragionStore';
const { persistor, store } = configurationStore();

class App extends Component {
  state = {
    isLoading: true
  };

  render() {
    const { isLoading } = this.state;

    if (isLoading) {
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    }
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <AppContainer />
        </PersistGate>
      </Provider>
    );
  }

  _loadAssetsAsync = async () => {
    return Promise.all([
      Asset.loadAsync([require('./assets/images/icon_sm.png')]),
      Font.loadAsync({
        ...FontAwesome.font,
        ...MaterialCommunityIcons.font
      })
    ]);
  };

  _handleLoadingError = error => {
    console.error(error);
  };

  _handleFinishLoading = () => {
    this.setState({
      isLoading: false
    });
  };
}

export default App;

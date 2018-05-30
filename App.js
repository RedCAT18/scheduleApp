import React, { Component } from 'react';
import { AppLoading, Asset, Font } from 'expo';
// import { } from '@expo/vector-icons';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import AppContainer from './components/AppContainer';
import configurationStore from './store/configuragionStore';
const { persistor, store } = configurationStore();

class App extends Component {
  state = {
    isLoading: false
  };

  render() {
    const { isLoading } = this.state;

    if (isLoading) {
      return <AppLoading />;
    }
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <AppContainer />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;

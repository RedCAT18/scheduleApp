import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistCombineReducers, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';

import auth from './modules/auth';
import schedule from './modules/schedule';

const middlewares = [thunk];

const persistConfig = {
  key: 'scheduleApp',
  storage
};

const reducer = persistCombineReducers(persistConfig, { auth, schedule });

const configurationStore = () => {
  let store = createStore(reducer, applyMiddleware(...middlewares));
  let persistor = persistStore(store);
  return { store, persistor };
};

export default configurationStore;

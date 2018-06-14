//import
import { api } from '../../api';

import { AsyncStorage } from 'react-native';
import storage from 'redux-persist/es/storage';

//types
const LOAD_DATA = 'load_data';
const LOAD_SUCCESS = 'load_success';
const LOAD_FAIL = 'load_fail';
const RESET_STORAGE = 'reset_storage';

//action creators

function loadData() {
  return dispatch => {
    dispatch({ type: LOAD_DATA });
    api
      .get('/schedule/show')
      .then(response => {
        // console.log(response.data);
        if (response.status === 200) {
          dispatch({ type: LOAD_SUCCESS, payload: response.data });
        }
      })
      .catch(error => {
        console.log(error);
        const msg = error.response.data || 'Network Error.';
        dispatch({ type: LOAD_FAIL, payload: msg });
      });
  };
}

function resetStorage() {
  storage.removeItem('persist:scheduleApp');
  return {
    type: RESET_STORAGE
  };
}

//initial state

const INITIAL_STATE = {
  isLoading: false,
  schedule: [],
  archive: [],
  message: '',
  statistics: []
};

//reducer
function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOAD_DATA:
      return applyLoadData(state);
    case LOAD_SUCCESS:
      return applyLoadSuccess(state, action.payload);
    case LOAD_FAIL:
      return applyLoadFail(state, action.payload);
    case RESET_STORAGE:
      return applyResetStorage(state);
    default:
      return state;
  }
}

//helpers
function applyLoadData(state) {
  return { ...state, isLoading: true, message: '' };
}

function applyLoadSuccess(state, payload) {
  return {
    ...state,
    ...INITIAL_STATE,
    schedule: payload.result.schedule || [],
    archive: payload.result.archive || [],
    statistics: payload.stat || []
  };
}

function applyLoadFail(state, payload) {
  return { ...state, isLoading: false, message: payload };
}

function applyResetStorage(state) {
  return { ...state, ...INITIAL_STATE };
}

//export

export const actionCreators = {
  loadData,
  resetStorage
};

export default reducer;

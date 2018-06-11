//import
import { api } from '../../api';

import { AsyncStorage } from 'react-native';
import storage from 'redux-persist/es/storage';

//types
const LOAD_DATA = 'load_data';
const LOAD_SUCCESS = 'load_success';
const LOAD_FAIL = 'load_fail';
const INITIALISE = 'initialise';

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

function initialiseData() {
  return {
    type: INITIALISE
  };
}

//initial state

const INITIAL_STATE = {
  isLoading: false,
  schedule: [],
  archive: [],
  message: ''
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
    case INITIALISE:
      return applyInitialise(state);
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
    schedule: payload.schedule || [],
    archive: payload.archive || []
  };
}

function applyLoadFail(state, payload) {
  return { ...state, isLoading: false, message: payload };
}

function applyInitialise(state) {
  return { ...state, ...INITIAL_STATE };
}

//export

export const actionCreators = {
  loadData,
  initialiseData
};

export default reducer;

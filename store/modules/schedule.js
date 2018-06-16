//import
import { api } from '../../api';

// import { AsyncStorage } from 'react-native';
import storage from 'redux-persist/es/storage';

//types
const LOAD_DATA = 'load_data';
const LOAD_SUCCESS = 'load_success';
const LOAD_FAIL = 'load_fail';
const RESET_STORAGE = 'reset_storage';
const RESET_MESSAGE = 'reset_message';

//action creators

function loadData() {
  return dispatch => {
    dispatch({ type: LOAD_DATA });
    api
      .get('/schedule/show')
      .then(response => {
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

function resetMessage() {
  return {
    type: RESET_MESSAGE
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
    case RESET_MESSAGE:
      return applyResetMessage(state);
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
    statistics: payload.stat || [],
    message: payload.checkingMessage || ''
  };
}

function applyLoadFail(state, payload) {
  return { ...state, isLoading: false, message: payload };
}

function applyResetStorage(state) {
  return { ...state, ...INITIAL_STATE };
}

function applyResetMessage(state) {
  return { ...state, message: '' };
}

//export

export const actionCreators = {
  loadData,
  resetStorage,
  resetMessage
};

export default reducer;

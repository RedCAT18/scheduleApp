//import
import { api } from '../../api';

//types
const LOAD_DATA = 'load_data';
const LOAD_SUCCESS = 'load_success';
const LOAD_FAIL = 'load_fail';

//action creators

function loadData() {
  return dispatch => {
    dispatch({ type: LOAD_DATA });
    api
      .get('/schedule/show')
      .then(response => {
        if (response.status === 200) {
          dispatch({ type: LOAD_SUCCESS, payload: response.data.result });
        }
      })
      .catch(error => {
        dispatch({ type: LOAD_FAIL, payload: error.response.data });
      });
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
    isLoading: false,
    schedule: payload.schedule,
    archive: payload.archive
  };
}

function applyLoadFail(state, payload) {
  return { ...state, isLoading: false, message: '' };
}

//export

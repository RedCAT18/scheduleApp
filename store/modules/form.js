//types

import { api } from '../../api';

const CREATE_SCHEDULE = 'create_schedule';
const INPUT_FORM = 'input_form';

const CREATE_SUCCESS = 'create_success';
const CREATE_FAIL = 'create_fail';

const SET_PARAMS = 'set_params';

//action creators
function inputForm({ prop, value }) {
  return {
    type: INPUT_FORM,
    payload: { prop, value }
  };
}

function createSchedule(data) {
  const schedule = {
    title: data.title,
    description: data.description,
    location: data.location,
    datetime: data.datetime,
    uid: data.uid || null
  };
  return dispatch => {
    dispatch(startCreate());
    if (schedule.title.length === 0) {
      dispatch(createFail('You must enter schedule title.'));
    } else {
      api
        .post('/schedule/save', schedule)
        .then(response => {
          if (response.status === 200) {
            dispatch(createSuccess());
            data.navigation.navigate('Schedule');
          } else {
            dispatch(createFail(response.data));
          }
        })
        .catch(err => {
          console.log(err);
          const message = err.response.data || 'NETWORK ERROR.';
          dispatch(createFail(message));
        });
    }
  };
}

function startCreate() {
  return {
    type: CREATE_SCHEDULE
  };
}

function createSuccess() {
  return {
    type: CREATE_SUCCESS
  };
}

function createFail(message) {
  return {
    type: CREATE_FAIL,
    payload: message
  };
}

function setParamsToForm(params) {
  return {
    type: SET_PARAMS,
    payload: params
  };
}

//initial state

const INITIAL_STATE = {
  title: '',
  description: '',
  location: '',
  datetime: '',
  status: '',
  uid: '',
  created_at: '',
  isSaving: false,
  message: ''
};

//reducers
function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case INPUT_FORM:
      return applyInputForm(state, action.payload);
    case CREATE_SCHEDULE:
      return applyCreateSchedule(state);
    case CREATE_SUCCESS:
      return applyCreateSuccess(state);
    case CREATE_FAIL:
      return applyCreateFail(state, action.payload);
    case SET_PARAMS:
      return applySetParamsToForm(state, action.payload);
    default:
      return state;
  }
}

//helpers

function applyInputForm(state, payload) {
  return { ...state, [payload.prop]: payload.value };
}

function applyCreateSchedule(state) {
  return { ...state, isSaving: true, message: '' };
}

function applyCreateSuccess(state) {
  return { ...state, ...INITIAL_STATE };
}

function applyCreateFail(state, payload) {
  return { ...state, isSaving: false, message: payload };
}

function applySetParamsToForm(state, payload) {
  return {
    ...state,
    title: payload.title,
    description: payload.description,
    location: payload.datetime,
    datetime: payload.datetime,
    status: payload.status,
    uid: payload.uid,
    created_at: payload.created_at
  };
}

//export

export const actioncreators = {
  inputForm,
  createSchedule,
  setParamsToForm
};

export default reducer;

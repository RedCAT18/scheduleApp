//types

import { api } from '../../api';

const SAVE_SCHEDULE = 'save_schedule';
const INPUT_FORM = 'input_form';

const SAVE_SUCCESS = 'save_success';
const SAVE_FAIL = 'save_fail';

const SET_PARAMS = 'set_params';
const RESET_FORM = 'reset_form';

//action creators
function inputForm({ prop, value }) {
  return {
    type: INPUT_FORM,
    payload: { prop, value }
  };
}

function saveSchedule(data) {
  const schedule = {
    title: data.title,
    description: data.description,
    location: data.location,
    datetime: data.datetime,
    status: data.status,
    uid: data.uid || null
  };
  // console.log(schedule);
  return dispatch => {
    dispatch(startSave());
    if (schedule.title.length === 0) {
      dispatch(saveFail('You must enter schedule title.'));
    } else {
      api
        .post('/schedule/save', schedule)
        .then(response => {
          if (response.status === 200) {
            dispatch(saveSuccess());
            data.navigation.navigate('Schedule', { updated: true });
          } else {
            dispatch(saveFail(response.data));
          }
        })
        .catch(err => {
          console.log(err);
          const message = err.response.data || 'NETWORK ERROR.';
          dispatch(saveFail(message));
        });
    }
  };
}

function updateStatus(data, newStatus) {
  const { params } = data.navigation.state;
  const updatedData = {
    title: params.title,
    description: params.description,
    location: params.location,
    datetime: params.datetime,
    status: newStatus,
    uid: params.uid
  };

  return dispatch => {
    dispatch(startSave());
    api
      .post('/schedule/save', updatedData)
      .then(response => {
        if (response.status === 200) {
          dispatch(saveSuccess());
          data.navigation.navigate('Schedule', { updated: true });
        } else {
          dispatch(saveFail(response.data));
        }
      })
      .catch(err => {
        console.log(err);
        const message = err.response.data || 'NETWORK ERROR';
        dispatch(saeFail(message));
      });
  };
}

function startSave() {
  return {
    type: SAVE_SCHEDULE
  };
}

function saveSuccess() {
  return {
    type: SAVE_SUCCESS
  };
}

function saveFail(message) {
  return {
    type: SAVE_FAIL,
    payload: message
  };
}

function setParamsToUpdate(params) {
  return {
    type: SET_PARAMS,
    payload: params
  };
}

function resetForm() {
  return {
    type: RESET_FORM
  };
}

function deleteSchedule(data) {
  const { params } = data.navigation.state;
  const uid = params.uid;

  return dispatch => {
    dispatch(startSave());
    api
      .post('/schedule/delete', { uid })
      .then(response => {
        if (response.status === 200) {
          dispatch(saveSuccess());
          data.navigation.navigate('Archive', { updated: true });
        } else {
          dispatch(saveFail(response.data));
        }
      })
      .catch(err => {
        console.log(err);
        const message = err.response.data || 'NETWORK ERROR';
        dispatch(saveFail(message));
      });
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
    case SAVE_SCHEDULE:
      return applySaveSchedule(state);
    case SAVE_SUCCESS:
      return applySaveSuccess(state);
    case SAVE_FAIL:
      return applySaveFail(state, action.payload);
    case SET_PARAMS:
      return applySetParamsToUpdate(state, action.payload);
    case RESET_FORM:
      return INITIAL_STATE;
    default:
      return state;
  }
}

//helpers

function applyInputForm(state, payload) {
  return { ...state, [payload.prop]: payload.value };
}

function applySaveSchedule(state) {
  return { ...state, isSaving: true, message: '' };
}

function applySaveSuccess(state) {
  return { ...state, ...INITIAL_STATE };
}

function applySaveFail(state, payload) {
  return { ...state, isSaving: false, message: payload };
}

function applySetParamsToUpdate(state, payload) {
  return {
    ...state,
    title: payload.title,
    description: payload.description,
    location: payload.location,
    datetime: payload.datetime,
    status: payload.status,
    uid: payload.uid,
    created_at: payload.created_at
  };
}

//export

export const actioncreators = {
  inputForm,
  saveSchedule,
  setParamsToUpdate,
  updateStatus,
  deleteSchedule,
  resetForm
};

export default reducer;

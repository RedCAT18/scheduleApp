import { AsyncStorage } from 'react-native';
import { api } from '../../api';

//types

const INPUT_FORM = 'input_form';
const SUBMIT_LOGIN = 'submit_login';
const LOGIN_SUCCESS = 'login_success';
const LOGIN_FAIL = 'login_fail';
const SUBMIT_SIGNUP = 'submit_signup';
const SIGNUP_SUCCESS = 'submit_success';
const SIGNUP_FAIL = 'submit_fail';

const RESET_TOKEN = 'reset_token';

//action creator

function inputForm({ prop, value }) {
  return {
    type: INPUT_FORM,
    payload: { prop, value }
  };
}

function submitLogin({ email, password }) {
  return dispatch => {
    dispatch({ type: SUBMIT_LOGIN });
    api
      .post('/auth/login', { email, password })
      .then(response => {
        console.log(response);
        if (response.status === 200) {
          if (response.data.token)
            AsyncStorage.setItem('token', response.data.token);
          if (response.data.auth) {
            dispatch({ type: LOGIN_SUCCESS });
          }
        }
      })
      .catch(error => {
        console.log(error.response);
        dispatch({
          type: LOGIN_FAIL,
          payload: error.response.data
        });
      });
  };
}

function submitSignup({ email, name, password }) {
  return dispatch => {
    dispatch({ type: SUBMIT_SIGNUP });
    api
      .post('/auth/signup', { email, name, password })
      .then(response => {
        // console.log(response);
        if (response.status === 200) {
          if (response.data.token)
            AsyncStorage.setItem('token', response.data.token);
          if (response.data.auth) {
            dispatch({ type: SIGNUP_SUCCESS });
          }
        }
      })
      .catch(error => {
        // console.log(error.response);
        dispatch({
          type: SIGNUP_FAIL,
          payload: error.response.data
        });
      });
  };
}

function resetToken() {
  AsyncStorage.removeItem('token');
  console.log('reset token');
  return {
    type: RESET_TOKEN
  };
}

//initial state

const INITIAL_STATE = {
  email: '',
  password: '',
  isLoading: false,
  message: '',
  isLoggedIn: false
};

//reducer

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case INPUT_FORM:
      return applyInputForm(state, action.payload);
    case SUBMIT_LOGIN:
      return applySubmitLogin(state);
    case LOGIN_SUCCESS:
      return applyLoginSuccess(state);
    case LOGIN_FAIL:
      return applyLoginFail(state, action.payload);
    case SUBMIT_SIGNUP:
      return applySubmitSignup(state);
    case SIGNUP_SUCCESS:
      return applySignupSuccess(state);
    case SIGNUP_FAIL:
      return applySignupFail(state, action.payload);
    case RESET_TOKEN:
      return applyResetToken(state);
    default:
      return state;
  }
}

//helper functions
function applyInputForm(state, payload) {
  return { ...state, [payload.prop]: payload.value };
}

function applySubmitLogin(state) {
  return { ...state, isLoading: true, message: '' };
}

function applyLoginSuccess(state) {
  return {
    ...state,
    email: '',
    password: '',
    isLoading: false,
    isLoggedIn: true,
    message: ''
  };
}

function applyLoginFail(state, payload) {
  return {
    ...state,
    email: '',
    password: '',
    isLoading: false,
    message: payload
  };
}

function applySubmitSignup(state) {
  return { ...state, isLoading: true, message: '' };
}

function applySignupSuccess(state) {
  return {
    ...state,
    email: '',
    password: '',
    name: '',
    isLoading: false,
    isLoggedIn: true,
    message: ''
  };
}

function applySignupFail(state, payload) {
  return {
    ...state,
    email: '',
    password: '',
    name: '',
    isLoading: false,
    message: payload
  };
}

function applyResetToken(state) {
  return {
    ...state,
    isLoggedIn: false
  };
}

export const actionCreators = {
  inputForm,
  submitLogin,
  submitSignup,
  resetToken
};

export default reducer;

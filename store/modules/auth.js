import { AsyncStorage } from 'react-native';
import { api } from '../../api';
import { validateEmail, validatePassword } from '../../helper/validate';
import storage from 'redux-persist/lib/storage';

//types

const INPUT_FORM = 'input_form';
const SUBMIT_LOGIN = 'submit_login';
const LOGIN_SUCCESS = 'login_success';
const LOGIN_FAIL = 'login_fail';
const SUBMIT_SIGNUP = 'submit_signup';
const SIGNUP_SUCCESS = 'signup_success';
const SIGNUP_FAIL = 'signup_fail';
const SUBMIT_LOGOUT = 'submit_logout';

const SET_USER_FORM = 'set_user_form';
const SUBMIT_UPDATE = 'submit_update';
const UPDATE_SUCCESS = 'update_success';
const UPDATE_FAIL = 'update_fail';

const RESET_STATE = 'reset_state';

//action creator

function resetState() {
  return {
    type: RESET_STATE
  };
}

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
        // console.log(response);
        if (response.status === 200) {
          if (response.data.token)
            AsyncStorage.setItem('token', response.data.token);
          if (response.data.auth) {
            dispatch({ type: LOGIN_SUCCESS, payload: response.data.user });
          }
        }
      })
      .catch(error => {
        console.log(error);
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

    const data = { email, name, password };
    if (
      data.email.length === 0 ||
      data.name.length === 0 ||
      data.password.length < 6
    ) {
      dispatch({
        type: SIGNUP_FAIL,
        payload: 'Please input your information correctly.'
      });
    } else if (!validatePassword(data.password, data.passwordcheck)) {
      dispatch({
        type: SIGNUP_FAIL,
        payload: 'Both password input are not the same.'
      });
    } else if (!validateEmail(data.email)) {
      dispatch({
        type: SIGNUP_FAIL,
        payload: 'Inappropriate Email address.'
      });
    } else {
      api
        .post('/auth/register', data)
        .then(response => {
          // console.log(response);
          if (response.status === 200) {
            if (response.data.token)
              AsyncStorage.setItem('token', response.data.token);
            if (response.data.auth) {
              dispatch({ type: SIGNUP_SUCCESS, payload: response.data.user });
            }
          }
        })
        .catch(error => {
          console.log(error);

          dispatch({
            type: SIGNUP_FAIL,
            payload: error.response.data
          });
        });
    }
  };
}

function submitLogout() {
  return {
    type: SUBMIT_LOGOUT
  };
}

function setUserForm(userinfo) {
  return {
    type: SET_USER_FORM,
    payload: userinfo
  };
}

function updateUser(data) {
  const userdata = {
    email: data.email,
    name: data.name,
    password: data.password.length === 0 ? null : data.password,
    uid: data.user.uid
  };

  return dispatch => {
    dispatch(submitUpdate());
    api
      .post('/auth/update', userdata)
      .then(response => {
        if (response.status === 200) {
          dispatch(updateSuccess(userdata));
          data.navigation.goBack();
        } else {
          dispatch(updateFail(response.data));
        }
      })
      .catch(error => {
        console.log(error);
        const message = error.response.data || 'NETWORK ERROR';
        dispatch(updateFail(message));
      });
  };
}

function submitUpdate() {
  return {
    type: SUBMIT_UPDATE
  };
}

function updateSuccess(data) {
  return {
    type: UPDATE_SUCCESS,
    payload: data
  };
}

function updateFail(data) {
  return {
    type: UPDATE_FAIL,
    payload: data
  };
}

//initial state

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
  passwordcheck: '',
  isLoading: false,
  message: '',
  isLoggedIn: false,
  uid: '',
  user: {}
};

//reducer

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case INPUT_FORM:
      return applyInputForm(state, action.payload);
    case SUBMIT_LOGIN:
      return applySubmitLogin(state);
    case LOGIN_SUCCESS:
      return applyLoginSuccess(state, action.payload);
    case LOGIN_FAIL:
      return applyLoginFail(state, action.payload);
    case SUBMIT_SIGNUP:
      return applySubmitSignup(state);
    case SIGNUP_SUCCESS:
      return applySignupSuccess(state, action.payload);
    case SIGNUP_FAIL:
      return applySignupFail(state, action.payload);
    case SET_USER_FORM:
      return applySetUserForm(state, action.payload);
    case SUBMIT_UPDATE:
      return applySubmitUpdate(state);
    case UPDATE_SUCCESS:
      return applyUpdateSuccess(state, action.payload);
    case UPDATE_FAIL:
      return applyUpdateFail(state, action.payload);
    case RESET_STATE:
      return INITIAL_STATE;
    case SUBMIT_LOGOUT:
      return applySubmitLogout(state);
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

function applyLoginSuccess(state, payload) {
  return {
    ...state,
    email: '',
    password: '',
    isLoading: false,
    isLoggedIn: true,
    message: '',
    user: payload
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

function applySignupSuccess(state, payload) {
  return {
    ...state,
    email: '',
    password: '',
    name: '',
    isLoading: false,
    isLoggedIn: true,
    message: '',
    user: payload
  };
}

function applySignupFail(state, payload) {
  return {
    ...state,
    email: '',
    password: '',
    passwordCheck: '',
    name: '',
    isLoading: false,
    message: payload
  };
}

function applySetUserForm(state, payload) {
  return {
    ...state,
    email: payload.email,
    name: payload.name,
    uid: payload.uid,
    message: ''
  };
}

function applySubmitUpdate(state) {
  return {
    ...state,
    isLoading: true,
    message: ''
  };
}

function applyUpdateSuccess(state, payload) {
  return {
    ...state,
    email: '',
    name: '',
    password: '',
    uid: '',
    message: '',
    isLoading: false,
    user: { email: payload.email, name: payload.name, uid: payload.uid }
  };
}

function applyUpdateFail(state, payload) {
  return {
    ...state,
    isLoading: false,
    message: payload
  };
}

function applySubmitLogout(state) {
  AsyncStorage.removeItem('token');
  storage.removeItem('persist:scheduleApp');
  return {
    ...state,
    isLoggedIn: false,
    user: {}
  };
}

export const actionCreators = {
  inputForm,
  submitLogin,
  submitSignup,
  submitLogout,
  resetState,
  setUserForm,
  updateUser
};

export default reducer;

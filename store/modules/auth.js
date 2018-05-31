//types

const INPUT_FORM = 'input_form';
const INITIALIZE_FORM = 'initialize_form';

//action creator

function inputForm({ prop, value }) {
  return {
    type: INPUT_FORM,
    payload: { prop, value }
  };
}

function initializeForm() {
  return {
    type: INITIALIZE_FORM
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
    case INITIALIZE_FORM:
      return state;
    default:
      return state;
  }
}

//helper functions
function applyInputForm(state, payload) {
  return { ...state, [payload.prop]: payload.value };
}

export const actionCreators = {
  inputForm,
  initializeForm
};

export default reducer;

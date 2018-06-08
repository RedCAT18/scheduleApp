//types

const CREATE_SCHEDULE = 'create_schedule';
const INPUT_FORM = 'input_form';

//action creators
function inputForm({ prop, value }) {
  return {
    type: INPUT_FORM,
    payload: { prop, value }
  };
}

function createSchedule(data) {
  return {
    type: CREATE_SCHEDULE,
    payload: data
  };
}

//initial state

const INITIAL_STATE = {
  title: '',
  description: '',
  location: '',
  datetime: '',
  status: '',
  user: '',
  created_at: ''
};

//reducers
function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case INPUT_FORM:
      return applyInputForm(state, action.payload);
    case CREATE_SCHEDULE:
      return applyCreateSchedule(state);
    default:
      return state;
  }
}

//helpers

function applyInputForm(state, payload) {
  return { ...state, [payload.prop]: payload.value };
}

//export

export const actioncreators = {
  inputForm,
  createSchedule
};

export default reducer;

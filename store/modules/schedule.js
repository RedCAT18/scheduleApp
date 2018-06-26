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
const LOAD_NEXT_DATA_SUCCESS = 'load_next_data_success';
const LOAD_NEXT_DATA_FAIL = 'load_next_data_fail';

//action creators

function loadData(data) {
  // console.log(data);
  return dispatch => {
    dispatch({ type: LOAD_DATA });
    api
      .get(`/schedule/show/${data.currentSchedulePage}/${data.currentScreen}`)
      .then(response => {
        console.log(response.data);
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

//infinite scroll용 api.
function loadNextData(data) {
  //로드하고자 하는 곳의 라우터 페이지가 schedule/archive인지 판별해 엔드포인트 구성
  //데이터를 로드해 올 때 마다 page를 넘긴다.
  const currentScreen = data.currentScreen;
  const currentPage =
    currentScreen === 'Schedule'
      ? data.currentSchedulePage + 1
      : data.currentArchivePage + 1;

  return dispatch => {
    dispatch({ type: LOAD_DATA });
    api
      .get(`/schedule/show/${currentPage}/${currentScreen}`)
      .then(response => {
        console.log(response.data);
        if (response.status === 200) {
          dispatch({ type: LOAD_NEXT_DATA_SUCCESS, payload: response.data });
        } else {
          dispatch({ type: LOAD_NEXT_DATA_FAIL, payload: response.data });
        }
      })
      .catch(error => {
        console.log(error);
        const msg = error.response.data || 'Network Error.';
        dispatch({ type: LOAD_FAIL, payload: msg });
      });
  };
}

function resetPages() {
  return {
    type: RESET_STORAGE
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
  message: null,
  statistics: [],
  currentSchedulePage: 1,
  currentArchivePage: 1,
  totalSchedulePages: 1,
  totalArchivePages: 1,
  isNextScheduleExist: true,
  isNextArchiveExist: true
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
    case LOAD_NEXT_DATA_SUCCESS:
      return applyLoadNextDataSuccess(state, action.payload);
    case LOAD_NEXT_DATA_FAIL:
      return applyLoadNextDataFail(state, action.payload);
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
  return {
    ...state,
    isLoading: true
  };
}

function applyLoadSuccess(state, payload) {
  return {
    ...state,
    ...INITIAL_STATE,
    schedule: payload.result.schedule || [],
    archive: payload.result.archive || [],
    statistics: payload.stat || [],
    message: payload.checkingMessage || null,
    totalSchedulePages: payload.totalSchedulePages,
    totalArchivePages: payload.totalArchivePages,
    isNextScheduleExist: payload.totalSchedulePages <= 1 ? false : true,
    isNextArchiveExist: payload.totalArchivePages <= 1 ? false : true
  };
}

function applyLoadFail(state, payload) {
  return { ...state, isLoading: false, message: payload };
}

function applyLoadNextDataSuccess(state, payload) {
  if (payload.screen === 'Schedule') {
    const newSchedule = state.schedule.concat(payload.data);
    return {
      ...state,
      isLoading: false,
      schedule: newSchedule,
      currentSchedulePage: payload.page,
      isNextScheduleExist:
        state.totalSchedulePages == payload.page ? false : true
    };
  } else {
    const newArchive = state.archive.concat(payload.data);
    return {
      ...state,
      isLoading: false,
      archive: newArchive,
      currentArchivePage: payload.page,
      isNextArchiveExist: state.totalArchivePages == payload.page ? false : true
    };
  }
}

function applyLoadNextDataFail(state, payload) {
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
  resetMessage,
  loadNextData,
  resetPages
};

export default reducer;

import Container from './container';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actionCreators as scheduleActions } from '../../store/modules/schedule';

function mapStateToProps(state) {
  const { isLoggedIn, user } = state.auth;
  const {
    schedule,
    message,
    isLoading,
    currentSchedulePage,
    isNextScheduleExist
  } = state.schedule;

  return {
    user,
    isLoggedIn,
    schedule,
    message,
    isLoading,
    currentSchedulePage,
    isNextScheduleExist
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadData: bindActionCreators(scheduleActions.loadData, dispatch),
    resetMessage: bindActionCreators(scheduleActions.resetMessage, dispatch),
    loadNextData: bindActionCreators(scheduleActions.loadNextData, dispatch),
    resetPages: bindActionCreators(scheduleActions.resetPages, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);

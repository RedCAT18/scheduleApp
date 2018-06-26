import Container from './container';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actionCreators as scheduleActions } from '../../store/modules/schedule';

function mapStateToProps(state) {
  const { isLoggedIn, user } = state.auth;
  const {
    archive,
    isLoading,
    message,
    currentArchivePage,
    isNextArchiveExist
  } = state.schedule;
  return {
    user,
    isLoggedIn,
    archive,
    isLoading,
    message,
    currentArchivePage,
    isNextArchiveExist
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadData: bindActionCreators(scheduleActions.loadData, dispatch),
    resetMessage: bindActionCreators(scheduleActions.resetMessage, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);

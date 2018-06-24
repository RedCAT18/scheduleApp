import Container from './container';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actionCreators as scheduleActions } from '../../store/modules/schedule';

function mapStateToProps(state) {
  const { isLoggedIn, user } = state.auth;
  const { archive, isLoading, message, currentArchivePage } = state.schedule;
  return {
    user,
    isLoggedIn,
    archive,
    isLoading,
    message,
    currentArchivePage
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadData: bindActionCreators(scheduleActions.loadData, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);

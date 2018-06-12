import Container from './container';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actionCreators as userAction } from '../../store/modules/auth';
import { actionCreators as scheduleAction } from '../../store/modules/schedule';

function mapStateToProps(state) {
  const { isLoggedIn, user } = state.auth;

  return { isLoggedIn, user };
}

function mapDispatchToProps(dispatch) {
  return {
    submitLogout: bindActionCreators(userAction.submitLogout, dispatch),
    resetStorage: bindActionCreators(scheduleAction.resetStorage, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);

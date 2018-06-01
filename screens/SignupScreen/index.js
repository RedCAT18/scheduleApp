import Container from './container';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actionCreators as authActions } from '../../store/modules/auth';

function mapStateToProps(state) {
  const { email, password, name, isLoading, message, isLoggedIn } = state.auth;

  return { email, password, name, isLoading, message, isLoggedIn };
}

function mapDispatchToProps(dispatch) {
  return {
    inputForm: bindActionCreators(authActions.inputForm, dispatch),
    submitSignup: bindActionCreators(authActions.submitSignup, dispatch),
    resetState: bindActionCreators(authActions.resetState, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);

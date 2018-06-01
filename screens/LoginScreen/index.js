import Container from './container';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actionCreators as authActions } from '../../store/modules/auth';

function mapStateToProps(state) {
  const { email, password, isLoading, message, isLoggedIn } = state.auth;
  return { email, password, isLoading, message, isLoggedIn };
}

function mapDispatchToProps(dispatch) {
  return {
    inputForm: bindActionCreators(authActions.inputForm, dispatch),
    submitLogin: bindActionCreators(authActions.submitLogin, dispatch),
    resetState: bindActionCreators(authActions.resetState, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);

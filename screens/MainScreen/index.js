import Container from './container';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actionCreators as authActions } from '../../store/modules/auth';

function mapStateToProps(state) {
  const { isLoggedIn } = state.auth;
  return { isLoggedIn };
}

function mapDispatchToProps(dispatch) {
  return {
    resetToken: bindActionCreators(authActions.resetToken, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);

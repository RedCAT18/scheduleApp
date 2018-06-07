import Container from './container';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actionCreators as userAction } from '../../store/modules/auth';

function mapStateToProps(state) {
  const { isLoggedIn, user } = state.auth;

  return { isLoggedIn, user };
}

function mapDispatchToProps(dispatch) {
  return {
    logout: bindActionCreators(userAction.submitLogout, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);

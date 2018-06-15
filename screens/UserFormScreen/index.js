import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Container from './container';

import { actionCreators as authActions } from '../../store/modules/auth';

function mapStateToProps(state) {
  const { name, email, password, passwordcheck, message, user } = state.auth;
  return { name, email, password, passwordcheck, message, user };
}

function mapDispatchToProps(dispatch) {
  return {
    inputForm: bindActionCreators(authActions.inputForm, dispatch),
    setUserForm: bindActionCreators(authActions.setUserForm, dispatch),
    updateUser: bindActionCreators(authActions.updateUser, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);

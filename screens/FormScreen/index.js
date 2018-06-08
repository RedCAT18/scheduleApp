import Container from './container';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actioncreators as formActions } from '../../store/modules/form';

function mapStateToProps(state) {
  const {
    title,
    description,
    location,
    datetime,
    status,
    user,
    created_at
  } = state.form;
  const { uid } = state.auth.user;
  return {
    title,
    description,
    location,
    datetime,
    status,
    user,
    created_at,
    uid
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createSchedule: bindActionCreators(formActions.createSchedule, dispatch),
    inputForm: bindActionCreators(formActions.inputForm, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);

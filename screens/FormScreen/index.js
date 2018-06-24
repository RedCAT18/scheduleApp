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
    created_at,
    uid,
    message
  } = state.form;

  return {
    title,
    description,
    location,
    datetime,
    status,
    created_at,
    uid,
    message
  };
}

function mapDispatchToProps(dispatch) {
  return {
    saveSchedule: bindActionCreators(formActions.saveSchedule, dispatch),
    inputForm: bindActionCreators(formActions.inputForm, dispatch),
    setParamsToUpdate: bindActionCreators(
      formActions.setParamsToUpdate,
      dispatch
    ),
    resetForm: bindActionCreators(formActions.resetForm, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);

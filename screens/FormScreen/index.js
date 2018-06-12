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
    uid
  } = state.form;

  return {
    title,
    description,
    location,
    datetime,
    status,
    created_at,
    uid
  };
}

function mapDispatchToProps(dispatch) {
  return {
    saveSchedule: bindActionCreators(formActions.saveSchedule, dispatch),
    inputForm: bindActionCreators(formActions.inputForm, dispatch),
    setParamsToUpdate: bindActionCreators(
      formActions.setParamsToUpdate,
      dispatch
    )
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);

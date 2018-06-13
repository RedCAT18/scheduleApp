import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Container from './container';

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
    updateStatus: bindActionCreators(formActions.updateStatus, dispatch),
    confirmDelete: bindActionCreators(formActions.deleteSchedule, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ListItem from './presenter';

// function mapStateToProps(state) {
//   const { schedule } = state.schedule;
//   return { schedule };
// }

export default connect()(ListItem);
// mapStateToProps,

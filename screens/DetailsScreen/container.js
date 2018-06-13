import React, { Component } from 'react';
import DetailsScreen from './presenter';

class Container extends Component {
  static naviationOptions = {
    header: null
  };

  state = {
    modalVisible: false
  };

  _toggleModal() {
    this.setState({
      modalVisible: !this.state.modalVisible
    });
  }

  _deleteSchedule(props) {
    this.props.confirmDelete(props);
    this._toggleModal();
  }

  render() {
    return (
      <DetailsScreen
        {...this.props}
        modalVisible={this.state.modalVisible}
        scheduleDone={() => this.props.updateStatus(this.props, 'DONE')}
        scheduleDrop={() => this.props.updateStatus(this.props, 'DROP')}
        toggleModal={() => this._toggleModal()}
        deleteSchedule={() => this._deleteSchedule(this.props)}
      />
    );
  }
}

export default Container;

import React, { Component } from 'react';
import DetailsScreen from './presenter';

class Container extends Component {
  static naviationOptions = {
    header: null
  };

  render() {
    return (
      <DetailsScreen
        {...this.props}
        scheduleDone={() => this.props.updateStatus(this.props, 'DONE')}
        scheduleDrop={() => this.props.updateStatus(this.props, 'DROP')}
      />
    );
  }
}

export default Container;

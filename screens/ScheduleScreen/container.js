import React, { Component } from 'react';

import ScheduleScreen from './presenter';

class Container extends Component {
  render() {
    return <ScheduleScreen {...this.props} />;
  }
}

export default Container;

import React, { Component } from 'react';
import DetailsScreen from './presenter';

class Container extends Component {
  render() {
    return <DetailsScreen {...this.props} />;
  }
}

export default Container;

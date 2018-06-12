import React, { Component } from 'react';
import { ListView } from 'react-native';

import ScheduleItem from '../../components/ScheduleItem';
import ScheduleScreen from './presenter';

class Container extends Component {
  componentWillMount() {
    this.props.loadData();
    // console.log(this.props.schedule);
    this._createDataSource(this.props.schedule);
  }

  componentWillReceiveProps(nextProps) {
    const params = nextProps.navigation.state.params || null;

    if (params && params.updated) {
      this.props.loadData();
      params.updated = false;
    }
    this._createDataSource(nextProps.schedule);
  }

  _createDataSource(schedule) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(schedule);
  }

  _renderItem(rowData) {
    return <ScheduleItem schedule={rowData} />;
  }

  render() {
    return (
      <ScheduleScreen
        {...this.props}
        dataSource={this.dataSource}
        renderItem={this._renderItem}
      />
    );
  }
}

export default Container;

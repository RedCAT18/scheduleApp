import React, { Component } from 'react';
import { ListView } from 'react-native';

import ListItem from '../../components/ListItem';
import ScheduleScreen from './presenter';

class Container extends Component {
  componentWillMount() {
    this.props.loadData();
    // console.log(this.props);
    this._createDataSource(this.props.schedule);
  }

  componentWillReceiveProps(nextProps) {
    const currentProps = this.props;
    if (currentProps.isLoggedIn !== nextProps.isLoggedIn) {
      this.props.loadData();
      this._createDataSource(this.props);
    }
  }

  _createDataSource(schedule) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(schedule);
  }

  _renderItem(rowData) {
    // console.log(rowData);
    return <ListItem schedule={rowData} />;
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

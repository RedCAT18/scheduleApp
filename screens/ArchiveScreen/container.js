import React, { Component } from 'react';
import { ListView } from 'react-native';

import ArchiveItem from '../../components/ArchiveItem';
import ArchiveScreen from './presenter';

class Container extends Component {
  componentWillMount() {
    this.props.loadData();
    // console.log(this.props);
    this._createDataSource(this.props.archive);
  }

  componentWillReceiveProps(nextProps) {
    const currentProps = this.props;
    if (currentProps.isLoggedIn !== nextProps.isLoggedIn) {
      this.props.loadData();
      this._createDataSource(this.props.archive);
    }
  }

  _createDataSource(archive) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(archive);
  }

  _renderItem(rowData) {
    // console.log(rowData);
    return <ArchiveItem archive={rowData} />;
  }

  render() {
    return (
      <ArchiveScreen
        {...this.props}
        dataSource={this.dataSource}
        renderItem={this._renderItem}
      />
    );
  }
}

export default Container;

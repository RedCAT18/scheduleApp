import React, { Component } from 'react';
import { ListView } from 'react-native';

import ArchiveItem from '../../components/ArchiveItem';
import ArchiveScreen from './presenter';

class Container extends Component {
  state = {
    modalVisible: false,
    data: true
  };

  componentWillMount() {
    // this.props.loadData();
    this._createDataSource(this.props.archive);
    if (this.props.message) {
      this.setState({
        modalVisible: true
      });
    }
    if (this.props.archive.length === 0) {
      this.setState({
        data: false
      });
    } else {
      this.setState({
        data: true
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    const params = nextProps.navigation.state.params || null;

    if (params && params.updated) {
      this.props.loadData();
      params.updated = false;
    }
    this._createDataSource(nextProps.archive);
    if (nextProps.archive.length === 0) {
      this.setState({
        data: false
      });
    } else {
      this.setState({
        data: true
      });
    }
  }

  _createDataSource(archive) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(archive);
  }

  _closeModal() {
    this.setState({
      modalVisible: !this.state.modalVisible
    });
    this.props.resetMessage();
  }

  _renderItem(rowData) {
    return <ArchiveItem archive={rowData} />;
  }

  render() {
    return (
      <ArchiveScreen
        {...this.props}
        sendData={this.state.data}
        modalVisible={this.state.modalVisible}
        dataSource={this.dataSource}
        renderItem={this._renderItem}
        closeModal={() => this._closeModal()}
      />
    );
  }
}

export default Container;

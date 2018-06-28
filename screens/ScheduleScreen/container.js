import React, { Component } from 'react';
import { ListView } from 'react-native';

import ScheduleItem from '../../components/ScheduleItem';
import ScheduleScreen from './presenter';

class Container extends Component {
  state = {
    modalVisible: false,
    data: true
  };

  componentWillMount() {
    const currentScreen = this.props.navigation.state.routeName;
    const { currentSchedulePage } = this.props;
    // console.log(currentSchedulePage, currentScreen);

    this.props.loadData({ currentScreen, currentSchedulePage });

    if (this.props.message) {
      this.setState({
        modalVisible: true
      });
    }

    this._createDataSource(this.props.schedule);

    if (this.props.schedule.length === 0) {
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
      const currentScreen = this.props.navigation.state.routeName;
      const { currentSchedulePage } = this.props;

      this.props.loadData({ currentScreen, currentSchedulePage });

      params.updated = false;
    }

    if (this.props.message) {
      this.setState({
        modalVisible: true
      });
    }
    this._createDataSource(nextProps.schedule);
    if (nextProps.schedule.length === 0) {
      this.setState({
        data: false
      });
    } else {
      this.setState({
        data: true
      });
    }
  }

  componentWillUnmount() {
    this.props.resetPages();
  }

  _createDataSource(schedule) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(schedule);
  }

  _closeModal() {
    this.setState({
      modalVisible: !this.state.modalVisible
    });
    this.props.resetMessage();
  }

  _renderItem(rowData) {
    return <ScheduleItem schedule={rowData} />;
  }

  _nextLoad(props) {
    const currentScreen = props.navigation.state.routeName;
    const { currentSchedulePage } = props;
    if (props.isNextScheduleExist && !props.isLoading) {
      this.props.loadNextData({ currentScreen, currentSchedulePage });
    }
  }

  render() {
    return (
      <ScheduleScreen
        {...this.props}
        sendData={this.state.data}
        modalVisible={this.state.modalVisible}
        dataSource={this.dataSource}
        renderItem={this._renderItem}
        closeModal={() => this._closeModal()}
        nextLoad={() => this._nextLoad(this.props)}
      />
    );
  }
}

export default Container;

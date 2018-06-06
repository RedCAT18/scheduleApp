import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { CardItem } from '../common';
import { Ionicons } from '@expo/vector-icons';

import * as variable from '../common/variables';

const { width } = Dimensions.get('window');

class ArchiveItem extends Component {
  _renderIcon() {
    return this.props.archive.status === 'DONE' ? (
      <Ionicons name={'ios-checkmark'} size={35} color={variable.baseColor} />
    ) : (
      <Ionicons name={'ios-close'} size={35} color={variable.warningColor} />
    );
  }
  render() {
    const { title } = this.props.archive;

    return (
      <CardItem>
        <View style={styles.container}>
          <Text style={styles.title}>{title}</Text>
          {this._renderIcon()}
        </View>
      </CardItem>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: width - 15,
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 24,
    color: variable.secondDarkColor,
    marginBottom: 5
  }
});

export default ArchiveItem;

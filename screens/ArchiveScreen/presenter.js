import React from 'react';
import {
  View,
  ListView,
  StatusBar,
  Dimensions,
  Text,
  StyleSheet
} from 'react-native';

import { Constants } from 'expo';
import { Card } from '../../components/common';

import * as variable from '../../components/common/variables';

const { width, height } = Dimensions.get('window');

const ArchiveScreen = props => {
  return (
    <View style={styles.container}>
      <StatusBar
        varStyle="dark-content"
        backgroundColor={variable.baseColor}
        translucent
      />
      <Card style={styles.card}>
        <Text style={styles.topText}>{props.user.name}'s Archive</Text>
      </Card>
      <ListView
        enableEmptySections
        dataSource={props.dataSource}
        renderRow={props.renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  card: {
    backgroundColor: variable.baseColor,
    height: height * 0.15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width,
    paddingHorizontal: 20,
    paddingTop: Constants.statusBarHeight + 15
  },
  topText: {
    color: variable.bgColor,
    fontSize: 24
  }
});

export default ArchiveScreen;

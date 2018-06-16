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
      <StatusBar backgroundColor={variable.baseColor} translucent />
      <Card style={styles.card}>
        <Text style={styles.topText}>{props.user.name}'s Archive</Text>
      </Card>

      {props.sendData ? (
        <ListView
          enableEmptySections
          dataSource={props.dataSource}
          renderRow={props.renderItem}
        />
      ) : (
        <View style={styles.nodata}>
          <Text style={styles.nodatatext}>No archive yet. :/</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
  },
  nodata: {
    marginTop: 100,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  nodatatext: {
    color: variable.secondColor,
    fontSize: 28,
    fontWeight: '700'
  }
});

export default ArchiveScreen;

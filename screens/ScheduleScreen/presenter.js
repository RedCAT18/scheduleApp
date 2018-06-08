import React from 'react';
import {
  View,
  ListView,
  StatusBar,
  Dimensions,
  Text,
  TouchableWithoutFeedback,
  StyleSheet
} from 'react-native';
import { Constants } from 'expo';
import { Card } from '../../components/common';
import { Ionicons } from '@expo/vector-icons';

import * as variable from '../../components/common/variables';

const { width, height } = Dimensions.get('window');

const ScheduleScreen = props => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={variable.baseColor} translucent />
      <Card style={styles.card}>
        <View style={styles.innerbox}>
          <Text style={styles.topText}>{props.user.name}'s Schedule</Text>
        </View>
        <TouchableWithoutFeedback
          style={styles.innerbox}
          onPressOut={() =>
            props.navigation.navigate('Add', {
              screenTitle: 'New Schedule'
            })
          }
        >
          <Ionicons
            name={'ios-add-circle-outline'}
            size={30}
            color={variable.bgColor}
          />
        </TouchableWithoutFeedback>
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
    height: height * 0.12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width,
    padding: 20,
    marginTop: Constants.statusBarHeight
  },
  innerbox: {
    justifyContent: 'center'
  },
  topText: {
    color: variable.bgColor,
    fontSize: 24
  }
});

export default ScheduleScreen;

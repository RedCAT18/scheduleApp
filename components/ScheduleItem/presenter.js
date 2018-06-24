import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from 'react-native';
import { CardItem } from '../common';
import { withNavigation } from 'react-navigation';

import * as variable from '../common/variables';

const { width } = Dimensions.get('window');

class ScheduleItem extends Component {
  render() {
    const { title, location, datetime } = this.props.schedule;

    return (
      <CardItem>
        <View style={styles.container}>
          <View style={styles.outerbox}>
            <TouchableOpacity
              onPressOut={() =>
                this.props.navigation.navigate('Detail', this.props.schedule)
              }
            >
              <Text style={styles.title}>{title}</Text>
            </TouchableOpacity>
            <View style={styles.innerbox}>
              <Text style={styles.location}>{location}</Text>
              <Text style={styles.datetime}>{datetime}</Text>
            </View>
          </View>
        </View>
      </CardItem>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: width - 15,
    padding: 5
  },
  title: {
    fontSize: 24,
    color: variable.secondDarkColor,
    marginBottom: 5
  },
  outerbox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  innerbox: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    maxWidth: '35%'
  },
  location: {
    color: variable.secondDarkColor
  },
  datetime: {
    color: variable.secondDarkColor
  }
});

export default withNavigation(ScheduleItem);

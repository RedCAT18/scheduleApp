import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { CardItem } from '../common';

import * as variable from '../common/variables';

const { width } = Dimensions.get('window');

class ListItem extends Component {
  render() {
    const { title, description, location, datetime } = this.props.schedule;
    console.log(this.props);
    return (
      <CardItem>
        <View style={styles.container}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
          <View style={styles.innerbox}>
            <Text style={styles.location}>{location}</Text>
            <Text style={styles.datetime}>{datetime}</Text>
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
    fontWeight: '600',
    color: variable.darkColor,
    marginBottom: 5
  },
  description: {
    color: variable.secondDarkColor,
    fontSize: 16,
    marginBottom: 10
  },
  innerbox: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default ListItem;

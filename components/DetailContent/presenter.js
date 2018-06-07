import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import * as variable from '../common/variables';

const { width, height } = Dimensions.get('window');

const DetailContent = props => {
  const { title, description, location, datetime, created_at } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.descarea}>
        <Text style={styles.detailtext}>{description}</Text>
      </View>
      <Text style={styles.detailtext}>{location}</Text>
      <Text style={styles.detailtext}>{datetime}</Text>
      <View style={styles.bottomarea}>
        <Text style={styles.smalltext}>{created_at}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 40,
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: variable.secondLightColor,
    padding: 10
  },
  title: {
    fontSize: 24,
    color: variable.darkColor,
    marginVertical: 20
  },
  descarea: {
    minHeight: 60
  },
  detailtext: {
    fontSize: 16,
    color: variable.darkColor,
    marginBottom: 20
  },
  bottomarea: {
    alignItems: 'flex-end',
    marginTop: 20
  },
  smalltext: {
    fontSize: 14,
    color: variable.darkColor,
    marginBottom: 20
  }
});

export default DetailContent;

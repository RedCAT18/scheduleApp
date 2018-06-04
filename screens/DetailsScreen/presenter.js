import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from '../../components/common';

const DetailsScreen = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Details Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: '600'
  }
});

export default DetailsScreen;

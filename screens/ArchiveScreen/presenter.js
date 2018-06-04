import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ArchiveScreen = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Archive Screen</Text>
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

export default ArchiveScreen;

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const UserScreen = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Screen</Text>
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

export default UserScreen;

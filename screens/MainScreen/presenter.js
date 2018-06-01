import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Button } from '../../components/common';

const MainScreen = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MainScreen</Text>
      <Button onPressOut={() => props.resetToken()}>Reset</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: '600'
  }
});

export default MainScreen;

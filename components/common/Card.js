import React from 'react';
import { View, StyleSheet } from 'react-native';

import * as variable from './variables';

const Card = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: variable.bgColor,
    marginBottom: 5
  }
});

export { Card };

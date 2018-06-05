import React from 'react';
import { View, StyleSheet } from 'react-native';

import * as variable from './variables';

const Card = props => {
  return <View style={[styles.container, props.style]}>{props.children}</View>;
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: variable.bgColor
  }
});

export { Card };

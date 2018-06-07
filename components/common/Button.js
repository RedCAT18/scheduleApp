import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';

import * as variables from './variables';

const { width, height } = Dimensions.get('window');

const Button = props => {
  return (
    <TouchableOpacity
      onPressOut={props.onPressOut}
      style={[styles.container, props.style]}
    >
      <Text style={styles.text}>{props.children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width - 20,
    height: variables.baseHeight,
    backgroundColor: variables.baseColor,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: variables.bgColor,
    fontSize: 24,
    fontWeight: '600'
  }
});

export { Button };

import React from 'react';
import { View, StyleSheet } from 'react-native';

import * as variable from './variables';

const CardItem = ({ children, onPress }) => {
  return (
    <View style={styles.container} onPressOut={onPress}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: variable.secondLightColor,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: variable.bgColor
  }
});

export { CardItem };

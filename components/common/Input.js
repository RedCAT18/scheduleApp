import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  Platform
} from 'react-native';
import * as variable from './variables';

const { width, height } = Dimensions.get('window');

const Input = ({
  label,
  value,
  placeholder,
  multiline,
  numberOfLines = 1,
  secureTextEntry = false,
  onChangeText
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        multiline={multiline}
        numberOfLines={numberOfLines}
        secureTextEntry={secureTextEntry}
        value={value}
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={variable.secondColor}
        underlineColorAndroid={'transparent'}
        autoCorrect={false}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    width: width * 0.8
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: variable.darkColor,
    marginBottom: 5,
    justifyContent: 'center'
  },
  input: {
    color: variable.secondDarkColor,
    fontSize: 14
  }
});

export { Input };

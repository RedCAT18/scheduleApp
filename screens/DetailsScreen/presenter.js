import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from '../../components/common';
import DetailContent from '../../components/DetailContent';

const DetailsScreen = props => {
  const params = props.navigation.state.params;
  return <DetailContent {...params} />;
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

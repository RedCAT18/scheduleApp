import React from 'react';
import { ScrollView, View, Text, Dimensions, StyleSheet } from 'react-native';
import { Button } from '../../components/common';
import DetailContent from '../../components/DetailContent';
import * as variable from '../../components/common/variables';

const { width, height } = Dimensions.get('window');

const DetailsScreen = props => {
  const params = props.navigation.state.params;
  return (
    <ScrollView>
      <DetailContent {...params} />
      {params.status === 'ONGOING' ? (
        <View>
          <Button style={styles.button}>Edit</Button>
          <Button style={styles.button}>Complete</Button>
          <Button style={[styles.button, styles.grey]}>Drop</Button>
        </View>
      ) : (
        <Button style={[styles.button, styles.grey]}>Delete</Button>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    marginHorizontal: 10,
    marginBottom: 5
  },
  grey: {
    backgroundColor: variable.secondDarkColor
  }
});

export default DetailsScreen;

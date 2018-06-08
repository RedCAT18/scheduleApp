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
        <View style={styles.buttonarea}>
          <Button style={styles.button}>Edit</Button>
          <Button style={styles.button}>Complete</Button>
          <Button style={[styles.button, styles.grey]}>Drop</Button>
        </View>
      ) : (
        <View style={styles.buttonarea}>
          <Button style={[styles.button, styles.grey, styles.delete]}>
            Delete
          </Button>
        </View>
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
    marginBottom: 5,
    width: width * 0.8
  },
  buttonarea: {
    alignItems: 'center'
  },
  grey: {
    backgroundColor: variable.secondDarkColor
  },
  delete: {
    marginTop: 80
  }
});

export default DetailsScreen;

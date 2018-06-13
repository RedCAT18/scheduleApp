import React from 'react';
import {
  Modal,
  ScrollView,
  View,
  Text,
  Dimensions,
  StyleSheet
} from 'react-native';
import { Button } from '../../components/common';
import DetailContent from '../../components/DetailContent';
import * as variable from '../../components/common/variables';

const { width, height } = Dimensions.get('window');

const DetailsScreen = props => {
  const params = props.navigation.state.params;
  return (
    <ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.modalVisible}
        onRequestClose={() => {
          console.log('close modal');
        }}
      >
        <View style={styles.modalcontainer}>
          <Text style={styles.modalText}>
            Do you want to really delete this schedule?
          </Text>
          <Text style={styles.modalSubText}>
            (Your schedule statistic will remain after deletion.)
          </Text>
          <View style={styles.modalButton}>
            <Button
              style={styles.smallButton}
              onPressOut={props.deleteSchedule}
            >
              <Text>Delete</Text>
            </Button>
            <Button
              style={[styles.grey, styles.smallButton]}
              onPressOut={props.toggleModal}
            >
              <Text>Cancel</Text>
            </Button>
          </View>
        </View>
      </Modal>

      <DetailContent {...params} />
      {params.status === 'ONGOING' ? (
        <View style={styles.buttonarea}>
          <Button
            style={styles.button}
            onPressOut={() =>
              props.navigation.navigate('Edit', {
                screenTitle: 'Edit Schedule',
                ...params
              })
            }
          >
            Edit
          </Button>
          <Button style={styles.button} onPressOut={props.scheduleDone}>
            Complete
          </Button>
          <Button
            style={[styles.button, styles.grey]}
            onPressOut={props.scheduleDrop}
          >
            Drop
          </Button>
        </View>
      ) : (
        <View style={styles.buttonarea}>
          <Button
            style={[styles.button, styles.grey, styles.delete]}
            onPressOut={props.toggleModal}
          >
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
  },
  modalcontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    height: height * 0.4,
    marginTop: height * 0.2,
    padding: 20,
    backgroundColor: variable.bgColor
  },
  modalButton: {
    flexDirection: 'row',
    marginHorizontal: 5
  },
  smallButton: {
    width: width * 0.4
  },
  modalText: {
    fontSize: 16,
    marginBottom: 10
  },
  modalSubText: {
    fontSize: 13,
    marginBottom: 20
  }
});

export default DetailsScreen;

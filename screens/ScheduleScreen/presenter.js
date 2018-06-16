import React from 'react';
import {
  Modal,
  View,
  ListView,
  StatusBar,
  Dimensions,
  Text,
  TouchableWithoutFeedback,
  StyleSheet
} from 'react-native';
import { Button } from '../../components/common';
import { Constants } from 'expo';
import { Card } from '../../components/common';
import { Ionicons } from '@expo/vector-icons';

import * as variable from '../../components/common/variables';

const { width, height } = Dimensions.get('window');

const ScheduleScreen = props => {
  console.log(props.schedule);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={variable.baseColor} translucent />

      <Modal
        animationType="fade"
        transparent={true}
        visible={props.modalVisible}
        onRequestClose={() => {
          console.log('close modal');
        }}
      >
        <View style={styles.modalcontainer}>
          <Text style={styles.modalText}>{props.message}</Text>
          <View style={styles.modalButton}>
            <Button style={[styles.grey]} onPressOut={props.closeModal}>
              <Text>Close</Text>
            </Button>
          </View>
        </View>
      </Modal>

      <Card style={styles.card}>
        <View style={styles.innerbox}>
          <Text style={styles.topText}>{props.user.name}'s Schedule</Text>
        </View>
        <TouchableWithoutFeedback
          style={styles.innerbox}
          onPressOut={() =>
            props.navigation.navigate('Add', {
              screenTitle: 'New Schedule'
            })
          }
        >
          <Ionicons
            name={'ios-add-circle-outline'}
            size={30}
            color={variable.bgColor}
          />
        </TouchableWithoutFeedback>
      </Card>

      {props.sendData ? (
        <ListView
          enableEmptySections
          dataSource={props.dataSource}
          renderRow={props.renderItem}
        />
      ) : (
        <View style={styles.nodata}>
          <Text style={styles.nodatatext}>No schedule yet. :/</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  card: {
    backgroundColor: variable.baseColor,
    height: height * 0.15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width,
    paddingHorizontal: 20,
    paddingTop: Constants.statusBarHeight + 15
  },
  innerbox: {
    alignItems: 'center'
  },
  topText: {
    color: variable.bgColor,
    fontSize: 24
  },
  modalcontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    minHeight: height * 0.3,
    marginTop: height * 0.3,
    padding: 20,
    backgroundColor: variable.bgColor
  },
  modalButton: {
    marginHorizontal: 10
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20
  },
  grey: {
    width: width * 0.8,
    backgroundColor: variable.secondColor
  },
  nodata: {
    marginTop: 100,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  nodatatext: {
    color: variable.secondColor,
    fontSize: 28,
    fontWeight: '700'
  }
});

export default ScheduleScreen;

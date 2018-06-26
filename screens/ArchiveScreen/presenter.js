import React from 'react';
import {
  ActivityIndicator,
  Modal,
  View,
  ListView,
  StatusBar,
  Dimensions,
  Text,
  StyleSheet,
  Platform
} from 'react-native';

import { Constants } from 'expo';
import { Button, Card } from '../../components/common';

import * as variable from '../../components/common/variables';

const { width, height } = Dimensions.get('window');

const ArchiveScreen = props => {
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
        <Text style={styles.topText}>{props.user.name}'s Archive</Text>
      </Card>

      {props.sendData ? (
        <ListView
          enableEmptySections
          dataSource={props.dataSource}
          renderRow={props.renderItem}
          onEndReached={props.nextLoad()}
        />
      ) : (
        <View style={styles.nodata}>
          <Text style={styles.nodatatext}>No archive yet. :/</Text>
        </View>
      )}
      {props.isLoading ? (
        <ActivityIndicator style={styles.loadingBar} size={32} />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 45
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
  topText: {
    color: variable.bgColor,
    fontSize: 24
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
  },
  loadingBar: {
    paddingVertical: 10
  },
  modalcontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    minHeight: height * 0.3,
    marginTop: height * 0.3,
    padding: 20,
    backgroundColor: variable.bgColor,
    ...Platform.select({
      ios: {
        shadowColor: variable.secondColor,
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: '50%',
        shadowRadius: 3
      },
      android: {
        elevation: 3
      }
    })
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
  }
});

export default ArchiveScreen;

import React from 'react';
import {
  ScrollView,
  KeyboardAvoidingView,
  View,
  Text,
  Dimensions,
  StyleSheet
} from 'react-native';
import DatePicker from 'react-native-datepicker';
import { Input, Button } from '../../components/common';

import * as variable from '../../components/common/variables';

const { width, height } = Dimensions.get('window');

const FormScreen = props => {
  return (
    <KeyboardAvoidingView behavior="padding">
      <ScrollView>
        <View style={styles.container}>
          <Input
            label={'Title'}
            value={props.title}
            placeholder={'Schedule Title'}
            onChangeText={value => props.inputForm({ prop: 'title', value })}
          />
          <Input
            label={'Description'}
            value={props.description}
            placeholder={'Description about schedule'}
            multiline
            numberOfLines={6}
            onChangeText={value =>
              props.inputForm({ prop: 'description', value })
            }
          />
          <Input
            label={'Location'}
            value={props.location}
            placeholder={'Where the schedule is done?'}
            onChangeText={value => props.inputForm({ prop: 'location', value })}
          />
          <Text style={styles.label}>Date & Time</Text>
          <DatePicker
            style={styles.picker}
            mode="datetime"
            value={props.datetime}
            placeholder={props.datetime}
            customStyles={{
              placeholderText: { color: variable.secondColor }
            }}
            onDateChange={value => props.inputForm({ prop: 'datetime', value })}
          />
          <View style={styles.buttonarea}>
            <Button style={styles.button} onPressOut={props.addSchedule}>
              Add Schedule
            </Button>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 40
  },
  title: {
    fontSize: 24
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: variable.darkColor,
    margin: 5,
    justifyContent: 'center'
  },
  picker: {
    marginVertical: 10,
    width: width * 0.8
  },
  buttonarea: {
    alignItems: 'center',
    paddingTop: 40
  },
  button: {
    width: width * 0.8
  }
});

export default FormScreen;

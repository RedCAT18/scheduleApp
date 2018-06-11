import React from 'react';
import { createStackNavigator } from 'react-navigation';

import * as variable from '../components/common/variables';
import ScheduleScreen from '../screens/ScheduleScreen';
import DetailRoute from '../routes/DetailRoute';
import FormScreen from '../screens/FormScreen';

const ScheduleRoute = createStackNavigator(
  {
    Schedule: {
      screen: ScheduleScreen,
      navigationOptions: {
        header: null
      }
    },
    Detail: {
      screen: DetailRoute,
      navigationOptions: {
        headerStyle: {
          backgroundColor: variable.baseColor
        },
        headerTintColor: variable.bgColor
      }
    },
    Add: {
      screen: FormScreen,
      navigationOptions: {
        headerStyle: {
          backgroundColor: variable.baseColor
        },
        headerTintColor: variable.bgColor
      }
    },
    Edit: {
      screen: FormScreen,
      navigationOptions: {
        headerStyle: {
          backgroundColor: variable.baseColor
        },
        headerTintColor: variable.bgColor
      }
    }
  },
  {
    initialRouteName: 'Schedule'
  }
);
[];
export default ScheduleRoute;

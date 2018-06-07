import React from 'react';
import { createStackNavigator } from 'react-navigation';

import * as variable from '../components/common/variables';
import ScheduleScreen from '../screens/ScheduleScreen';
import DetailsScreen from '../screens/DetailsScreen';

const ScheduleRoute = createStackNavigator(
  {
    Schedule: {
      screen: ScheduleScreen,
      navigationOptions: {
        header: null
      }
    },
    Detail: {
      screen: DetailsScreen,
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

export default ScheduleRoute;

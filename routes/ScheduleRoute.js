import React from 'react';
import { createStackNavigator } from 'react-navigation';

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
    Detail: { screen: DetailsScreen }
  },
  {
    initialRouteName: 'Schedule'
  }
);

export default ScheduleRoute;

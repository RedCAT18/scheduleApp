//main tab navigation : schedule, archive, userinfo
import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import ScheduleRoute from '../routes/ScheduleRoute';
import ArchiveRoute from '../routes/ArchiveRoute';
import UserScreen from '../screens/UserScreen';
// import MainScreen from '../screens/MainScreen';

import * as variable from '../components/common/variables';

const MainNavigator = createBottomTabNavigator(
  {
    Schedule: {
      screen: ScheduleRoute
    },
    Archive: {
      screen: ArchiveRoute
    },
    User: {
      screen: UserScreen
    }
  },
  {
    initialRouteName: 'Schedule',
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Schedule') {
          iconName = `ios-calendar${focused ? '' : '-outline'}`;
        } else if (routeName === 'Archive') {
          iconName = `ios-archive${focused ? '' : '-outline'}`;
        } else if (routeName === 'User') {
          iconName = `ios-person${focused ? '' : '-outline'}`;
        }
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: variable.darkColor,
      inactiveTintColor: variable.secondColor
    }
  }
);

export default MainNavigator;

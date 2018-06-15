import { createStackNavigator } from 'react-navigation';

// import * as variable from '../components/common/variables';

import UserScreen from '../screens/UserScreen';
import UserFormScreen from '../screens/UserFormScreen';

const UserRoute = createStackNavigator(
  {
    User: {
      screen: UserScreen
    },
    UserForm: {
      screen: UserFormScreen
    }
  },
  {
    initialRouteName: 'User',
    navigationOptions: {
      header: null
    }
  }
);

export default UserRoute;

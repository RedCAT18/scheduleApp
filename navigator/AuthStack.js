//auth stack과 Main Navigator에서
//isLoggedin값이 trus이면 Main을, false면 authStack을 보여줌

//AuthStack: LoginScreen, SignupSCreen
//MainNavigator: Schedule, Archive, UserInfo screen

import { createStackNavigator } from 'react-navigation';

import LoginScreen from '../screens/LoginScreen/';

const AuthStack = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        header: null
      }
    }
    // Signup: { screen: SignupScreen }
  },
  {
    initialRouteName: 'Login'
  }
);

export default AuthStack;

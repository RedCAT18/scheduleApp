import { createStackNavigator } from 'react-navigation';

import * as variable from '../components/common/variables';

import DetailsScreen from '../screens/DetailsScreen';
import FormScreen from '../screens/FormScreen';

const DetailRoute = createStackNavigator(
  {
    Detail: {
      screen: DetailsScreen,
      navigationOptions: {
        header: null
      }
    },
    Form: {
      screen: FormScreen,
      navigationOptions: {
        headerStyle: {
          backgroundColor: variable.baseColor
        },
        headerTintColor: variable.bgColor
      }
    }
  },
  {}
);

export default DetailRoute;

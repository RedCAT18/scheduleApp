import { createStackNavigator } from 'react-navigation';
import * as variable from '../components/common/variables';

import ArchiveScreen from '../screens/ArchiveScreen';
import DetailsScreen from '../screens/DetailsScreen';

const ArchiveRoute = createStackNavigator(
  {
    Archive: {
      screen: ArchiveScreen,
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
    initialRouteName: 'Archive'
  }
);

export default ArchiveRoute;

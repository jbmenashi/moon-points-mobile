import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './components/Home';
import MyProfile from './components/MyProfile';
import Standings from './components/Standings';
import Stats from './components/Stats';

const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  MyProfile: { screen: MyProfile},
  Standings: { screen: Standings},
  Stats: { screen: Stats}
});

export default createAppContainer(AppNavigator);
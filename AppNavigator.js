import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from './components/Login';
import Home from './components/Home';
import MyProfile from './components/MyProfile';
import Standings from './components/Standings';
import Stats from './components/Stats';
import CamContainer from './containers/CamContainer';
import CamComponent from './components/CamComponent';

const AppNavigator = createStackNavigator({
   Login: { screen: Login },
   Home: { screen: Home },
   CamContainer: { screen: CamContainer },
   CamComponent: { screen: CamComponent },
   MyProfile: { screen: MyProfile },
   Standings: { screen: Standings },
   Stats: { screen: Stats }
});

export default createAppContainer(AppNavigator);
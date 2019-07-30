import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from './components/Login';
import Home from './components/Home';
import MyProfile from './components/MyProfile';
import Standings from './components/Standings';
import Stats from './components/Stats';
import CamContainer from './containers/CamContainer'

const AppNavigator = createStackNavigator({
   Login: { screen: Login },
   Home: { screen: Home },
   CamContainer: { screen: CamContainer},
   MyProfile: { screen: MyProfile},
   Standings: { screen: Standings},
   Stats: { screen: Stats}
});

export default createAppContainer(AppNavigator);
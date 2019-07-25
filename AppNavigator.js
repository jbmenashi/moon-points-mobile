import { createStackNavigator } from 'react-navigation';
import Home from './components/Home';
import Friends from './components/Friends';

const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  Friends: { screen: Friends}
});

export default AppNavigator;
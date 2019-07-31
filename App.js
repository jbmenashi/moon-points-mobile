import React from 'react';
import AppNavigator from './AppNavigator';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducer';

import styles from './styles'

const store = createStore(reducer);

class App extends React.Component {
   render() {
      return (
         <Provider store={ store }>
            <AppNavigator/>
         </Provider>
      );
   }
}

export default App

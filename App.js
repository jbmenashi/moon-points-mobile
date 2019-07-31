import React from 'react';
import AppNavigator from './AppNavigator';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducer';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Friends extends React.Component {
  render() {
    return (
      <View style={styles.container}>
         <h1>Friends!</h1>
         <Button
            title="Back to home"
            onPress={() => this.props.navigation.navigate('Home')}
         />
      </View>
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
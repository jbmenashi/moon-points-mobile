import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Stats extends React.Component {
  render() {
    return (
      <View style={styles.container}>
         <Text>Stats</Text>
         <Button
            title="Return To Home Page"
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
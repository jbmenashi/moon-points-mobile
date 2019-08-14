import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Standings extends React.Component {
  render() {
    return (
      <View style={styles.container}>
         <Text>Standings</Text>
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
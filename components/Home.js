import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux'

const mapStateToProps = state => {
   return {
      test: state.test
   }
}

class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
         <Text>Welcome to Moon Points!!</Text>
         <Button title="My Profile" onPress={() => this.props.navigation.navigate('MyProfile')}/>
         <Button title="Standings" onPress={() => this.props.navigation.navigate('Standings')}/>
         <Button title="Stats" onPress={() => this.props.navigation.navigate('Stats')}/>
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

export default connect(mapStateToProps)(Home);
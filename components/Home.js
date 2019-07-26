import React from 'react';
import { StyleSheet, Text, View, YellowBox } from 'react-native';
import { Button } from 'react-native-elements'
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
         <Text style={styles.title}>Moon Points!</Text>
         <Button style={styles.link} title="My Profile" onPress={() => this.props.navigation.navigate('MyProfile')}/>
         <Button style={styles.link} title="Standings" onPress={() => this.props.navigation.navigate('Standings')}/>
         <Button style={styles.link} title="Stats" onPress={() => this.props.navigation.navigate('Stats')}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#7A13E1',
      alignItems: 'center',
      justifyContent: 'center',
   },
   title: {
      color: '#F3D83A',
      fontSize: 30
   }
});

export default connect(mapStateToProps)(Home);
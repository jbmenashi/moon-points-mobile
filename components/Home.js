import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements'
import { connect } from 'react-redux'

const mapStateToProps = state => {
   return {
      test: state.test
   }
}

const mapDispatchToProps = dispatch => {
   return {
      loadPoints: (points) => dispatch({type: 'LOAD_POINTS', payload: points})
   }
}

class Home extends React.Component {

   componentDidMount() {
      fetch('http://localhost:3001/points')

   }
   render() {
      return (
         <View style={styles.container}>
            <Text style={styles.title}>Moon Points!</Text>
            <Button type="outline" style={styles.link} title="My Profile" onPress={() => this.props.navigation.navigate('MyProfile')}/>
            <Button type="outline" style={styles.link} title="Standings" onPress={() => this.props.navigation.navigate('Standings')}/>
            <Button type="outline" style={styles.link} title="Stats" onPress={() => this.props.navigation.navigate('Stats')}/>
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
   },
   link: {
      backgroundColor: '#7A13E1',
      borderColor: '#F3D83A',
      marginBottom: 6
   }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
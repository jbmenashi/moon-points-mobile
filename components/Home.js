import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements'
import { connect } from 'react-redux'

const mapStateToProps = state => {
   return {
      points: state.points,
      dailyPointCheck: state.dailyPointCheck,
      dailyPoint: state.dailyPoint
   }
}

const mapDispatchToProps = dispatch => {
   return {
      loadPoints: (points) => dispatch({type: 'LOAD_POINTS', payload: points}),
      flipPointCheck: () => dispatch({type: 'FLIP_POINT_CHECK'}),
      setDailyPoint: (point) => dispatch({type: 'SET_DAILY_POINT', payload: point})
   }
}

class Home extends React.Component {

   componentDidMount() {
      fetch('http://localhost:3001/points')
      .then(res => res.json())
      .then(data => this.props.loadPoints(data))
   }

   pointAcquired(points) {
      let today = new Date()
      let foundPoint = this.props.points.find(point => point.date === today)
      if (foundPoint) {
         this.props.flipPointCheck()
         this.props.setDailyPoint(foundPoint)
         return true
      }
      else {
         return false
      }
   }

   render() {
      return (
         <View style={styles.container}>
            <Text style={styles.title}>Moon Points!</Text>
            {this.points.dailyPointCheck ? 
            <Text>Today's Moon Point has already been claimed by {this.props.dailyPoint.user}!</Text> :
            <CamContainer/>}
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
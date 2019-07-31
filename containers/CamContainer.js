import React from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-elements'

function CamContainer() {
   return (
      <View>
         <Text>Today's Moon Point is still up for grabs!</Text>
         <Button title="Take a Picture!" onPress={() => this.props.navigation.navigate('CamComponent')}/>
      </View>
   )
}

export default CamContainer;
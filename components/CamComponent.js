import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Camera, Permissions } from 'expo';
import { connect } from 'react-redux'

const mapStateToProps = state => {
   return {
      camPermitted: state.camPermitted
   }
}

class CamComponent extends Component {
   camera = null;



   async componentDidMount() {
      const camera = await Permissions.askAsync(Permissions.CAMERA);
      const audio = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
      const hasCameraPermission = (camera.status === 'granted' && audio.status === 'granted');

      // this.setState({ hasCameraPermission });
   };

   render() {
      return (
         <View>
            <Text>Camera!</Text>
         </View>
      );
   }
}

export default connect(mapStateToProps)(CamComponent);
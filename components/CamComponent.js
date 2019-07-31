import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Camera, Permissions } from 'expo';
import { connect } from 'react-redux'

const mapStateToProps = state => {
   return {
      camPermitted: state.camPermitted
   }
}

const mapDispatchToProps = dispatch => {
   return {
      permitCamera: () => dispatch({type: 'PERMIT_CAMERA'}),
      dontPermitCamera: () => dispatch({type: 'DONT_PERMIT_CAMERA'})
   }
}

class CamComponent extends Component {
   camera = null;

   async componentDidMount() {
      const camera = await Permissions.askAsync(Permissions.CAMERA);
      const audio = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
      const hasCameraPermission = (camera.status === 'granted' && audio.status === 'granted');

      hasCameraPermission ? this.props.permitCamera() : this.props.dontPermitCamera()
   };

   render() {
      return (
         <View>
            <Text>Camera!</Text>
         </View>
      );
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(CamComponent);
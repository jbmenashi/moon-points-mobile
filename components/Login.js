import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
 
const mapStateToProps = state => {
   return {
      currentUsername: state.currentUsername,
      currentUserId: state.currentUserId,
      usernameInput: state.usernameInput
   }
}

const mapDispatchToProps = dispatch => {
   return {
      setUser: (id, username) => dispatch({type: "SET_USER", id: id, username: username}),
      inputUsername: (input) => dispatch({type: "INPUT_USERNAME", payload: input.target.value})
   }
}

class Login extends React.Component {

   submitUsername = (input) => {
      fetch('http://localhost:3001/users')
      .then(res => res.json())
      .then(data => {
         let foundUser = data.find(user => user.username === input)
         // console.log(foundUser)
         if (foundUser) {
            this.props.setUser(foundUser._id, foundUser.username)
         }
         else {
            fetch('http://localhost:3001/users', {
               method: 'POST',
               headers: {
                  'Content-Type':'application/json',
               },
               body: JSON.stringify({
                  username: input,
                  bio: 'I am a moon buffoon'
               })
            })
            .then(res => res.json())
            .then(data => this.props.setUser(data._id, data.username))
         }
      })
   }

   render() { 
      return ( 
         <View>
            <Text>Login!</Text>
            <Input onChange={this.props.inputUsername} value={this.props.usernameInput} placeholder="Username"/>
            <Button onClick={() => this.submitUsername(this.props.usernameInput)}>Submit</Button>
         </View>
       );
   }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Login);
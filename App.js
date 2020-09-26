import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import fire from './config/fire';
import Login from './Login'
import Home from './Home'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user : {}
    }
  } 
  componentDidMount() {
    this.authListener();
  }
  authListener() {
    fire.auth().onAuthStateChanged((user)=>{
      if(user) {
        this.setState({user})
      } else {
        this.setState({user : null})
      }
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
        {this.state.user ? (<Home/>) : (<Login/>)}
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

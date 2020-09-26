import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import fire from './config/fire';

class Login extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.signup = this.signup.bind(this);
        this.state={
            email : "",
            password : ""
        }
    }
    login(e) {
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
            console.log(u)
        }).catch((err)=>{
            console.log(err);
        })
        console.warn(this.state);
    }
    signup(e) {
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=> {
            console.log(u)
        }).catch((err)=>{
            console.log(err);
        })
    }
    render() {
        return (
            <View style={styles.container}>
            <TextInput style={userInput.container}
            placeholder="enter email address"
            onChangeText={(text) => { this.setState({email : text}) }}
            />
            <TextInput style={userInput.container}
            placeholder="enter password right here"
            secureTextEntry={true}
            onChangeText={(text) => { this.setState({password : text}) }}
            secureTextEntry={true}
           />
           <Button title="Login" onPress={() => {this.login()}} />
           <Button title="Sign Up" onPress={() => {this.signup()}} />

            <Text>Please login</Text>
            <StatusBar style="auto" />
            {/* <form>
                <input
                type='email'
                id="email"
                placeholder="enter email address"
                onChange={this.handleChange}
                value={this.state.email}
                />
                <input
                type="pasdsword"
                id="password"
                placeholder="enter password"
                value={this.state.password}
                />
                <button onClick={this.login}>Login</button>
                <button onClick={this.signup}>Signup</button>

            </form> */}
          </View>
        );
      }
}

export default Login;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  const userInput = StyleSheet.create({
    container: {
      borderWidth: 2,
      margin: 20,
      borderColor: 'skyblue',
    },
  });
  

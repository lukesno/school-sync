import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state={

        }
    }
    render() {
        return (
            <View style={styles.container}>
            <Text>You are logged in!!!</Text>
            <StatusBar style="auto" />
            {/* <button>Logout</button> */}
          </View>
        );
      }
}

export default Home;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  

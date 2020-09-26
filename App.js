import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import MainScreen from './components/MainScreen.js';
import RegisterScreen from './components/RegisterScreen.js';
import Dashboard from './components/Dashboard.js'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import fire from './fire.js'

const Stack = createStackNavigator();

function App() {

  const [user, setUser] = useState(null);

  //Loading screen for when firebase data is being retrieved
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const usersRef = fire.firestore().collection('users');
    //Returns currently logged in user
    fire.auth().onAuthStateChanged(user => {
      if(user) {
        usersRef.doc(user.uid).get().then(document => {
          const userData = document.data()
          setUser(userData)
          setLoading(false)
        }).catch(error => {
          console.log(error);
          setLoading(false);
        })
      } else {
        console.log("huh?")
        setLoading(false)
      }
    })
  }, []);

  if(loading) {

    // Add a proper loading design here
    return (
      <Text>Hiaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</ Text>
    )
  }

  return (
    <NavigationContainer>
      {/* If user is logged in when launched, send straight to Dashboard */}
      <Stack.Navigator initialRouteName={user ? "Dashboard" : "Main"}>
        <Stack.Screen name="Dashboard" options={{
          gestureEnabled: false,
          
          cardStyle: {
            backgroundColor: 'white'
          }
        }}>
          {props => <Dashboard {...props} user={user} />}
        </Stack.Screen> 
        <Stack.Screen name="Main" component={MainScreen} options={{
          gestureEnabled: false,
          headerShown: false,
          cardStyle: {
            backgroundColor: 'white'
          }
        }}/>
        <Stack.Screen name="Register" component={RegisterScreen} options={{
          cardStyle: {
            backgroundColor: 'white'
          }
        }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
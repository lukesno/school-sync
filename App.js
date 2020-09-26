import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import MainScreen from './components/MainScreen.js';
import RegisterScreen from './components/RegisterScreen.js';
import EnrollScreen from './components/EnrollScreen.js';
import CreateScreen from './components/CreateScreen.js';
import RegisterOptionsScreen from './components/RegisterOptionsScreen.js';
import DashboardScreen from './components/DashboardScreen.js';



import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={MainScreen} options={{
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
        <Stack.Screen name="Enroll" component={EnrollScreen} options={{
          cardStyle: {
            backgroundColor: 'white'
          }
        }} />
        <Stack.Screen name="Create" component={CreateScreen} options={{
          cardStyle: {
            backgroundColor: 'white'
          }
        }} />
        <Stack.Screen name="RegisterOptions" component={RegisterOptionsScreen} options={{
          cardStyle: {
            backgroundColor: 'white'
          }
        }} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} options={{
          cardStyle: {
            backgroundColor: 'white'
          }
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
import styles from './Dashboard.style';
import React from 'react';

import { Text, View, TouchableOpacity } from 'react-native';
import fire from '../fire';

const Dashboard = ({user, navigation}) => {
    // Take in some props; in order to access data accordingly in Firebase
    console.log(user)
    return (
        <View>
            <Text>Welcome to your dashboard!</Text>

            <TouchableOpacity style={styles.signOutButton} onPress={() => {
                fire.auth().signOut().then(() => alert('User signed out!'));
                navigation.navigate('Main')
            }}>
                <Text style={styles.signOutText}>Sign Out</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.signOutButton} onPress={() => {
                navigation.navigate('AddAssignment')
            }}>
                <Text style={styles.signOutText}>Add Assignment</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Dashboard;
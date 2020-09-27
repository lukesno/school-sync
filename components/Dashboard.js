import styles from './Dashboard.style';
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import fire from '../fire';
import AddAssignmentButton from './AddAssignmentButton';

const Dashboard = ({user, navigation}) => {
    // Take in some props; in order to access data accordingly in Firebase
    console.log(user)
    return (
        <View>
            <Text>Abc</Text>
            <TouchableOpacity style={styles.signOutButton} onPress={() => {
                fire.auth().signOut().then(() => alert('User signed out!'));
                navigation.navigate('Main')
            }}>
                <Text style={styles.signOutText}>Sign Out</Text>
            </TouchableOpacity>
            <AddAssignmentButton/>
        </View>
    );
}

export default Dashboard;
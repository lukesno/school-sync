import styles from './Dashboard.style';
import React, { useState, useEffect } from 'react';

import { Text, View, TouchableOpacity, SafeAreaView, ScrollView  } from 'react-native';
import fire from '../fire';

const Dashboard = ({ navigation }) => {
    // Take in some props; in order to access data accordingly in Firebase
    const [user, setUser] = useState(null);

    const currentUser = fire.auth().currentUser;
    const usersRef = fire.firestore().collection('users')

    useEffect(() => {
        usersRef.doc(currentUser.uid).get().then(userReturned => {
            const updatedUser = userReturned.data()
            setUser(updatedUser);
        })
    }, [])

    console.log(user)
    if(!user) {
        return null;
    }

    // const currentUser = updatedUser ? updatedUser : user

    // if(!currentUser) {
    //     return null;
    // }
    return (
        <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>  
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

</ScrollView>
</SafeAreaView>
    );
}

export default Dashboard;
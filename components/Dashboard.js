import styles from './Dashboard.style';
import React, { useState, useEffect } from 'react';

import { Text, View, TouchableOpacity, SafeAreaView, ScrollView  } from 'react-native';
import fire from '../fire';

const Dashboard = ({ navigation }) => {
    // Take in some props; in order to access data accordingly in Firebase
    const [user, setUser] = useState(null);
    const [classes, setClasses] = useState(null)

    const currentUser = fire.auth().currentUser;
    const usersRef = fire.firestore().collection('users')
    const classesRef = fire.firestore().collection('classes')

    useEffect(() => {
        usersRef.doc(currentUser.uid).get().then(userReturned => {
            const updatedUser = userReturned.data()
            setUser(updatedUser);
        })
    }, [])

    useEffect(() => {
        if(user) {
            classesRef.where('classID', 'in', user.classroom).get().then(querySnapshot => {
                querySnapshot.forEach(documentSnapshot => {
                    console.log(documentSnapshot.data())
                    setClasses(documentSnapshot.data())
                })
            })
        }
    }, [user])

    if(!user || !classes) {
        return null;
    }

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
            <Text>{user.username}</Text>
            <Text>{user.classroom[0]}</Text>
            <Text>{classes.items[0].name}</Text>
            <Text>{classes.items[1].name}</Text>
        </View>

</ScrollView>
</SafeAreaView>
    );
}

export default Dashboard;
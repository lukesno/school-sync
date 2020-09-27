import styles from './EnrollScreen.style';
import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image, KeyboardAvoidingView, SafeAreaView, ScrollView  } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import fire from '../fire'

function EnrollScreen({ navigation }) {
    const [classID, setClassID] = useState("");

    // .currentUser doesn't return classroom here?
    const user = fire.auth().currentUser;
    const usersRef = fire.firestore().collection('users')
    const classesRef = fire.firestore().collection('classes')

    const joinClassPressed = () => {
        classesRef.where('classID', '==', classID).get().then(snapshot => {
            // When classroom exists,
            if(!snapshot.empty) {
                usersRef.doc(user.uid).get().then(documentSnapshot => {
                    const existingClass = documentSnapshot.data().classroom
                    const isAlreadyIn = existingClass.filter(item => item === classID)
                    if(isAlreadyIn.length == 0) {
                        usersRef.doc(user.uid).update({
                            classroom: [...existingClass, classID]
                        }).then(() => {
                            navigation.navigate("Dashboard");
                        })
                    }

                })
            } else {
                alert("Class ID not found! Please try again.")
            }
        })
    }

    return (
        <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>  
        <View style={styles.mainContainer}>
            <View style={styles.logoContainer}>
                <Text style={styles.signInMessage}>Join your class to never miss any deadlines! Be on that grind :)</Text>
            </View>
            <KeyboardAvoidingView 
                style={styles.fieldContainer}
                behavior='padding'
            >
                <TextInput
                    style={styles.inputField}
                    placeholder={"Enter Class ID"}
                    defaultValue={classID}
                    value={classID}
                    onChangeText={value => setClassID(value)} 
                    autoCapitalize="none"
                    />

                <View style={styles.credentialButtons}>
                    <TouchableOpacity style={styles.login} onPress={() => joinClassPressed()}>
                        <Text style={styles.loginText}>Join Class</Text>
                    </TouchableOpacity>  
                </View>
            </KeyboardAvoidingView>
        </View>

        </ScrollView>
</SafeAreaView>
    );
}

export default EnrollScreen;
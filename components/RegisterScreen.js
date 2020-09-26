import styles from './RegisterScreen.style';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import fire from '../fire'


const RegisterScreen = ({ navigation }) => {

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const registerClicked = () => {
        if(password !== confirmPassword) {
            alert("Passwords aren't the same!");
        }

        fire
            .auth()
            .createUserWithEmailAndPassword(username, password)
            .then((response) => {
                const uid = response.user.uid;
                const data = {
                    id: uid,
                    username,
                    firstname,
                    lastname,
                    classroom: ["123"],
                };
                const usersRef = fire.firestore().collection('users')
                usersRef.doc(uid).set(data).then(() => {
                    // Goes to main for now, but make it go to Dashboard like this ('Dashboard', {user: data})
                    navigation.navigate('Main')
                    alert("Register complete.")
                }).catch((error) => {
                    alert(error)
                })
            })
    }
    return (
        <View style={styles.registerContainer}>
            <Text style={styles.inputLabel}>First Name</Text>
            <TextInput 
                style={styles.inputField}
                value={firstname}
                onChangeText={value => setFirstname(value)}
                autoCapitalize="none"
            />
            <Text style={styles.inputLabel}>Last Name</Text>
            <TextInput 
                style={styles.inputField}
                value={lastname}
                onChangeText={value => setLastname(value)}
                autoCapitalize="none"
            />
            <Text style={styles.inputLabel}>ID</Text>
            <TextInput 
                style={styles.inputField}
                value={username}
                onChangeText={value => setUsername(value)}
                autoCapitalize="none"
            />
            <Text style={styles.inputLabel}>Password</Text>
            <TextInput 
                style={styles.inputField}
                value={password}
                onChangeText={value => setPassword(value)}
                autoCapitalize="none"
                secureTextEntry={true}
            />
            <Text style={styles.inputLabel}>Password Again</Text>
            <TextInput 
                style={styles.inputField}
                value={confirmPassword}
                onChangeText={value => setConfirmPassword(value)}
                autoCapitalize="none"
                secureTextEntry={true}
            />
            <TouchableOpacity style={styles.register} onPress={() => registerClicked()}>
                <Text>Next</Text>
            </TouchableOpacity>
        </View>
    );
}

export default RegisterScreen;
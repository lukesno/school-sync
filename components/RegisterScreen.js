import styles from './RegisterScreen.style';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';



const RegisterScreen = () => {

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

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
            <TouchableOpacity style={styles.register} onPress={() => {
                console.log(firstname) 
                console.log(lastname)
                console.log(username) 
                console.log(password)
                console.log(confirmPassword)              
            }}>
                <Text>Next</Text>
            </TouchableOpacity>
        </View>
    );
}

export default RegisterScreen;
import styles from './LoginScreen.style';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';


const LoginScreen = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={styles.loginContainer}>
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
            <TouchableOpacity style={styles.login} onPress={() => {
                console.log(username) 
                console.log(password)
            }}>
                <Text>Login</Text>
            </TouchableOpacity>
        </View>
    );
}

export default LoginScreen;
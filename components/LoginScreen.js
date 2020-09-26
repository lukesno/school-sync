import styles from './LoginScreen.style';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';


const LoginScreen = () => {
    var username;
    var password;
    return (
        <View style={styles.loginContainer}>
            <Text style={styles.inputLabel}>ID</Text>
            <TextInput 
                style={styles.inputField}
                value={username}
            />
            <Text style={styles.inputLabel}>Password</Text>
            <TextInput 
                style={styles.inputField} 
                value={password}
            />
        </View>
    );
}

export default LoginScreen;
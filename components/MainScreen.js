import styles from './MainScreen.style';
import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


function MainScreen({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View style={styles.mainContainer}>
            <View style={styles.logoContainer}>
                <Image 
                    source={require('../res/calendar.png')} 
                    style={{height: 100, width: 100}}
                />
                <Text style={styles.welcomeMessage}>Welcome Back,</Text>
                <Text style={styles.signInMessage}>Sign in to continue</Text>
            </View>
            <KeyboardAvoidingView 
                style={styles.fieldContainer}
                behavior='padding'
            >
                <TextInput
                    style={styles.inputField}
                    placeholder={"Username"}
                    defaultValue={username}
                    onChangeText={username => setUsername(username)} />
                <TextInput
                    style={styles.inputField}
                    placeholder={"Password"}
                    defaultValue={password}
                    onChangeText={password => setPassword(password)} />
                <View style={styles.credentialButtons}>
                    <TouchableOpacity style={styles.login} onPress={() => navigation.navigate("Login")}>
                        <Text style={styles.loginText}>Login</Text>
                    </TouchableOpacity>  
                    <View style={styles.registerUserContainer}>
                        <Text style={styles.newUserText}>
                            New User? 
                        </Text>
                        {/* I literally don't know how to put spaces between two text fields dude */}
                        <View style={{width: '1.5%'}}></View>
                        <Text style={styles.signInText} onPress={() => navigation.navigate("Register")}>
                            Register Account
                        </Text>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </View>
    );
}

export default MainScreen;
import styles from './MainScreen.style';
import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import fire from '../fire'


function MainScreen({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const loginClicked = () => {
        fire
            .auth()
            .signInWithEmailAndPassword(username, password)
            .then((response) => {
                const uid = response.user.uid
                const usersRef = fire.firestore().collection('users')
                usersRef.doc(uid).get()
                    .then(userReturned => {
                        if(!userReturned.exists) {
                            alert("Please check your credentials and try again.")
                            return;
                        }
                        const user = userReturned.data()
                        navigation.navigate('Dashboard', {user: user})
                    })
            }).catch(error => {
                alert(error)
            })
    }
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
                    placeholder={"Email"}
                    defaultValue={username}
                    autoCapitalize="none"
                    onChangeText={username => setUsername(username)} />
                <TextInput
                    style={styles.inputField}
                    placeholder={"Password"}
                    defaultValue={password}
                    onChangeText={password => setPassword(password)} 
                    autoCapitalize="none"
                    secureTextEntry={true} />
                <View style={styles.credentialButtons}>
                    {/* <TouchableOpacity style={styles.login} onPress={() => navigation.navigate("Assignments")}> */}
                    
                    <TouchableOpacity style={styles.login} onPress={() => loginClicked()}>
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
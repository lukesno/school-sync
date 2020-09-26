import styles from './RegisterScreen.style';
import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


function RegisterScreen({ navigation }) {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    return (
        <View style={styles.mainContainer}>
            <View style={styles.logoContainer}>
                <Image 
                    source={require('../res/calendar.png')} 
                    style={{height: 100, width: 100}}
                />
                <Text style={styles.welcomeMessage}>Name of App</Text>
                <Text style={styles.signInMessage}>Sign up here! :)</Text>
            </View>
            <KeyboardAvoidingView 
                style={styles.fieldContainer}
                behavior='padding'
            >
                <TextInput
                    style={styles.inputField}
                    placeholder={"First Name"}
                    defaultValue={firstname}
                    onChangeText={firstname => setFirstname(firstname)} />
                <TextInput
                    style={styles.inputField}
                    placeholder={"Last Name"}
                    defaultValue={lastname}
                    onChangeText={lastname => setLastname(lastname)} />
                <TextInput
                    style={styles.inputField}
                    placeholder={"Username"}
                    defaultValue={username}
                    onChangeText={username => setUsername(username)} 
                    autoCapitalize="none"
                    />
                <TextInput
                    style={styles.inputField}
                    placeholder={"Password"}
                    defaultValue={password}
                    onChangeText={password => setPassword(password)} 
                    autoCapitalize="none"
                    secureTextEntry={true}
                    />
                <TextInput
                    style={styles.inputField}
                    placeholder={"Confirm Password"}
                    defaultValue={confirmPassword}
                    onChangeText={confirmedPassword => setConfirmPassword(confirmPassword)} 
                    autoCapitalize="none"
                    secureTextEntry={true}
                    />
                <View style={styles.credentialButtons}>
                    <TouchableOpacity style={styles.register} onPress={() => {
                        console.log(firstname) 
                        console.log(lastname)
                        console.log(username) 
                        console.log(password)
                        console.log(confirmPassword)   
                        navigation.navigate("RegisterOptions")}}>
                        <Text style={styles.loginText}>Register!</Text>
                    </TouchableOpacity> 
                    <View style={styles.registerUserContainer}>
                        <Text style={styles.newUserText}>
                            Need Assistance? 
                        </Text>
                        <View style={{width: '1.5%'}}></View>
                        <Text style={styles.signInText} onPress={() => console.log("We can add an email address here")}>
                            Contact Us
                        </Text>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </View>
    );
}

export default RegisterScreen;
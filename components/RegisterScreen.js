import styles from './RegisterScreen.style';
import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image, KeyboardAvoidingView, SafeAreaView, ScrollView  } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import fire from '../fire'

function RegisterScreen({ navigation }) {
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
                    classroom: [],
                    personal: [],
                };
                const usersRef = fire.firestore().collection('users')
                usersRef.doc(uid).set(data).then(() => {
                    // Goes to main for now, but make it go to Dashboard like this ('Dashboard', {user: data})
                    navigation.navigate("RegisterOptions")
                    alert("Register complete.")
                }).catch((error) => {
                    alert(error)
                })
            }).catch((error) => {
                alert(error)
            })
    }

    return (

        <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>   

        <View style={styles.mainContainer}>
                <View style={styles.logoContainer}>
                    <Image 
                        source={require('../res/calendar.png')} 
                        style={{height: 100, width: 100}}
                    />
                    <Text style={styles.signInMessage}>Sign up here!</Text>
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
                        placeholder={"Email"}
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
                        onChangeText={confirmedPassword => setConfirmPassword(confirmedPassword)} 
                        autoCapitalize="none"
                        secureTextEntry={true}
                        />
                    <View style={styles.credentialButtons}>
                        <TouchableOpacity style={styles.register} onPress={() => {
                            registerClicked()
                        }}>
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

        </ScrollView>
      </SafeAreaView>
    );
}

export default RegisterScreen;
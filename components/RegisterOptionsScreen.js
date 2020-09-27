import styles from './EnrollScreen.style';
import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


function RegisterOptionsScreen({ navigation }) {

    return (
        <View style={styles.mainContainer}>
            <View style={styles.logoContainer}>
                <Image 
                    source={require('../res/calendar.png')} 
                    style={{height: 100, width: 100}}
                />
                <Text style={styles.welcomeMessage}>Name of App</Text>
                <Text style={styles.signInMessage}>Please choose from the following options</Text>
            </View>
            <KeyboardAvoidingView 
                style={styles.fieldContainer}
                behavior='padding'
            >

                <View style={styles.credentialButtons}>
                    <TouchableOpacity style={styles.login} onPress={() => {
                        navigation.navigate("Enroll")}}>
                        <Text style={styles.loginText}>Join a Class</Text>
                    </TouchableOpacity>  
                    <TouchableOpacity style={styles.login} onPress={() => {
                        navigation.navigate("Create")}}>
                        <Text style={styles.loginText}>Create a Class</Text>
                    </TouchableOpacity>  
                </View>
            </KeyboardAvoidingView>
        </View>
    );
}

export default RegisterOptionsScreen;
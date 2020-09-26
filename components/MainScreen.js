import styles from './MainScreen.style';
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';



const MainScreen = ({ navigation }) => {
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.welcomeMessage}>Welcome to our app! We manage due dates for you.</Text>
            <View style={styles.credentialButtons}>
                <TouchableOpacity style={styles.login} onPress={() => navigation.navigate("Login")}>
                    <Text>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.signUp} onPress={() =>  navigation.navigate("Register")}>
                    <Text>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default MainScreen;
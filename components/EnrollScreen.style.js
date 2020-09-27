import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    mainContainer: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,

    },
    logoContainer: {
        marginTop: 50,
        marginLeft: 25,
        alignItems: 'flex-start',
        // backgroundColor: 'blue',
    },
    welcomeMessage: {
        marginTop: 0,
        marginBottom: 10,
        fontSize: 40,
        marginLeft: 16,
        fontFamily: 'Verdana'
    },
    signInMessage: {
        marginTop: 0,
        marginBottom: 100,
        fontSize: 20,
        marginLeft: 17,
        fontFamily: 'Verdana',
        color: '#737272',
    },

    credentialButtons: {
        alignItems: "center",
    },
    login: {
        // Add styling
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: "#333287",
        borderRadius: 5,
        marginBottom: 10,
        marginTop: 40,
        height: 50,
        width: '100%',
    },
    loginText: {
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputField: {
        height: 40,
        width: '100%',
        borderBottomColor: 'gray',
        padding: 5,
        borderBottomWidth: 1,
        marginBottom: 15,
    },
    fieldContainer: {
        flex: 1,
        width: '80%',
        alignSelf: 'center',
        justifyContent: 'flex-end',
        bottom: 70,
        //backgroundColor: 'red',
    },
    registerUserContainer: {
        flexDirection: 'row',
        width: '70%',
        justifyContent: 'center',
    },
    newUserText: {
        color: '#737272',
    },
    signInText: {
        color: '#0080ff',
    }, 


});

export default styles;

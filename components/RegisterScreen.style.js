import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    registerContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: "center",
    },
    inputLabel: {
        marginBottom: 10,
    },
    inputField: {
        height: 40,
        width: 200,
        borderColor: 'gray',
        backgroundColor: 'white',
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 20,
    },
    register: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: "#d2b48c",
        borderRadius: 10,
        marginBottom: 50,
    },
});

export default styles;

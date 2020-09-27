import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    headerContainer: {
        marginTop: 60,
    },
    screenTitleText: {
        textAlign: 'center',
        fontFamily: 'Verdana',
        fontSize: 18,
        fontWeight: '500',
        color: '#454545'
    },
    screenDivider: {
        height: 30,
        marginTop: 10,
        backgroundColor: '#e3ebff',
        width: '100%',
    },
    screenDividerText: {
        padding: 6,
        paddingLeft: 20,
        color: '#7a7a7a',
        fontWeight: '400'
    },
    assignmentContainer: {
        // backgroundColor: 'green',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 25,
        alignItems: 'flex-start',
    },
    assignmentListContainer: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        display: 'flex',
        flexDirection: 'column',
        marginTop: 5,
        // backgroundColor: 'blue'
    },
    assignmentTitleText: {
        fontSize: 15,
    },
    assignmentDateText: {
        fontSize: 12,
        color: "#737272"
    },
    signOutButton: {
        // Add styling
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 0,
        paddingVertical: 10,
        backgroundColor: "#333287",
        borderRadius: 5,
        marginBottom: 10,
        marginTop: 250,
        height: 50,
        width: '80%',
    },
    signOutText: {
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default styles;
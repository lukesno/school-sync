import styles from './Dashboard.style';
import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, SafeAreaView, ScrollView, SectionList  } from 'react-native';
import fire from '../fire';
import AddAssignmentButton from './AddAssignmentButton';
import { Container, Button, Icon, Fab } from 'native-base';
import { useIsFocused } from '@react-navigation/native'

//for testing with json format data
// const DATA = [
//     {
//         title: "Math Problem Set 3",
//         date: "Sept. 30, 2020",
//         course: "123",
//         description: "Math problem set is going to be very hard this week. Make sure to attend office hours if you need help!"
//     },
//     {
//         title: "Chemistry Write Up Due",
//         date: "Sept. 28, 2020",
//         course: "351",
//         description: "Better have your ten page writeup finished lmao",
//     }

// ]

const Assignment = ({ date, title, course }) => {
    return(
        <View>
            <View style={styles.assignmentContainer}> 
                <View style={{width: '75%'}}>
                    <Text style={styles.assignmentTitleText}>{title}</Text>
                </View>
                <View style={{marginTop: 3}}>
                    <Text style={styles.assignmentDateText}>{date}</Text>
                </View>
            </View>
            <View style={styles.assignmentSeparator}/>
        </View>
    )
}

const Dashboard = ({ navigation }) => {
    // Take in some props; in order to access data accordingly in Firebase
    const [user, setUser] = useState(null);
    const [classes, setClasses] = useState([]);
    const [activeState, setActive] = useState(false);

    const currentUser = fire.auth().currentUser;
    const usersRef = fire.firestore().collection('users')
    const classesRef = fire.firestore().collection('classes')

    // Make sure that when logging out and logging into another account, new currentUser is fetched
    const isFocused = useIsFocused()

    useEffect(() => {
        if(isFocused) {
            usersRef.doc(currentUser.uid).get().then(userReturned => {
                const updatedUser = userReturned.data()
                setUser(updatedUser);
            })
        }
    }, [isFocused])

    useEffect(() => {
        if(user) {
            // console.log(user.classroom);
            classesRef.where('classID', 'in', user.classroom).get().then(querySnapshot => {
                querySnapshot.forEach(documentSnapshot => {
                    const isAlreadyIn = classes.filter(item => item['name'] === documentSnapshot.data().items.name)
                    console.log(isAlreadyIn.length)
                    if(isAlreadyIn.length == 0) {
                        setClasses(prev => [...prev, documentSnapshot.data()])
                    }
                })
            })
        }
    }, [user])

    if(!user || !classes) {
        return null;
    }

    return (
        <SafeAreaView>
            <ScrollView>
                <Container>
                    <View style={styles.headerContainer}>
                        <Text style={styles.screenTitleText}>
                            Assignments
                        </Text>
                        <View style={styles.screenDividerHeader}>
                            <Text style={styles.screenDividerText}>
                                Math
                            </Text>
                        </View>
                    </View>
                    <View
                        style={styles.assignmentListContainer}
                    >
                        {/* Add map here of classes */}
                        {classes.map(eachClass => {
                            return eachClass.items.map(eachItem => {
                                return (
                                    <Assignment     
                                    title={eachItem.name}
                                    date={eachItem.date}
                                    />    
                                );
                            })
                        })}
                        {user.personal.map(item => {
                            return (
                                <Assignment     
                                    title={item.name}
                                    date={item.date}
                                />    
                            );
                        })}
                    </View>
                </Container>
            </ScrollView>
                    <Fab
                        active={activeState}
                        direction="up"
                        containerStyle={{}}
                        style={{backgroundColor: '#333287'}}
                        position="bottomRight"
                        onPress={() => setActive(!activeState)}
                    >
                        <Icon name="add" />
                        <Button 
                            style={{ backgroundColor: '#3B5998' }}
                            onPress={() => {
                                fire.auth().signOut().then(() => alert('User signed out!'));
                                navigation.navigate('Main')
                        }}>
                            <Icon 
                                type ="MaterialCommunityIcons"
                                name="logout"
                            />
                        </Button>
                        
                        <Button 
                            style={{ backgroundColor: '#34A34F' }}
                            onPress={() => {
                                navigation.navigate('Create')
                        }}>
                            <Icon 
                                name="google-classroom"
                                type ="MaterialCommunityIcons"
                            />
                        </Button>
                        <Button 
                            style={{ backgroundColor: '#DD5144' }}
                            onPress={() => {
                                navigation.navigate('Enroll')
                        }}>
                            <Icon 
                                type="AntDesign"
                                name="deleteusergroup" 
                            />
                        </Button>
                    </Fab>
                    <AddAssignmentButton onPress={() => {
                         navigation.navigate("AddAssignment")
                    }}/>
        </SafeAreaView>
        
         
    );
}

export default Dashboard;
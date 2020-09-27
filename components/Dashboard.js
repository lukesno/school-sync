import styles from './Dashboard.style';
import React from 'react';
import { Text, View, TouchableOpacity, SectionList } from 'react-native';
import fire from '../fire';
import AddAssignmentButton from './AddAssignmentButton';
import { Container } from 'native-base';

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

const Assignment = ({ date, title, course}) => {
    return(
        <View style={styles.assignmentContainer}> 
            <View style={{width: '75%'}}>
                <Text style={styles.assignmentTitleText}>{title}</Text>
            </View>
            <View style={{marginTop: 3}}>
                <Text style={styles.assignmentDateText}>{date}</Text>
            </View>
        </View>
    )
}

const Dashboard = ({user, navigation}) => {
    // Take in some props; in order to access data accordingly in Firebase
    console.log(user)
    return (
        <Container>
            {/* <SectionList
                sections={DATA}
                keyExtractor={( item, index ) => item + index}
                renderItem={({ item }) => <Assignment title={item} />}
            >

            </SectionList> */}
            <View style={styles.headerContainer}>
                <Text style={styles.screenTitleText}>
                    Assignments
                </Text>
                <View style={styles.screenDivider}>
                    <Text style={styles.screenDividerText}>
                        Upcoming
                    </Text>
                </View>
            </View>
            <View
                style={styles.assignmentListContainer}
            >
                <Assignment     
                    title={"Math Problem Set 3" }
                    date={"Sept. 30, 2020"}
                />    
                <Assignment
                    title={"Chemistry Write Up"}
                    date={"Oct. 4, 2020"}
                />
                <Assignment
                    title={"English Essay Due"}
                    date={"Oct. 4, 2020"}
                />
                <Assignment
                    title={"Engineering Phsyics Assignment"}
                    date={"Oct. 4, 2020"}
                />
                <Assignment
                    title={"Unit Mindmap Due"}
                    date={"Oct. 4, 2020"}
                />
                <Assignment
                    title={"SOMA Survey Deadline"}
                    date={"Oct. 4, 2020"}
                />
                <Assignment
                    title={"Another Assignment"}
                    date={"Oct. 4, 2020"}
                />
                <Assignment
                    title={"Linear Algebra Quiz"}
                    date={"Oct. 4, 2020"}
                />
            </View>
            <View style={{  flex: 1 }}>
                <AddAssignmentButton onPress={() => navigation.navigate("Enroll")}/>
            </View>
            <TouchableOpacity style={styles.signOutButton} onPress={() => {
                fire.auth().signOut().then(() => alert('User signed out!'));
                navigation.navigate('Main')
            }}>
                <Text style={styles.signOutText}>Sign Out</Text>
            </TouchableOpacity>
        </Container>
    );
}

export default Dashboard;
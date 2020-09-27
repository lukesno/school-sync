import styles from './AddAssignmentScreen.style';
import React, { useState } from 'react';
import { Picker, Text, View, TouchableOpacity, Image, KeyboardAvoidingView, SafeAreaView, ScrollView  } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


function AddAssignmentsScreen({ navigation }) {
    const [title, setTitle] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [amorpm, setAmOrPm] = useState("");
    const [hour, setHour] = useState("");
    const [minute, setMinute] = useState("");
     
    return (

        <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>            
            <View style={styles.mainContainer}>
                <View style={styles.logoContainer}>
                    <Text style={styles.signInMessage}>Add your assignment due date and never miss a deadline!</Text>
                </View>
                <KeyboardAvoidingView 
                    style={styles.fieldContainer}
                    behavior='padding'
                >
                    <TextInput
                        style={styles.inputField}
                        placeholder={"Title"}
                        defaultValue={title}
                        onChangeText={title => setTitle(title)} 
                        autoCapitalize="none"
                        />

                        <TextInput
                        style={styles.inputField}
                        placeholder={"Due Date in format 'MM/DD/YYYY'"}
                        defaultValue={dueDate}
                        onChangeText={dueDate => setDueDate(dueDate)} 
                        autoCapitalize="none"
                        />

                        <View style={styles.timeContainer}>
                            <Picker style={styles.timePicketAlignment}
                            selectedValue={hour}
                            onValueChange={hour => setHour(hour)}>
                            <Picker.Item label="1" value="1" />
                            <Picker.Item label="2" value="2" />
                            </Picker>


                            <Picker style={styles.timePicketAlignment}
                            selectedValue={minute}
                            onValueChange={minute => setMinute(minute)}>
                            <Picker.Item label="01" value="01" />
                            <Picker.Item label="02" value="02" />
                            <Picker.Item label="03" value="03" />
                            <Picker.Item label="04" value="04" />
                            <Picker.Item label="05" value="05" />
                            <Picker.Item label="06" value="06" />
                            <Picker.Item label="07" value="07" />
                            <Picker.Item label="08" value="08" />
                            <Picker.Item label="09" value="09" />
                            <Picker.Item label="10" value="10" />
                            <Picker.Item label="11" value="11" />
                            <Picker.Item label="12" value="12" />
                            <Picker.Item label="13" value="13" />
                            <Picker.Item label="14" value="14" />
                            <Picker.Item label="15" value="15" />
                            <Picker.Item label="16" value="16" />
                            <Picker.Item label="17" value="17" />
                            <Picker.Item label="18" value="18" />
                            <Picker.Item label="19" value="19" />
                            <Picker.Item label="20" value="20" />
                            </Picker>

                            <Picker style={styles.timePicketAlignment}
                            selectedValue={amorpm}
                            onValueChange={amorpm => setAmOrPm(amorpm)}>
                            <Picker.Item label="AM" value="AM" />
                            <Picker.Item label="PM" value="PM" />
                            </Picker>

                        </View>

                        <Text>
                        Due time is {hour}:{minute} {amorpm}
                        </Text>

                    <View style={styles.credentialButtons}>
                        <TouchableOpacity style={styles.login} onPress={() => {
                            console.log("The title is " + title)
                            console.log("The due date is " + dueDate)
                            console.log("The due time is " + hour + ":" + minute + " " + amorpm)
                            navigation.navigate("RegisterOptions")}}>

                            <Text style={styles.loginText}>Add Assignment to Schedule</Text>
                        </TouchableOpacity>  
                        <View style={styles.registerUserContainer}>
                            <Text style={styles.newUserText}>
                                Done Adding Assignments?
                            </Text>
                            <View style={{width: '1.5%'}}></View>
                            <Text style={styles.signInText} onPress={() => navigation.navigate("Dashboard")}>
                                Go to Dashboard
                            </Text>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </View>



        </ScrollView>
      </SafeAreaView>




    );
}

export default AddAssignmentsScreen;
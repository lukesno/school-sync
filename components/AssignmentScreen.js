import styles from './AssignmentScreenStyles';
import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import AddAssignmentButton from './AddAssignmentButton';

function AssignmentScreen({navigation}) {
    return(
        <View>
            <View 
                style={{marginTop:100,}}
            >
                <AddAssignmentButton/>

            </View>
        </View>
    );
}

export default AssignmentScreen;
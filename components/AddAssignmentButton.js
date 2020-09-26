import styles from './AssignmentScreenStyles';
import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Fab, Icon } from 'native-base';

function AddAssignmentButton({ onPress }) {
    return(
        <Fab
            direction="up"
            containerStyle={{}}
            style={{backgroundColor: '#333287'}}
            position="bottomRight"
            onPress={onPress}
        >
            <Icon name="add" />
        </Fab>
    );
}

export default AddAssignmentButton;
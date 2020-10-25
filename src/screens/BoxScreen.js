import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.parentStyle}>
        <View style={styles.viewOneStyle} /> 
        <View style={styles.viewTwoStyle} /> 
        <View style={styles.viewThreeStyle} /> 
    </View>
  )
}

const styles = StyleSheet.create({
    parentStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 200,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }, 
    viewOneStyle: {
        height: 50,
        width: 50,   
        backgroundColor: 'light red',
    }, 
    viewTwoStyle: {
        height: 50,
        width: 50,  
        backgroundColor: 'light purple',
        position: 'absolute',
        alignSelf: 'flex-end'
        
    }, 
    viewThirdStyle: {
        height: 50,
        width: 50,  
        backgroundColor: 'light green'
    }
});

export default BoxScreen

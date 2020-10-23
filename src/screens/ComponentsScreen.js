import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const myName = "Van Dinh"
    return (
        <View>
            <Text style={styles.greeting}>Getting Started with React Native</Text>
            <Text style={styles.textStyle}>My name is {myName}</Text>
        </View>
        
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20
    },
    greeting: {
        fontSize: 45
    }
})

export default ComponentsScreen;
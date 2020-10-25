import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    return (
        <View>
            <Text>Enter Name: </Text>
            <TextInput 
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false} //default of True
                value={name}
                onChangeText={(newValue)=>setName(newValue)}  
            />
            <Text>My name is {name}</Text>
            {true ? <Text>That was true</Text> : null}

            <Text>Enter Password: </Text>
            <TextInput 
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false} //default of True
                value={password}
                onChangeText={(value)=>setPassword(value)}  
            />
            {
                password.length<4 
                    ? <Text>Password must be at least 5 characters</Text>
                : null
        }
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
})

export default TextScreen

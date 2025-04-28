import React from 'react';
import { Text, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native';

const LoginWithMailScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login with Email</Text>

            <TextInput placeholder="Email" style={styles.input} />
            <TextInput placeholder="Password" secureTextEntry style={styles.input} />
            <Text style={styles.forgot}>Forgot Password?</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        padding: 12,
        marginVertical: 10,
    },
    button: {
        backgroundColor: '#1877F2',
        borderRadius: 10,
        padding: 15,
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    forgot:{
        color: 'blue',
        textAlign: 'center',
    },
});

export default LoginWithMailScreen;

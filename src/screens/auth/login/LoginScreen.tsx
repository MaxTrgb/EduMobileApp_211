import { Text, TouchableOpacity, StyleSheet, View, Linking } from 'react-native';
import auth from '../../../utils/auth.ts';
import { useDispatch } from 'react-redux';
import { setToken } from '../../../store/slices/authSlice.ts';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const handleLogin = async (provider: string) => {
        await auth.setToken('accessToken');
        dispatch(setToken('test'));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Enter to get closer to Bosedu and explore more</Text>

            {/* Facebook Button */}
            <TouchableOpacity style={[styles.button, styles.facebook]} onPress={() => handleLogin('facebook')}>
                <Text style={styles.buttonText}>Facebook</Text>
            </TouchableOpacity>

            {/* Google Button */}
            <TouchableOpacity style={[styles.button, styles.google]} onPress={() => handleLogin('google')}>
                <Text style={styles.buttonText}>Google</Text>
            </TouchableOpacity>

            {/* Email Button */}
            <TouchableOpacity style={[styles.button, styles.email]} onPress={() => handleLogin('email')}>
                <Text style={styles.buttonText}>Email</Text>
            </TouchableOpacity>

            {/* Apple Button */}
            <TouchableOpacity style={[styles.button, styles.apple]} onPress={() => handleLogin('apple')}>
                <Text style={styles.buttonText}>Apple</Text>
            </TouchableOpacity>

            {/* Register Link */}
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.registerText}>
                    Register using Email <Text style={styles.link}>Here!</Text>
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('LoginWithMailScreen')}>
                <Text style={styles.registerText}>
                    Login using Email <Text style={styles.link}>Here!</Text>
                </Text>
            </TouchableOpacity>

            {/* Footer */}
            <Text style={styles.footer}>
                By registering, you agree to the{' '}
                <Text style={styles.link} onPress={() => Linking.openURL('https://terms-of-service-url.com')}>Terms of Service</Text>,{' '}
                <Text style={styles.link} onPress={() => Linking.openURL('https://privacy-policy-url.com')}>Privacy Policy</Text> and{' '}
                <Text style={styles.link} onPress={() => Linking.openURL('https://cookie-policy-url.com')}>Cookie Policy</Text>.
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 80,
        alignItems: 'center',
        backgroundColor: 'white',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 40,
        textAlign: 'center',
        color: '#000',
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 30,
        paddingVertical: 12,
        paddingHorizontal: 20,
        width: '100%',
        marginVertical: 8,
        justifyContent: 'center', // Center the text now
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
    facebook: {
        backgroundColor: '#1877F2',
    },
    google: {
        backgroundColor: '#EA4335',
    },
    email: {
        backgroundColor: '#4285F4',
    },
    apple: {
        backgroundColor: '#000000',
    },
    registerText: {
        marginTop: 20,
        fontSize: 14,
        color: '#000',
    },
    link: {
        color: '#007bff',
        textDecorationLine: 'underline',
    },
    footer: {
        marginTop: 40,
        fontSize: 12,
        textAlign: 'center',
        color: '#888',
        paddingHorizontal: 20,
    },
});

export default LoginScreen;

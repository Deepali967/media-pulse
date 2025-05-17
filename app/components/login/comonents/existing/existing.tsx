import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import localStorageService from '../../../../service/localstorage.service';
import { globalStyles } from '@/assets/typography/typography';
import { SafeAreaView } from 'react-native-safe-area-context';

const ExistingAccount = () => {
    const [currentScreen, setCurrentScreen] = useState('login');
    const [emailOrPhone, setEmailOrPhone] = useState('');
    const [otp, setOtp] = useState(['', '', '', '']);
    const [timer, setTimer] = useState(60);
    const navigation = useNavigation();

    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [usernameError, setUsernameError] = React.useState('');
    const [passwordError, setPasswordError] = React.useState('');

    const localstorageService = localStorageService();

    const handleLogin = () => {
        let valid = true;

        // Reset errors
        setUsernameError('');
        setPasswordError('');

        // Validate username
        if (!username.trim()) {
            setUsernameError('Username is required');
            valid = false;
        }

        // Validate password
        if (!password.trim()) {
            setPasswordError('Password is required');
            valid = false;
        }

        if (valid) {
            // Perform login logic here
            // Example: Call an API or navigate to another screen
            console.log('Logging in with:', { username, password });
            localstorageService.setStoreItem('isAuthenticated', true);
            navigation.navigate('Creator' as never);
        }
    };

    // OTP Timer
    useEffect(() => {
        let interval: any;
        if (currentScreen === 'otp' && timer > 0) {
            interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
        }
        return () => clearInterval(interval);
    }, [currentScreen, timer]);

    const handleOtpChange = (index: any, value: any) => {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
    };

    const handleNavigation = () => {
        if (currentScreen === 'forgot' || currentScreen === 'otp') {
            setCurrentScreen('login');
            return;
        }

        navigation.navigate('Login' as never);
    };

    const handleUserLogin = () => {};

    return (
      <SafeAreaView style={{ flex: 1 }}>  
        <View style={styles.container}>
            {/* Back Button */}
            <TouchableOpacity onPress={() => handleNavigation()} style={styles.backButton}>
                <Text style={styles.backText}>←</Text>
            </TouchableOpacity>

            {/* Login Screen */}
            {currentScreen === 'login' && (
                <>
                    <TextInput
                        style={styles.input}
                        placeholder="username"
                        placeholderTextColor="#A9A9A9"
                        value={username}
                        onChangeText={(text) => setUsername(text)}
                    />
                    {usernameError ? <Text style={styles.errorText}>{usernameError}</Text> : null}

                    <TextInput
                        style={styles.input}
                        placeholder="password"
                        placeholderTextColor="#A9A9A9"
                        secureTextEntry
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                    />
                    {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}

                    <TouchableOpacity onPress={() => setCurrentScreen('forgot')}>
                        <Text style={styles.forgotText}>forgot password</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={handleLogin} style={styles.button}>
                        <Text style={styles.buttonText}>get in</Text>
                    </TouchableOpacity>
                </>
            )}

            {/* Forgot Password Screen */}
            {currentScreen === 'forgot' && (
                <>
                    <Text style={styles.infoText}>we will send a reset password code to your registered email or phone</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="email or phone no."
                        placeholderTextColor="#A9A9A9"
                        value={emailOrPhone}
                        onChangeText={setEmailOrPhone}
                    />
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Creator' as never)}>
                        <Text style={styles.buttonText}>next</Text>
                    </TouchableOpacity>
                </>
            )}

            {/* OTP Verification Screen */}
            {currentScreen === 'otp' && (
                <>
                    <Text style={styles.infoText}>enter reset password code, received on email or on phone no.</Text>
                    <View style={styles.otpContainer}>
                        {otp.map((digit, index) => (
                            <TextInput
                                key={index}
                                style={styles.otpInput}
                                maxLength={1}
                                keyboardType="numeric"
                                value={digit}
                                onChangeText={(value) => handleOtpChange(index, value)}
                            />
                        ))}
                    </View>

                    {/* Resend Timer */}
                    <View style={styles.resendContainer}>
                        <TouchableOpacity onPress={() => setTimer(60)} disabled={timer > 0}>
                            <Text style={[styles.resendText, timer > 0 && { opacity: 0.5 }]}>resend</Text>
                        </TouchableOpacity>
                        <Text style={styles.timerText}>{timer > 0 ? `0:${timer}` : ''}</Text>
                    </View>

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText} onPress={() => navigation.navigate('Creator' as never)}>
                            verify
                        </Text>
                    </TouchableOpacity>
                </>
            )}
        </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F5F7',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        overflowY: 'auto',
    },
    backButton: {
        position: 'absolute',
        top: 50,
        left: 20,
    },
    backText: {
        fontSize: 24,
        color: '#1B1B1B',
    },
    input: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderColor: '#D1D5DB',
        borderRadius: 8,
        paddingHorizontal: 15,
        backgroundColor: '#FFFFFF',
        marginBottom: 15,
        ...globalStyles.paragraph
    },
    button: {
        width: '100%',
        height: 50,
        backgroundColor: '#0F172A',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    buttonText: {
        color: '#FFFFFF',
        ...globalStyles.btnText,
    },
    forgotText: {
        color: '#1B1B1B',
        alignSelf: 'flex-end',
        ...globalStyles.btnText,
    },
    infoText: {
        textAlign: 'center',
        fontSize: 14,
        color: '#1B1B1B',
        marginBottom: 20,
    },
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    otpInput: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderColor: '#D1D5DB',
        borderRadius: 8,
        textAlign: 'center',
        fontSize: 18,
        backgroundColor: '#FFFFFF',
        marginHorizontal: 5,
    },
    resendContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 15,
        paddingHorizontal: 20,
    },
    resendText: {
        fontSize: 14,
        color: '#1B1B1B',
    },
    timerText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#1B1B1B',
    },
    errorText: {
        color: 'red',
        fontSize: 12,
        marginTop: 5,
        marginBottom: 10,
    },
});

export default ExistingAccount;

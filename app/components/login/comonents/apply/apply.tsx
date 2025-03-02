import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Apply = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [otp, setOtp] = useState(['', '', '', '']);
    const [timer, setTimer] = useState(90);
    const navigation = useNavigation();

    // OTP Timer Effect
    useEffect(() => {
        let interval:any;
        if (currentStep === 2 && timer > 0) {
            interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
        }
        return () => clearInterval(interval);
    }, [currentStep, timer]);


    const handleNavigation = () => {
        if(currentStep !== 1) {
            setCurrentStep(1);
            return
        }

        navigation.navigate('Login' as never);
    }

    const handleOtpChange = (index:any, value:any) => {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
    };

    return (
        <View style={styles.container}>
            {/* Back Button (Hide in the last screen) */}
                <TouchableOpacity onPress={() =>handleNavigation()} style={styles.backButton}>
                    <Text style={styles.backText}>←</Text>
                </TouchableOpacity>

            {/* Step 1: Name, Email, Phone Input */}
            {currentStep === 1 && (
                <>
                    <TextInput
                        style={styles.input}
                        placeholder="name"
                        placeholderTextColor="#A9A9A9"
                        value={name}
                        onChangeText={setName}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="email"
                        placeholderTextColor="#A9A9A9"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="phone no."
                        placeholderTextColor="#A9A9A9"
                        value={phone}
                        onChangeText={setPhone}
                        keyboardType="phone-pad"
                    />
                    <TouchableOpacity style={styles.button} onPress={() => setCurrentStep(2)}>
                        <Text style={styles.buttonText}>next</Text>
                    </TouchableOpacity>
                </>
            )}

            {/* Step 2: OTP Verification */}
            {currentStep === 2 && (
                <>
                    <Text style={styles.infoText}>enter otp you received on email or on phone no.</Text>
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

                    {/* Resend OTP Timer */}
                    <View style={styles.resendContainer}>
                        <TouchableOpacity onPress={() => setTimer(90)} disabled={timer > 0}>
                            <Text style={[styles.resendText, timer > 0 && { opacity: 0.5 }]}>resend</Text>
                        </TouchableOpacity>
                        <Text style={styles.timerText}>{timer > 0 ? `1:${timer % 60}` : ''}</Text>
                    </View>

                    <TouchableOpacity style={styles.button} onPress={() => setCurrentStep(3)}>
                        <Text style={styles.buttonText}>verify</Text>
                    </TouchableOpacity>
                </>
            )}

            {/* Step 3: Confirmation Message */}
            {currentStep === 3 && (
                <>
                    <Text style={styles.infoText}>thank you!</Text>
                    <Text style={styles.subText}>
                        we have received your application. we will notify you once it gets verified.
                    </Text>
                    <TouchableOpacity style={styles.button} onPress={() => setCurrentStep(4)}>
                        <Text style={styles.buttonText}>close</Text>
                    </TouchableOpacity>
                </>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F5F7',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
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
    },
    button: {
        width: '100%',
        height: 50,
        backgroundColor: '#0F172A',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    infoText: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1B1B1B',
        marginBottom: 10,
    },
    subText: {
        textAlign: 'center',
        fontSize: 14,
        color: '#1B1B1B',
        marginBottom: 20,
    },
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20,
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
});

export default Apply;

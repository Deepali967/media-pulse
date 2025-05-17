import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ProgressScreen from './progress';
import { SafeAreaView } from 'react-native-safe-area-context';

const Status = () => {
    const [showProgress, setShowProgress] = useState(false);

    const ApplicationStatusScreen =  () => {
        const [emailOrPhone, setEmailOrPhone] = useState('');
        const navigation = useNavigation();

        return (
            <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Text style={styles.backText}>←</Text>
                </TouchableOpacity>
    
                <Text style={styles.instruction}>
                    to check your application status{'\n'}
                    please enter your registered{'\n'}
                    email or phone no.
                </Text>
    
                <TextInput
                    style={styles.input}
                    placeholder="email or phone no."
                    placeholderTextColor="#A9A9A9"
                    value={emailOrPhone}
                    onChangeText={setEmailOrPhone}
                />
    
                <TouchableOpacity 
                    style={styles.button} 
                    onPress={() => setShowProgress(true)}
                >
                    <Text style={styles.buttonText}>check</Text>
                </TouchableOpacity>
            </View>
            </SafeAreaView>
        );
    };

    return <>
    {/* <ProgressScreen /> */}
    {showProgress ? <ProgressScreen /> : <ApplicationStatusScreen />}
    </>;
}

export default Status;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEF2F3',
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
    instruction: {
        textAlign: 'center',
        fontSize: 16,
        color: '#1B1B1B',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderColor: '#D1D5DB',
        borderRadius: 8,
        paddingHorizontal: 15,
        backgroundColor: '#F8F9FA',
        marginBottom: 15,
    },
    button: {
        width: '100%',
        height: 50,
        backgroundColor: '#0F172A',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    homeButton: {
        width: '100%',
        height: 50,
        backgroundColor: '#D1D5DB',
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
    progressText: {
        fontSize: 28,
        color: '#1B1B1B',
        textAlign: 'left',
        fontWeight: 'bold',
    },
});

import { View, StyleSheet, Text, ImageBackground } from "react-native"
import Button from '../../shared/components/button/button'
import {COLORS} from '../../../assets/typography/colors'
import {globalStyles} from '../../../assets/typography/typography'
import { useNavigation } from "@react-navigation/native"
import { SafeAreaView } from "react-native-safe-area-context"

const Splash = () => {
    const navigation = useNavigation()

    const handleNavigation = () => {
        navigation.navigate('Login' as never)
    }

    return (
       <SafeAreaView style={{flex: 1}}> 
        <ImageBackground
            style={styles.container}
            source={require('../../../assets/images/splash/splash.jpg')}
            resizeMode="cover"
        >
            <View style={styles.overlay}>
                <Button text={'Enter'}  callbackFn={handleNavigation} customStyle={styles.button} textStyle={styles.buttontext}/>
            </View>
        </ImageBackground>
        </SafeAreaView>    
    )
}

export default Splash

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    overlay: {
        flex: 1, // Allows the overlay to take up the full available space
        alignItems: 'center', // Centers content horizontally
        justifyContent: 'flex-end', // Positions content at the bottom
        position: 'absolute',
        width: '100%',
        height: '100%', // Ensures the overlay covers the entire screen
        left: 0,
        right: 0,
        paddingBottom: 20, // Adds spacing from the bottom
    },
    buttontext: {
        color : COLORS.white,
        ...globalStyles.paragraph
    },
    button: {
        backgroundColor: COLORS.primary,
        paddingVertical: 20,
        borderRadius: 15,
        margin: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '85%',
        alignSelf: 'center', // Ensures the button is centered horizontally
        ...globalStyles.notificationText
    }
})
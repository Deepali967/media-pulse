import { View, StyleSheet, Text, ImageBackground } from "react-native"
import Button from '../../shared/components/button/button'
import {COLORS} from '../../../assets/typography/colors'
import {globalStyles} from '../../../assets/typography/typography'
import { useNavigation } from "@react-navigation/native"

const Splash = () => {
    const navigation = useNavigation()

    const handleNavigation = () => {
        navigation.navigate('Login' as never)
    }

    return (
        <ImageBackground
            style={styles.container}
            source={require('../../../assets/images/splash/splash.jpg')}
            resizeMode="cover"
        >
            <View style={styles.overlay}>
                <Button text={'Enter'}  callbackFn={handleNavigation} customStyle={styles.button} textStyle={styles.buttontext}/>
            </View>
        </ImageBackground>
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
        width: '100%',
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', 
    },
    buttontext: {
        color : COLORS.white,
        ...globalStyles.paragraph
    },
    button : {
        backgroundColor: COLORS.primary,
        borderRadius: 10,
        padding: 10,
        margin: 10,
        width: '80%',
    }
})
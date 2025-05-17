import { View, StyleSheet, Text,Pressable } from "react-native";
import { COLORS } from "@/assets/typography/colors";
import {loginTypes} from '../../../assets/constants/constants'
import { globalStyles } from "@/assets/typography/typography";
import { useNavigation } from "@react-navigation/native"
import { SafeAreaView } from "react-native-safe-area-context";

const Login = () => {
    const navigation = useNavigation()

    const navigateTo = (type:any) => {
        navigation.navigate(type as never)
    }

    const renderLoginOptions = () => {
       return loginTypes.map((loginType:any) => (
            <Pressable style={styles.option} key={loginType.id} onPress={() => navigateTo(loginType.route)}>
                <Text style={styles.optionText}>{loginType.text}</Text>
            </Pressable>
        ))
    }

    return (
        <SafeAreaView style={{flex: 1}}> 
        <View style={styles.loginContainer}>
            <Text style={StyleSheet.compose(globalStyles.heading, styles.heading)} >tist</Text>
            <View style={styles.loginOptions}>
                {renderLoginOptions()}
            </View>
        </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    loginContainer: {
        height:'100%',
        width:'100%',
        backgroundColor: COLORS.primary
    },
    heading: {
        letterSpacing: 4,
        color: COLORS.white,
        textAlign: 'center',
        marginTop: 50
    },
    loginOptions : {
        position: 'absolute',
        bottom: 20,
        left:0,
        right:0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    option :{
        width: '70%',
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: COLORS.secondary,
    },
    optionText : {
        textAlign: 'center',
        color: COLORS.white,
        ...globalStyles.btnText
    }
})

export default Login;
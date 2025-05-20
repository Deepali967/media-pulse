import { View, StyleSheet, Text,Pressable, Image } from "react-native";
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
       return loginTypes.map((loginType:any, index: any) => (
            <Pressable style={ index !== 2 ?  styles.option : [styles.option, {backgroundColor : "transparent"}]} key={loginType.id} onPress={() => navigateTo(loginType.route)}>
                <Text style={styles.optionText}>{loginType.text}</Text>
            </Pressable>
        ))
    }

    return (
        <SafeAreaView style={{flex: 1}}> 
        <View style={styles.loginContainer}>
            <Image style={styles.heading} source={require("../../../assets/images/logo.png")} />
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
        backgroundColor: "#091C38"
    },
    heading: {
        margin: 30,
        height: 84,
        width: 90,
        textAlign: 'center',
        alignSelf: 'center',
    },
    loginOptions : {
        position: 'absolute',
        bottom: 20,
        left:10,
        right:0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    option :{
        width: '85%',
        backgroundColor: "#13131333",
        marginBottom: 20,
        borderRadius:5,
        paddingVertical: 20,
    },
    optionText : {
        textAlign: 'center',
        color: COLORS.white,
        ...globalStyles.btnText,
    }
})

export default Login;   
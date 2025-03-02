import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './components/splash/splash';
import Login from './components/login/login';
import useFonts  from '../assets/fonts/fonts';
import ExistingAccount from './components/login/comonents/existing/existing';
import Status from './components/login/comonents/status/status';
import Apply from './components/login/comonents/apply/apply';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const fontsLoaded = useFonts();

  if (!fontsLoaded) {
    return null; // Or a splash/loading screen
  }

  return (
    <Stack.Navigator 
    initialRouteName="Splash"  
    screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Status" component={Status} />
      <Stack.Screen name="Existing" component={ExistingAccount} />
      <Stack.Screen name="Apply" component={Apply} />
    </Stack.Navigator>
  );
};

export default AppNavigator;

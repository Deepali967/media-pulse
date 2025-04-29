import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './components/splash/splash';
import Login from './components/login/login';
import useFonts from '../assets/fonts/fonts';
import ExistingAccount from './components/login/comonents/existing/existing';
import Status from './components/login/comonents/status/status';
import Apply from './components/login/comonents/apply/apply';
import Creator from './components/creator/components/creator';
import DashboardScreen from './components/home/Home';
import CampaignScreen from './components/campaigns/campaigns';
import localStorageService from './service/localstorage.service';
import { tabs } from '@/assets/constants/constants';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const fontsLoaded = useFonts();
  const localstorageService = localStorageService();
  const [loading, setIsLoading] = React.useState(true);

  // Initialize state
  const [isAuthenticated, setIsAuthenticated] = React.useState<boolean | undefined>(undefined);
  const [profileCompleted, setProfileCompleted] = React.useState<boolean>(false);
  const [initialScreen, setInitialScreen] = React.useState<string>('Splash'); // Default initial screen

  // Wait for fonts to load before rendering anything
  if (!fontsLoaded) {
    return null; // Or splash screen if needed
  }

  // Set initial screen based on authentication state
  React.useEffect(() => {
    if (isAuthenticated && profileCompleted) {
      setInitialScreen('DashboardScreen');
    } else if (!isAuthenticated) {
      setInitialScreen('Splash');
    } else if (isAuthenticated && !profileCompleted) {
      setInitialScreen('Creator');
    }

    setIsLoading(false); // Set loading to false after determining the initial screen
  }, [isAuthenticated, profileCompleted]);

  // Check authentication and profile status
  React.useEffect(() => {
    setIsLoading(true); // Set loading to true while checking authentication

    const checkAuthentication = async () => {
      const isUserAuthenticated = await localstorageService.getStoreItem('isAuthenticated');
      const profile = await localstorageService.getStoreItem('profileCompletion');

      if (isUserAuthenticated) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }

      if (profile) {
        setProfileCompleted(profile);
      }
    };

    checkAuthentication();
  }, []); // Run once when the component mounts

  return (
      loading ? (
        <></>
      ) : (
        <Stack.Navigator
          initialRouteName={initialScreen}
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Status" component={Status} />
          <Stack.Screen name="Existing" component={ExistingAccount} />
          <Stack.Screen name="Apply" component={Apply} />
          <Stack.Screen name="Creator" component={Creator} />
          <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
          <Stack.Screen name="CampaignScreen" component={CampaignScreen} />
        </Stack.Navigator>
      )
  );
};

export default AppNavigator;

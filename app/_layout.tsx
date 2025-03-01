import React from 'react';
import AppNavigator from './app-navigator';
import { View , StyleSheet} from 'react-native';


export default function App() {
  return (
    <View style={styles.app}>
      <AppNavigator />
    </View>  
  );
}


const styles = StyleSheet.create({
  app : {
    height: '100%',
    width: '100%',
  }
})
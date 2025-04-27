import React from 'react';
import AppNavigator from './app-navigator';
import { View , StyleSheet, ScrollView} from 'react-native';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer} style={styles.app}>
      <AppNavigator />
    </ScrollView>  
  );
}


const styles = StyleSheet.create({
  app : {
    height: '100%',
    width: '100%',
    flex: 1
  },

  scrollContainer: {
    flexGrow: 1,
  },

  Image: {
    maxHeight: 100,
    maxWidth: 100,
  }
})
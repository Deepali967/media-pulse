import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
  const naviation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => naviation.goBack()}>
        <Ionicons name="chevron-back" size={24} color="#0A1B31" />
      </TouchableOpacity>
      <Feather name="edit" size={20} color="#0A1B31" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 8,
    paddingHorizontal: 16,
  },
});

export default Header;
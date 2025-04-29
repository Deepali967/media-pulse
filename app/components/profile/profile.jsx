import { globalStyles } from '@/assets/typography/typography';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

export default function Profile() {

    const navigation = useNavigation();

    const handleNaviagation = (type) => {
        switch (type) {
            case 'userProfile':
                navigation.navigate('UserProfile');
                break;
            case 'back':
                navigation.goBack();
                break;    
        }
    }

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={() => handleNaviagation('back')}>
        <Image style={styles.backButton} source={require('../../../assets/images/creator/back.png')} />
      </TouchableOpacity>

      <View style={styles.profileSection}>
        <Image
          source={require('../../../assets/images/sample-avatar.png')} // Replace with real image URI
          style={styles.profileImage}
        />
        <Text style={styles.userName}>karina bedi</Text>
        <TouchableOpacity onPress={() => handleNaviagation('profile')} style={styles.viewProfileBtn}>
          <Text style={styles.viewProfileText}>view profile</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.optionList}>
        <MenuItem icon="credit-card" text="payments details" />
        <MenuItem icon="settings" text="settings" />
        <MenuItem icon="headphones" text="support" />
        <MenuItem
          icon="alert-triangle"
          text="report a concern"
          alert
        />
      </View>
    </ScrollView>
  );
}

const MenuItem = ({ icon, text, alert }) => (
  <TouchableOpacity style={[styles.menuItem, alert && styles.alertItem]}>
    <Icon name={icon} size={20} color={alert ? '#A60000' : '#0A1B31'} style={styles.menuIcon} />
    <Text style={[styles.menuText, alert && styles.alertText]}>{text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FAFF',
    paddingHorizontal: 20,
  },
  backButton: {
    marginTop: 20,
    alignSelf: 'flex-start',
    height: 10,
    width: 10,
  },
  profileSection: {
    alignItems: 'center',
    marginVertical: 30,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    resizeMode: 'cover',
  },
  userName: {
    fontWeight: '600',
    color: '#0A1B31',
    marginVertical: 10,
    ...globalStyles.paragraph,
    fontSize: 14,
  },
  viewProfileBtn: {
    borderColor: '#0A1B31',
    borderWidth: 1,
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 12,
    backgroundColor: '#fff',
    shadowColor: '#0A1B310D',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    ...globalStyles.paragraph,
    fontSize: 14,
  },
  viewProfileText: {
    color: '#0A1B31',
    fontWeight: '500',
    ...globalStyles.paragraph,
    fontSize: 14,
  },
  optionList: {
    marginTop: 20,
  },
  menuItem: {
    backgroundColor: '#08193205',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginBottom: 12,
    borderRadius: 12,
  },
  menuIcon: {
    marginRight: 12,
  },
  menuText: {
    color: '#0A1B31',
    fontWeight: '500',
    ...globalStyles.paragraph,
    fontSize: 14,
  },
  alertItem: {
    backgroundColor: '#FCEDED',
  },
  alertText: {
    color: '#A60000',
  },
});

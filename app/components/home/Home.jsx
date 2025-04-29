import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';;
import { Ionicons, Feather } from '@expo/vector-icons'; // Using Expo Icons
import { useNavigation } from '@react-navigation/native';
import { CampaignCard } from '@/assets/constants/constants';
import { globalStyles } from '@/assets/typography/typography';

import { setCampaign } from './../../service/campaign-service'; // Adjust the import path as necessary

const DashboardScreen = () => {
  const navigation = useNavigation();

  const handleCampaignView = (campaign) => {
    setCampaign(campaign);
    navigation.navigate('CampaignScreen');
  }

  const handleNavigation = (type) => {
    switch(type) {
      case 'payment':
        navigation.navigate('Payment');
        break;

      case 'profile':
        navigation.navigate('Profile');
        break;  

      case 'userProfile':  
      navigation.navigate('UserProfile');
        break; 
    }
  }

  return (
    <ScrollView style={styles.container}>
      {/* Top Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => handleNavigation('profile')}>
        <Image
          source={require('../../../assets/images/sample-avatar.png')} // Profile Pic
          style={styles.profilePic}
        />
        </TouchableOpacity>
        <View style={styles.headerIcons}>
          <Ionicons name="notifications-outline" size={24} color="black" style={styles.icon} />
          <TouchableOpacity onPress={() => handleNavigation('payment')}>
         <Image resizeMode="contain" source={require('../../../assets/images/payment.png')} style={{width:20, height:20}} ></Image>
          </TouchableOpacity>
        </View>
      </View>

      {/* Complete Profile Card */}
      <View style={styles.completeProfileCard}>
        <View style={{ flex: 1 }}>
          <Text style={styles.completeProfileText}>complete profile</Text>
          <Text style={styles.subText}>
            completing your profile boosts your visibility to more brands.
          </Text>
          <TouchableOpacity onPress={() => handleNavigation('userProfile')} style={styles.button}>
            <Text style={styles.buttonText}>let's complete</Text>
            <Ionicons name="arrow-forward" size={18} color="white" style={{ marginLeft: 8 }} />
          </TouchableOpacity>
        </View>
        <View style={styles.progressCircle}>
          <Text style={styles.progressText}>67%</Text>
        </View>
      </View>

      {/* Campaigns Section */}
      <View style={styles.campaignHeader}>
        <Text style={styles.sectionTitle}>campaigns</Text>
      </View>

      {/* Campaign Card */}

    {
      CampaignCard.map((item, index) => (
        <TouchableOpacity key={index} onPress={() => handleCampaignView(item)}> 
          <View style={styles.campaignCard}>
            <Image
              source={{ uri: item.image }} // Campaign image
              style={styles.campaignImage}
            />
            <View style={styles.campaignInfo}>
              <Text style={styles.campaignTitle}>{item.campaignTitle}</Text>
              <Text style={styles.campaignLabel}>campaign name</Text>
              <Text style={styles.campaignValue}>{item.campaignDetails?.campaignName}</Text>

              <Text style={styles.campaignLabel}>total deliverables</Text>
              <Text style={styles.campaignValue}>{item?.campaignDetails?.totalDeliverables}</Text>

              <Text style={styles.campaignLabel}>timeline</Text>
              <Text style={styles.campaignValue}>{item?.campaignDetails?.timeline}</Text>

              <Text style={styles.campaignLabel}>deal cost</Text>
              <Text style={styles.campaignCost}>{item?.campaignDetails?.dealCost}</Text>
            </View>
          </View>
        </TouchableOpacity> 
      ))
    }
    </ScrollView>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7FAFC',
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 16,
  },
  completeProfileCard: {
    backgroundColor: '#0D1B2A',
    borderRadius: 20,
    flexDirection: 'row',
    padding: 20,
    marginVertical: 20,
    alignItems: 'center',
  },
  completeProfileText: {
    color: '#ffffff',
    marginBottom: 8,
    textTransform: 'capitalize',
    ...globalStyles.paragraph,
    fontSize: 16,
  },
  subText: {
    color: '#b0bec5',
    marginBottom: 16,
    ...globalStyles.paragraph,
    fontSize: 12,
  },
  button: {
    backgroundColor: '#1A2B4C',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    textTransform: 'capitalize',
    ...globalStyles.paragraph,
    fontSize: 12,
  },
  progressCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 5,
    borderColor: '#3b4c66',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
  },
  progressText: {
    color: 'white',
    ...globalStyles.paragraph,
    fontSize: 16,
  },
  campaignHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    color: '#1c1c1e',
    textTransform: 'capitalize',
    ...globalStyles.paragraph,
    fontSize: 14,
  },
  exploreText: {
    color: '#1c1c1e',
    fontSize: 14,
    opacity: 0.6,
  },
  campaignCard: {
    backgroundColor: '#f9fafb',
    borderRadius: 16,
    flexDirection: 'row',
    padding: 12,
    marginBottom: 30,
    borderColor: '#d6d6d6',
    borderWidth: 1,
  },
  campaignImage: {
    width: 100,
    height: 150,
    borderRadius: 12,
    marginRight: 16,
  },
  campaignInfo: {
    flex: 1,
  },
  campaignTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 6,
    marginBottom: 10,
    color: '#1c1c1e',
    textTransform: 'capitalize',
    ...globalStyles.paragraph,
    textAlign: 'center',
  },
  campaignLabel: {
    color: '#8e8e93',
    marginTop: 8,
    textTransform: 'capitalize',
    ...globalStyles.paragraph,
    fontSize: 10,
    textAlign: 'center',
  },
  campaignValue: {
    color: '#1c1c1e',
    marginTop: 2,
    marginBottom: 7,
    textTransform: 'capitalize',
    ...globalStyles.paragraph,
    fontSize: 12,
    textAlign: 'center',
  },
  campaignCost: {
    color: '#1c1c1e',
    fontWeight: 'bold',
    ...globalStyles.notificationText,
    fontSize: 14,
    marginTop: 2,
    textAlign: 'center',
  },
});

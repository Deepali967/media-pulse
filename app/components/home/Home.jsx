import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';;
import { Ionicons, Feather } from '@expo/vector-icons'; // Using Expo Icons
import { useNavigation } from '@react-navigation/native';

const DashboardScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      {/* Top Header */}
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://via.placeholder.com/40' }} // Profile Pic
          style={styles.profilePic}
        />
        <View style={styles.headerIcons}>
          <Ionicons name="notifications-outline" size={24} color="black" style={styles.icon} />
          <Feather name="briefcase" size={24} color="black" />
        </View>
      </View>

      {/* Complete Profile Card */}
      <View style={styles.completeProfileCard}>
        <View style={{ flex: 1 }}>
          <Text style={styles.completeProfileText}>complete profile</Text>
          <Text style={styles.subText}>
            completing your profile boosts your visibility to more brands.
          </Text>
          <TouchableOpacity style={styles.button}>
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
        <Text style={styles.exploreText}>explore</Text>
      </View>

      {/* Campaign Card */}
     <TouchableOpacity onPress={() => navigation.navigate('CampaignScreen')}> 
      <View style={styles.campaignCard}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9' }} // Plant image
          style={styles.campaignImage}
        />
        <View style={styles.campaignInfo}>
          <Text style={styles.campaignTitle}>simple skincare</Text>
          <Text style={styles.campaignLabel}>campaign name</Text>
          <Text style={styles.campaignValue}>non beauty 2.0</Text>

          <Text style={styles.campaignLabel}>total deliverables</Text>
          <Text style={styles.campaignValue}>3</Text>

          <Text style={styles.campaignLabel}>timeline</Text>
          <Text style={styles.campaignValue}>feb 2025 - mar 2025</Text>

          <Text style={styles.campaignLabel}>deal cost</Text>
          <Text style={styles.campaignCost}>₹ 2,00,000</Text>
        </View>
      </View>
      </TouchableOpacity> 
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
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    textTransform: 'capitalize',
  },
  subText: {
    color: '#b0bec5',
    fontSize: 12,
    marginBottom: 16,
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
    fontWeight: 'bold',
    textTransform: 'capitalize',
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
    fontWeight: 'bold',
    fontSize: 18,
  },
  campaignHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1c1c1e',
    textTransform: 'capitalize',
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
    marginBottom: 6,
    color: '#1c1c1e',
  },
  campaignLabel: {
    fontSize: 12,
    color: '#8e8e93',
    marginTop: 8,
  },
  campaignValue: {
    fontSize: 14,
    color: '#1c1c1e',
    marginTop: 2,
  },
  campaignCost: {
    fontSize: 16,
    color: '#1c1c1e',
    fontWeight: 'bold',
    marginTop: 2,
  },
});

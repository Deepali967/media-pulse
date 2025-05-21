import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons"; // Using Expo Icons
import { useNavigation } from "@react-navigation/native";
import { CampaignCard } from "@/assets/constants/constants";
import { globalStyles } from "@/assets/typography/typography";

import { setCampaign } from "./../../service/campaign-service"; // Adjust the import path as necessary
import { SafeAreaView } from "react-native-safe-area-context";
import { BlurView } from "expo-blur";

const DashboardScreen = () => {
  const navigation = useNavigation();

  const handleCampaignView = (campaign) => {
    setCampaign(campaign);
    navigation.navigate("CampaignScreen");
  };

  const handleNavigation = (type) => {
    switch (type) {
      case "payment":
        navigation.navigate("Payment");
        break;

      case "profile":
        navigation.navigate("Profile");
        break;

      case "userProfile":
        navigation.navigate("UserProfile");
        break;
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, position: "relative" }}>
      <BlurView
        intensity={80}
        tint="light" // 'light', 'dark', or 'default'
        style={StyleSheet.absoluteFill}
      />
      <ScrollView style={styles.container}>
        {/* Top Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => handleNavigation("profile")}>
            <Image
              source={require("../../../assets/images/sample-avatar.png")} // Profile Pic
              style={styles.profilePic}
            />
          </TouchableOpacity>
          <View style={styles.headerIcons}>
            <Ionicons
              name="notifications-outline"
              size={24}
              color="black"
              style={styles.icon}
            />
            <TouchableOpacity onPress={() => handleNavigation("payment")}>
              <Image
                resizeMode="contain"
                source={require("../../../assets/images/payment.png")}
                style={{ width: 20, height: 20 }}
              ></Image>
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
            <TouchableOpacity
              onPress={() => handleNavigation("userProfile")}
              style={styles.button}
            >
              <Text style={styles.buttonText}>let's complete</Text>
              <Ionicons
                name="arrow-forward"
                size={18}
                color="white"
                style={{ marginLeft: 8 }}
              />
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

        {CampaignCard.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleCampaignView(item)}
          >
            <View style={styles.campaignCard}>
              <Image
                source={require("../../../assets/images/creator/sample-campaign.png")} // Campaign image
                style={styles.campaignImage}
              />
              <View style={styles.campaignInfo}>
                <Text style={styles.campaignTitle}>{item.campaignTitle}</Text>
                <Text style={styles.campaignLabel}>campaign name</Text>
                <Text style={styles.campaignValue}>
                  {item.campaignDetails?.campaignName}
                </Text>

                <Text style={styles.campaignLabel}>total deliverables</Text>
                <Text style={styles.campaignValue}>
                  {item?.campaignDetails?.totalDeliverables}
                </Text>

                <Text style={styles.campaignLabel}>timeline</Text>
                <Text style={styles.campaignValue}>
                  {item?.campaignDetails?.timeline}
                </Text>

                <Text style={styles.campaignLabel}>deal cost</Text>
                <Text style={styles.campaignCost}>
                  {item?.campaignDetails?.dealCost}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FBFF",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  profilePic: {
    width: 48,
    height: 48,
    borderRadius: 20,
  },
  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 16,
  },
  completeProfileCard: {
    backgroundColor: "#0D1B2A",
    borderRadius: 20,
    flexDirection: "row",
    padding: 20,
    marginVertical: 40,
    alignItems: "center",
  },
  completeProfileText: {
    color: "#F5FBFF",
    marginBottom: 12,
    textTransform: "capitalize",
    ...globalStyles.paragraph,
    fontSize: 16,
  },
  subText: {
    color: "#F6FBFE80",
    marginBottom: 16,
    ...globalStyles.paragraph,
    fontSize: 12,
    lineHeight: 18,
  },
  button: {
    backgroundColor: "#1A2B4C",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
  },
  buttonText: {
    color: "white",
    fontSize: 14,
    textTransform: "capitalize",
    ...globalStyles.paragraph,
    fontSize: 10,
  },
  progressCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 5,
    borderColor: "#3b4c66",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
  },
  progressText: {
    color: "white",
    ...globalStyles.paragraph,
    fontSize: 16,
  },
  campaignHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  sectionTitle: {
    color: "#091C38",
    textTransform: "capitalize",
    ...globalStyles.paragraph,
    fontSize: 14,
    fontWeight: 500,
  },
  exploreText: {
    color: "#1c1c1e",
    fontSize: 14,
    opacity: 0.6,
  },
  campaignCard: {
    backgroundColor: "#c8d7a51a",
    borderRadius: 16,
    flexDirection: "row",
    padding: 12,
    marginBottom: 30,
    borderColor: "#C8D7A5",
    borderWidth: 1,
  },
  campaignImage: {
    flex: 0,
    borderRadius: 12,
    marginRight: 16,
    width: 150,
    height: 223,
  },
  campaignInfo: {
    flex: 1,
  },
  campaignTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 6,
    marginBottom: 10,
    color: "#1c1c1e",
    ...globalStyles.paragraph,
    textAlign: "center",
  },
  campaignLabel: {
    color: "#435D0480",
    marginTop: 8,
    textTransform: "capitalize",
    ...globalStyles.paragraph,
    fontSize: 8,
    textAlign: "center",
  },
  campaignValue: {
    color: "#081932",
    marginTop: 2,
    marginBottom: 7,
    textTransform: "capitalize",
    ...globalStyles.paragraph,
    fontSize: 12,
    textAlign: "center",
  },
  campaignCost: {
    color: "#1c1c1e",
    ...globalStyles.notificationText,
    fontSize: 14,
    marginTop: 2,
    textAlign: "center",
  },
});

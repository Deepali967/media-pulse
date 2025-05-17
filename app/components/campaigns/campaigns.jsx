import { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import DeliverablesTab from "./deliverable";
import BasicInfoTab from "./basic-info";
import { getCampaign } from "@/app/service/campaign-service";
import { globalStyles } from "@/assets/typography/typography";
import { campaignTabs } from "@/assets/constants/constants";

import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CampaignScreen() {
  const [activeTab, setActiveTab] = useState(campaignTabs[0]);

  const [campaignDetails, setCampaignDetails] = useState(getCampaign() ||  CampaignCard[0]);

  const navigation = useNavigation();

  const handleBack = () => {
    navigation.navigate("DashboardScreen");
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
    <View style={styles.container}>
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => {handleBack()}}>
          <Image
            source={require('../../../assets/images/creator/back.png')}
            style={[
              styles.backIcon,
            ]}
          />
        </TouchableOpacity>
        <Text style={styles.titleText}>
          {campaignDetails?.campaignTitle || "Campaign Title"}
        </Text>
      </View>

      {/* Tabs */}
      <View style={styles.tabContainer}>
        {campaignTabs.map((tab, index) => (
            <TouchableOpacity
                key={index}
                style={[styles.tabButton, activeTab.text === tab.text && styles.activeTab]}
                onPress={() => setActiveTab(tab)}
            >
                <Text style={[styles.tabText, activeTab.text === tab.text && styles.activeTabText]}>
                {tab.text}
                </Text>
            </TouchableOpacity>
            ))}
      </View>

      {/* Content */}
      <View style={{ flex: 1 }}>
        {activeTab.id === 0 && <BasicInfoTab campaign={campaignDetails} />}
        {activeTab.id === 1 && <DeliverablesTab  campaign={campaignDetails} />}
      </View>

    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F7FAFC',
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  backIcon: {
    width: 10,
    height:10,
    marginRight: 10,
  },
  hiddenBackIcon: {
    opacity: 0,
  },
  titleText: {
    color: "#081932",
    fontWeight: "600",
    textAlign: "center",
    flex: 1,
    textTransform: "capitalize",
    ...globalStyles.notificationText,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  tabButton: {
    backgroundColor: '#E7ECF3',
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginRight: 10,
    paddingHorizontal: 20,
  },
  activeTab: {
    backgroundColor: '#0A122A',
  },
  tabText: {
    color: '#0A122A',
    fontWeight: '400',
    ...globalStyles.paragraph,
    fontSize: 14,
  },
  activeTabText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
});

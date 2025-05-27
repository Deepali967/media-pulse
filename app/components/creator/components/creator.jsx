import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import localStorageService from "@/app/service/localstorage.service";
import BasicInfo from "./basic-info";
import Categories from "./category";
import FeeCardComponent from "./fee-card";
import { globalStyles } from "@/assets/typography/typography";
import { tabs } from "@/assets/constants/constants";

const Creator = () => {
  const [allTabs, setTabs] = useState(tabs);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const navigation = useNavigation();
  const localstorageService = localStorageService();
  const [isLoading, setLoading] = useState(true);

  const renderContent = () => {
    switch (activeTab.route) {
      case "BasicInfo":
        return (
          <BasicInfo
            data={activeTab.data}
            handleNextClick={(basicInfo) =>
              handleNavigation(basicInfo, "next")
            }
          />
        );
      case "Categories":
        return (
          <Categories
            data={activeTab.data}
            handleNextClick={(categories) =>
              handleNavigation(categories, "next")
            }
          />
        );
      case "FeeCard":
        return (
          <FeeCardComponent
            data={activeTab.data}
            handleNextClick={(info) => handleNavigation(info, "next")}
          />
        );
      default:
        return <BasicInfo handleNextClick={() => handleNavigation("next")} />;
    }
  };

  const handleNavigation = (info, type) => {
    switch (type) {
      case "next":
        const updatedTabs = allTabs.map((tab) => {
          if (tab.id === activeTab.id) return { ...tab, data: info };
          return tab;
        });
        setTabs(updatedTabs);
        localstorageService.setStoreItem("tabs", updatedTabs);
        if (activeTab.id === 2) {
          localstorageService.setStoreItem("profileCompletion", true);
          navigation.navigate("DashboardScreen");
          return;
        }
        setActiveTab(updatedTabs[activeTab.id + 1]);
        break;
      case "previous":
        setActiveTab(allTabs[activeTab.id - 1]);
        break;
    }
  };

  const setActiveTabData = (tab) => {
    if (!allTabs[0]?.data?.name) return;
    if (activeTab === tab) return;
    setActiveTab(tab);
  };

  const handleSkip = () => {
    localstorageService.setStoreItem("tabs", allTabs);
    localstorageService.setStoreItem("profileCompletion", true);
    navigation.navigate("DashboardScreen");
  };

  useEffect(() => {
    const importTabs = async () => {
      const storedTabs = await localstorageService.getStoreItem("tabs");
      if (storedTabs) {
        setTabs(storedTabs);
        setActiveTab(storedTabs[0]);
      }
      setLoading(false);
    };
    importTabs();
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAwareScrollView
          contentContainerStyle={styles.scrollContent}
          enableOnAndroid={true}
          extraScrollHeight={Platform.OS === "ios" ? 80 : 0}
          keyboardShouldPersistTaps="handled"
        >
          {!isLoading ? (
            <>
              {/* Header */}
              <View style={styles.header}>
                <TouchableOpacity
                  onPress={() => handleNavigation("", "previous")}
                  disabled={activeTab.id === 0}
                >
                  <Image
                    source={require("../../../../assets/images/creator/back.png")}
                    style={[
                      styles.backIcon,
                      activeTab.id === 0 && styles.hiddenBack,
                    ]}
                  />
                </TouchableOpacity>
                {allTabs[0]?.data?.name && (
                  <Text
                    style={styles.skipText}
                    onPress={handleSkip}
                  >
                    skip
                  </Text>
                )}
              </View>

              {/* Tab Buttons */}
              <View style={styles.tabContainer}>
                {allTabs.map((tab) => (
                  <TouchableOpacity
                    key={tab.id}
                    style={[
                      styles.tabButton,
                      activeTab.id === tab.id && styles.activeTab,
                    ]}
                    onPress={() => setActiveTabData(tab)}
                  >
                    <Text
                      style={[
                        styles.tabText,
                        activeTab.id === tab.id && styles.activeTabText,
                      ]}
                    >
                      {tab.text}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>

              {/* Dynamic Content */}
              <View style={styles.contentWrapper}>{renderContent()}</View>
            </>
          ) : (
            <View style={styles.loader}>
              <Text style={{ ...globalStyles.paragraph, fontSize: 14 }}>
                Loading...
              </Text>
            </View>
          )}
        </KeyboardAwareScrollView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "rgba(245, 251, 255, 1)",
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 40,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  backIcon: {
    width: 62,
    height: 30,
  },
  hiddenBack: {
    opacity: 0,
  },
  skipText: {
    color: "#555",
    ...globalStyles.paragraph,
    fontSize: 14,
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  tabButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  tabText: {
    ...globalStyles.paragraph,
    fontSize: 14,
    color: "#091C38",
  },
  activeTab: {},
  activeTabText: {
    ...globalStyles.notificationText,
    fontSize: 14,
  },
  contentWrapper: {
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  loader: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Creator;

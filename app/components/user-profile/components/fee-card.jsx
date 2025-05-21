import { globalStyles } from "@/assets/typography/typography";
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

const FeeCard = ({ data }) => {
  const [activePlatform, setActivePlatform] = useState("instagram");
  const platforms = Object.keys(data);

  const currentFields = data?.[activePlatform]?.fields?.[0] || {};

  return (
    <View style={styles.container}>
      {/* Fee List */}
      <ScrollView>
        {Object.entries(currentFields).map(([key, { label, value }]) => (
          <View key={key} style={styles.feeRow}>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.value}>
              {value ? "₹ " + Number(value).toLocaleString("en-IN") : "-"}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
  },
  tabsContainer: {
    flexDirection: "row",
    backgroundColor: "#E8EDF3",
    padding: 4,
    borderRadius: 12,
    marginBottom: 16,
  },
  tab: {
    flex: 1,
    paddingVertical: 8,
    alignItems: "center",
    borderRadius: 10,
    ...globalStyles.paragraph,
    fontSize: 14,
  },
  activeTab: {
    backgroundColor: "#0A1B31",
  },
  tabText: {
    color: "#0A1B31",
    ...globalStyles.paragraph,
    fontSize: 14,
  },
  activeTabText: {
    color: "#FFFFFF",
    fontWeight: "600",
    ...globalStyles.paragraph,
    fontSize: 14,
  },
  feeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
    marginBottom: 12,
  },
  label: {
    fontSize: 14,
    color: "#0A1B31",
    ...globalStyles.paragraph,
    fontSize: 14,
  },
  value: {
    fontSize: 14,
    fontWeight: "600",
    color: "#0A1B31",
    ...globalStyles.paragraph,
    fontSize: 14,
  },
});

export default FeeCard;

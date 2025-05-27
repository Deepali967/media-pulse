import { globalStyles } from "@/assets/typography/typography";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager,
  Image,
} from "react-native";

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const CategoriesAccordion = ({ categoryData }) => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (category) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedSections((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  return (
    <ScrollView style={styles.container}>
      {Object.keys(categoryData).map((category) => {
        const selectedItems = categoryData[category].filter(
          (item) => item.selected,
        );
        const isExpanded = expandedSections[category];

        return (
          <View key={category} style={styles.section}>
            <TouchableOpacity
              style={styles.title}
              onPress={() => toggleSection(category)}
            >
              <Text style={styles.titleText}>{category}</Text>
              {isExpanded ? (
                <Image
                  source={require("../../../../assets/images/arrow-up.png")}
                  style={{ height: 15, width: 15 }}
                />
              ) : (
                <Image
                  source={require("../../../../assets/images/arrow-down.png")}
                  style={{ height: 15, width: 15 }}
                />
              )}
            </TouchableOpacity>
            {isExpanded && (
              <View style={styles.tags}>
                {selectedItems.length > 0 ? (
                  selectedItems.map((item) => (
                    <View key={item.title} style={styles.tag}>
                      <Text style={styles.tagText}>{item.title}</Text>
                    </View>
                  ))
                ) : (
                  <Text style={styles.noSelection}>No selections</Text>
                )}
              </View>
            )}
          </View>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    backgroundColor: "#f1f5f9",
  },
  section: {
    marginBottom: 12,
  },
  title: {
    marginBottom: 8,
    backgroundColor: "#0819320D",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    flexDirection: "row",
  },

  titleText: {
    color: "#081932",
    textTransform: "capitalize",
    ...globalStyles.paragraph,
    fontSize: 14,
  },

  tags: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingVertical: 10,
  },
  tag: {
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginRight: 8,
    marginBottom: 8,
    ...globalStyles.paragraph,
    fontSize: 16,
    borderColor: "#0819320D",
    borderWidth: 1,
  },
  tagText: {
    fontSize: 14,
    color: "#081932",
    ...globalStyles.paragraph,
  },
  noSelection: {
    color: "#888",
    ...globalStyles.paragraph,
    fontSize: 14,
    textAlign: "center",
    marginLeft: 20,
    paddingVertical: 10,
  },
});

export default CategoriesAccordion;

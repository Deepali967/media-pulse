import { globalStyles } from "@/assets/typography/typography";
import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const BasicInfo = ({ data }) => {
  const { name, titles, currentLocation, locations, bio } = data || {};
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../../assets/images/creator/sample.png")} // Replace with real image URI
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.infoHeader}>
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.titles}>{titles?.join(", ") || "title -"}</Text>
        </View>

        <View style={styles.socialMedia}>
          <Image
            source={require("../../../../assets/images/creator/instagram-icn.svg")}
            style={{ width: 30, height: 30 }}
          />
          <Image
            source={require("../../../../assets/images/creator/youtube-icn.svg")}
            style={{ width: 30, height: 30 }}
          />
        </View>
      </View>

      <View style={styles.locationContainer}>
        <Text
          style={[
            styles.locationButton,
            styles.activeLocation,
            styles.locationText,
            styles.activeText,
          ]}
        >
          {data["location"] || "location-"}{" "}
        </Text>
      </View>

      {<Text style={styles.bio}>{bio}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: "center", paddingHorizontal: 30 },
  image: { width: "100%", borderRadius: 16 },

  infoHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
  },
  selectedImage: {
    position: "absolute",
    top: -14,
    right: 25,
    width: 12,
    height: 12,
    zIndex: 2,
  },

  socialMedia: {
    display: "flex",
    flexDirection: "row",
    gap: 16,
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop: 16,
  },

  name: {
    fontSize: 18,
    fontWeight: 600,
    color: "#0A1B31",
    marginTop: 16,
    textAlign: "left",
    width: "100%",
    ...globalStyles.notificationText,
  },
  titles: {
    fontSize: 12,
    color: "#6B7280",
    marginTop: 4,
    textAlign: "left",
    width: "100%",
    ...globalStyles.paragraph,
  },
  locationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    marginTop: 30,
    gap: 8,
    width: "100%",
    position: "relative",
    marginBottom: 20,
  },
  locationButton: {
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderRadius: 4,
    marginTop: -5,
  },
  activeLocation: { backgroundColor: "#0819320D" },
  inactiveLocation: { backgroundColor: "#F1F5F9" },
  locationText: { fontSize: 14 },
  activeText: { color: "#081932", ...globalStyles.paragraph },
  inactiveText: { color: "#889197" },
  bio: {
    textAlign: "center",
    fontSize: 12,
    color: "#6B7280",
    marginBottom: 16,
    backgroundColor: "#08193205",
    width: "100%",
    padding: 10,
    borderRadius: 10,
    ...globalStyles.paragraph,
  },
});

export default BasicInfo;

import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // For radio buttons & close icons (optional)
import { globalStyles } from "@/assets/typography/typography";
import { COLORS } from "@/assets/typography/colors";
import { CommonStyles } from "@/assets/typography/common-css";

const BasicInfo = ({ data, handleNextClick }) => {
  const [basicInfo, setBasicInfo] = useState(data);

  const [isFocused, setIsFocused] = useState({
    name: false,
    bio: false,
    titles: false,
    location: false,
  });

  const [errors, setErrors] = useState({
    name: "Field is required",
    bio: "",
    titles: "",
  });

  const titleRef = useRef(null);

  const [currentTitle, setCurrentTitle] = useState("");

  const [showDropdown, setShowDropdown] = useState(false);
  const [allLocations, setAllLocations] = useState(data?.locations || []);
  const [query, setQuery] = useState(basicInfo?.location || "");
  const [locations, setLocations] = useState(data?.locations || []);

  const handleTitleChange = (text) => {
    if (text.includes(",")) {
      const newTags = text
        .split(",")
        .map((t) => t.trim())
        .filter((t) => t);
      updateBasicInfo("titles", [...basicInfo.titles, ...newTags]);
      setCurrentTitle("");
      setTimeout(() => {
        titleRef.current?.focus();
      }, 100);
    } else {
      setCurrentTitle(text);
    }
  };

  const removeTag = (indexToRemove) => {
    const updatedTags = basicInfo.titles.filter((_, i) => i !== indexToRemove);
    updateBasicInfo("titles", updatedTags);
    setTimeout(() => {
      titleRef.current?.focus();
    }, 100);
  };

  const updateBasicInfo = (key, value) => {
    if (key === "name" && value.length) {
      setErrors((prevState) => ({
        ...prevState,
        name: "",
      }));
    }

    if (key === "bio" && value.length > 300) {
      setErrors((prevState) => ({
        ...prevState,
        bio: "Bio should be less than 300 characters",
      }));
    }

    if (key === "titles" && value.length > 5) {
      setErrors((prevState) => ({
        ...prevState,
        titles: "You can add up to 5 titles",
      }));
    }

    setBasicInfo((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const handleSelect = (location) => {
    setBasicInfo((prevState) => ({
      ...prevState,
      location: location,
    }));

    setQuery(location);
    setShowDropdown(false);
  };

  useEffect(() => {
    const filteredLocations = allLocations.filter((location) =>
      location.toLowerCase().includes(query.toLowerCase()),
    );

    setLocations(filteredLocations);
  }, [query]);

  useEffect(() => {
    if (basicInfo?.name) {
      setErrors((prevState) => ({
        ...prevState,
        name: "",
      }));
    }
  }, []);

  return (
    <View
      style={{ ...styles.container, paddingBottom: 100 }}
    >
      {/* Image */}
      <View style={styles.imageWrapper}>
        <Image
          source={require("../../../../assets/images/creator/sample.png")}
          style={styles.profileImage}
        />
        <TouchableOpacity style={styles.replaceBtn}>
          <Text style={styles.replaceText}>replace</Text>
        </TouchableOpacity>
      </View>

      {/* Name */}
      <View style={styles.inputWrapper}>
        {isFocused?.name || basicInfo?.name ? (
          <Text style={CommonStyles.focusedLabel}>name</Text>
        ) : null}
        <TextInput
          style={styles.input}
          placeholder={!isFocused?.name && !basicInfo?.name ? "name" : ""}
          placeholderTextColor="#A9A9A9"
          onFocus={() => setIsFocused({ ...isFocused, name: true })}
          onBlur={() => setIsFocused({ ...isFocused, name: false })}
          value={basicInfo["name"]}
          onChangeText={(e) => updateBasicInfo("name", e)}
        />
        {errors.name && <Text style={styles.errors}>{errors.name}</Text>}
      </View>

      {/* Titles */}
      <View style={styles.titleWrapper}>
        {isFocused?.titles || basicInfo?.titles?.length ? (
          <Text style={CommonStyles.focusedLabel}>title</Text>
        ) : null}
        <View style={styles.tagsWrapper}>
          {basicInfo["titles"].map((title, index) => (
            <View key={index} style={styles.tag}>
              <Text style={styles.tagText}>{title} </Text>
              <TouchableOpacity onPress={() => removeTag(index)}>
                <Image
                  style={styles.removeTag}
                  source={require("../../../../assets/images/creator/remove.png")}
                />
              </TouchableOpacity>
            </View>
          ))}
          <TextInput
            ref={titleRef}
            style={styles.titleInput}
            placeholder={
              !isFocused?.titles && !basicInfo?.titles?.length ? "title" : ""
            }
            placeholderTextColor="#A9A9A9"
            onFocus={() => setIsFocused({ ...isFocused, titles: true })}
            onBlur={() => setIsFocused({ ...isFocused, titles: false })}
            value={currentTitle}
            onChangeText={handleTitleChange}
          />
        </View>
        {errors.titles && <Text style={styles.errors}>{errors.titles}</Text>}
      </View>

      {/* Location */}
      <View style={[styles.inputWrapper, { zIndex: showDropdown ? 10 : 1 }]}>
        {(basicInfo.location || isFocused.location) && (
          <Text style={CommonStyles.focusedLabel}>Location</Text>
        )}

        <TextInput
          style={[styles.input, { position: "relative" }]}
          placeholder={
            !isFocused.location && !basicInfo.location ? "location" : ""
          }
          value={query}
          placeholderTextColor="#A9A9A9"
          onFocus={() => setShowDropdown(true)}
          onBlur={() => {
            // Delay to allow onPress of dropdown items
            setTimeout(() => setShowDropdown(false), 150);
            setIsFocused({ ...isFocused, location: false });
          }}
          onChangeText={(text) => {
            setQuery(text);
            setShowDropdown(true);
            setIsFocused({ ...isFocused, location: true });
          }}
        />

        {showDropdown && (
          <View style={styles.dropdown}>
            <FlatList
              keyboardShouldPersistTaps="handled"
              data={locations}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => handleSelect(item)}
                  style={styles.dropdownItem}
                >
                  <Text style={styles.itemText}>{item}</Text>
                </TouchableOpacity>
              )}
              ListEmptyComponent={
                <Text style={styles.emptyText}>No matches found</Text>
              }
            />
          </View>
        )}
      </View>

      {/* Bio */}
      <View style={styles.inputWrapper}>
        {isFocused?.bio || basicInfo?.bio ? (
          <Text
            style={{ ...CommonStyles.focusedLabel, backgroundColor: "#F5FBFF" }}
          >
            bio
          </Text>
        ) : null}
        <TextInput
          style={[styles.input, { height: 85, paddingVertical: 15 }]}
          placeholder={!isFocused?.bio && !basicInfo?.bio ? "bio" : ""}
          onFocus={() => setIsFocused({ ...isFocused, bio: true })}
          onBlur={() => setIsFocused({ ...isFocused, bio: false })}
          placeholderTextColor="#A9A9A9"
          value={basicInfo["bio"]}
          onChangeText={(e) => updateBasicInfo("bio", e)}
          multiline
        />
        {errors.bio && <Text style={styles.errors}>{errors.bio}</Text>}
      </View>

      {/* Socials */}
      <View style={styles.socialRow}>
        <Image
          source={require("../../../../assets/images/creator/instagram.png")}
          style={styles.socialIcon}
        />
        <TextInput
          style={styles.socialInput}
          value={basicInfo["instagram"]}
          onChangeText={(e) => updateBasicInfo("instagram", e)}
        />
        {basicInfo["instagram"] ? (
          <TouchableOpacity
            style={styles.socialIconRemove}
            onPress={() => updateBasicInfo("instagram", "")}
          >
            <Image
              style={[styles.socialIcon, { margin: 0 }]}
              source={require("../../../../assets/images/creator/remove.png")}
            />
          </TouchableOpacity>
        ) : null}
      </View>

      <View style={styles.socialRow}>
        <Image
          source={require("../../../../assets/images/creator/youtube.png")}
          style={styles.socialIcon}
        />
        <TextInput
          style={styles.socialInput}
          value={basicInfo["youtube"]}
          onChangeText={(e) => updateBasicInfo("youtube", e)}
        />
        {basicInfo["youtube"] ? (
          <TouchableOpacity
            style={styles.socialIconRemove}
            onPress={() => updateBasicInfo("youtube", "")}
          >
            <Image
              style={[styles.socialIcon, { margin: 0 }]}
              source={require("../../../../assets/images/creator/remove.png")}
            />
          </TouchableOpacity>
        ) : null}
      </View>

      {/* Next Button */}
      <TouchableOpacity
        style={[
          styles.nextButton,
          errors?.name ? styles.nextButtonDisabled : {},
        ]}
        onPress={() => basicInfo.name && handleNextClick(basicInfo)}
      >
        <Text style={styles.nextButtonText}>next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    position: "relative",
    zIndex: 0,
    paddingTop: 20,
  },
  imageWrapper: {
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: "100%",
    borderRadius: 20,
  },
  replaceBtn: {
    marginTop: 20,
    marginBottom: 20,
    borderColor: "#08193280",
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 10,
    textTransform: "capitalize",
    width: "50%",
    textAlign: "center",
  },
  replaceText: {
    ...globalStyles.btnText,
    color: COLORS.primary,
    textAlign: "center",
  },
  inputWrapper: {
    marginBottom: 20,
    position: "relative",
    zIndex: 1,
  },
  label: {
    ...globalStyles.btnText,
    color: "#888",
    marginBottom: 10,
    textTransform: "lowercase",
    position: "absolute",
    top: -7,
    left: 15,
    backgroundColor: "#F8FBFF", // Light background matching your input
    paddingHorizontal: 5,
    zIndex: 1,
    fontSize: 12,
  },

  normalLabel: {
    ...globalStyles.btnText,
    color: "#888",
    marginBottom: 10,
    textTransform: "lowercase",
  },

  titleWrapper: {
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 20,
    position: "relative",
    borderRadius: 10,
    paddingHorizontal: 15,
    width: "100%",
    minHeight: 50,
    paddingVertical: 10,
  },

  titleInput: {
    fontSize: globalStyles.btnText.fontSize,
    fontFamily: globalStyles.btnText.fontFamily,
    color: COLORS.primary,
    height: 30,
  },

  input: {
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: globalStyles.btnText.fontSize,
    fontFamily: globalStyles.btnText.fontFamily,
    height: "auto",
    color: COLORS.primary,
    minHeight: 50,
    borderWidth: 1,
    borderColor: "#ddd",
    width: "100%",
  },
  tagsWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 5,
  },
  tag: {
    backgroundColor: "#000",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginRight: 5,
    marginTop: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "auto",
  },
  removeTag: {
    color: "#fff",
    height: 15,
    width: 15,
    marginLeft: 5,
  },
  tagText: {
    ...globalStyles.btnText,
    color: "#fff",
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  radioButtonOuter: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: "#000",
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  radioButtonInner: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#000",
  },
  locationText: {
    fontSize: globalStyles.btnText.fontSize,
    fontFamily: globalStyles.btnText.fontFamily,
    color: "#333",
    marginRight: 10,
    color: COLORS.primary,
  },
  hereText: {
    fontSize: globalStyles.btnText.fontSize,
    fontFamily: globalStyles.btnText.fontFamily,
    color: COLORS.primary,
  },
  addLocation: {
    marginTop: 5,
  },
  addLocationText: {
    fontSize: globalStyles.btnText.fontSize,
    fontFamily: globalStyles.btnText.fontFamily,
    color: COLORS.primary,
  },
  socialRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    height: 50,
    color: COLORS.primary,
    paddingRight: 0,
  },
  socialIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
    resizeMode: "contain",
  },

  socialIconRemove: {
    height: 50,
    width: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#081932",
    borderRadius: 10,
  },
  socialInput: {
    flex: 1,
    fontSize: globalStyles.btnText.fontSize,
    fontFamily: globalStyles.btnText.fontFamily,
    color: COLORS.primary,
    height: "100%",
  },
  nextButton: {
    marginTop: 20,
    backgroundColor: "#081932",
    paddingVertical: 20,
    borderRadius: 15,
    alignItems: "center",
  },

  nextButtonDisabled: {
    opacity: 0.5,
    pointerEvents: "none",
  },

  nextButtonText: {
    ...globalStyles.paragraph,
    color: COLORS.white,
    textTransform: "capitalize",
  },

  errors: {
    color: "red",
    fontSize: 12,
    marginTop: 5,
    marginLeft: 10,
  },
  dropdown: {
    marginTop: 4,
    borderWidth: 1,
    borderColor: "#1e90ff",
    borderRadius: 6,
    maxHeight: 200,
    backgroundColor: "white",
    position: "absolute",
    width: "100%",
    zIndex: 1000,
    top: 54,
  },
  dropdownItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: "transparent",
    marginBottom: 5,
  },
  itemText: {
    color: "#3F3F3F",
    ...globalStyles.paragraph,
    fontSize: 12,
  },
  emptyText: {
    padding: 12,
    fontStyle: "italic",
    color: "#999",
  },
});

export default BasicInfo;

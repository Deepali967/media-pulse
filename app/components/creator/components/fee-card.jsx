import { globalStyles } from "@/assets/typography/typography";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

const FeeCardComponent = ({ data, handleNextClick }) => {
  const tabs = Object.keys(data);
  const [activeTabKey, setActiveTabKey] = useState(tabs[0]);
  const [feeCardContent, setFeeCardContent] = useState(data);
  const [errors, setErrors] = useState({}); // Track errors per field

  const activeTab = feeCardContent[activeTabKey];
  const activeFieldsObject = activeTab?.fields?.[0] || {};

  const handleChange = (field, value) => {
    // Remove non-digit characters
    const numericValue = value.replace(/[^0-9]/g, "");
    const numberValue = Number(numericValue);

    // Validate number range
    let errorMessage = "";
    if (numericValue !== "") {
      if (numberValue < 0 || numberValue > 9999999) {
        errorMessage = "range to be 0 and 9,999,999";
      }
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: errorMessage,
    }));

    // Update value only if valid or empty
    if (numericValue === "" || (numberValue >= 0 && numberValue <= 9999999)) {
      setFeeCardContent((prevContent) => {
        const updatedContent = { ...prevContent };
        updatedContent[activeTabKey].fields[0][field].value = numericValue;
        return updatedContent;
      });
    }
  };

  const getHasError = (field) => {
    return Object.values(errors).some((error) => error !== "");
  };

  const handleUpdate = () => {
    // Optionally prevent update if there are error
    if (getHasError()) {
      return;
    }

    handleNextClick(feeCardContent);
  };

  return (
    <View style={styles.container}>
      <ScrollView keyboardShouldPersistTaps="handled" style={styles.formContainer}>
        {Object.entries(activeFieldsObject).map(
          ([fieldKey, fieldData], index) => (
            <View key={index} style={styles.inputRow}>
              <View style={{ flex: 1, ...styles.inputRow }}>
                <Text style={styles.label}>{fieldData.label}</Text>
                <View
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-end",
                    width: "50%",
                  }}
                >
                  <TextInput
                    style={styles.input}
                    value={fieldData.value ?? ""}
                    onChangeText={(text) => handleChange(fieldKey, text)}
                    placeholder=""
                    placeholderTextColor="#ccc"
                    keyboardType="numeric"
                  />
                  {errors[fieldKey] ? (
                    <Text style={styles.errorText}>{errors[fieldKey]}</Text>
                  ) : null}
                </View>
              </View>
            </View>
          ),
        )}

        <TouchableOpacity
          style={[styles.updateButton, getHasError() ? { opacity: 0.5 } : {}]}
          onPress={handleUpdate}
        >
          <Text style={[styles.updateButtonText]}>Update</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default FeeCardComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  tabButton: {
    flex: 1,
    backgroundColor: "#E7ECF3",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginRight: 10,
  },
  activeTab: {
    backgroundColor: "#0A122A",
  },
  tabText: {
    color: "#0A122A",
    fontWeight: "400",
    ...globalStyles.paragraph,
    fontSize: 14,
  },
  activeTabText: {
    color: "#FFFFFF",
  },
  formContainer: {
    flex: 1,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    justifyContent: "space-between",
  },
  label: {
    color: "#081932",
    ...globalStyles.paragraph,
    fontSize: 14,
  },
  input: {
    backgroundColor: "#1313130D",
    borderRadius: 10,
    height: 40,
    width: "75%",
    paddingHorizontal: 10,
    color: "#081932",
    ...globalStyles.paragraph,
    fontSize: 14,
  },
  updateButton: {
    marginTop: 10,
    backgroundColor: "#081932",
    paddingVertical: 20,
    borderRadius: 15,
    alignItems: "center",
  },
  updateButtonText: {
    color: "#FFFFFF",
    ...globalStyles.paragraph,
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 5,
  },
});

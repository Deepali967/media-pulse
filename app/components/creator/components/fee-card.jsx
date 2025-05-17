import { feecardContent as initialFeeCardContent } from '@/assets/constants/constants';
import { globalStyles } from '@/assets/typography/typography';
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const FeeCardComponent = ({data, handleNextClick }) => {
  const tabs = Object.keys(data);
  const [activeTabKey, setActiveTabKey] = useState(tabs[0]);
  const [feeCardContent, setFeeCardContent] = useState(data);

  const activeTab = feeCardContent[activeTabKey];
  const activeFieldsObject = activeTab?.fields?.[0] || {};

  const handleChange = (field, value) => {
    setFeeCardContent((prevContent) => {
      const updatedContent = { ...prevContent };
      // Update the specific field's value inside the active tab
      updatedContent[activeTabKey].fields[0][field].value = value;
      return updatedContent;
    });
  };

  const handleUpdate = () => {
    handleNextClick(feeCardContent); // or just call handleNextClick
  };

  return (
    <View style={styles.container}>
      {/* Tabs */}
      <View style={styles.tabContainer}>
        {tabs.map((tab, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.tabButton, activeTabKey === tab && styles.activeTab]}
            onPress={() => setActiveTabKey(tab)}
          >
            <Text style={[styles.tabText, activeTabKey === tab && styles.activeTabText]}>
              {feeCardContent[tab].title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Form */}
      <ScrollView style={styles.formContainer}>
        {Object.entries(activeFieldsObject).map(([fieldKey, fieldData], index) => (
          <View key={index} style={styles.inputRow}>
            <Text style={styles.label}>{fieldData.label}</Text>
            <TextInput
              style={styles.input}
              value={fieldData.value ?? ''}
              onChangeText={(text) => handleChange(fieldKey, text)}
              placeholder=""
              placeholderTextColor="#ccc"
            />
          </View>
        ))}

        {/* Update Button */}
        <TouchableOpacity style={styles.updateButton} onPress={handleUpdate}>
          <Text style={styles.updateButtonText}>Update</Text>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  tabButton: {
    flex: 1,
    backgroundColor: '#E7ECF3',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginRight: 10
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
  formContainer: {
    flex: 1,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    justifyContent: 'space-between',
  },
  label: {
    color: '#081932',
    flex: 1,
    ...globalStyles.paragraph,
    fontSize: 14,
  },
  input: {
    backgroundColor: '#1313130D',
    borderRadius: 10,
    height: 40,
    width: '35%',
    paddingHorizontal: 10,
    color: '#081932',
    ...globalStyles.paragraph,
    fontSize: 14,
  },
  updateButton: {
    marginTop: 30,
    backgroundColor: '#0A122A',
    paddingVertical: 20,
    borderRadius: 15,
    alignItems: 'center',
  },
  updateButtonText: {
    color: '#FFFFFF',
    ...globalStyles.paragraph,
    fontWeight: '600',
  },
});

import { feecardContent } from '@/assets/constants/constants';
import { globalStyles } from '@/assets/typography/typography';
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const FeeCardComponent = ({handleNextClick}) => {
  const [formData, setFormData] = useState({});
  const tabs = Object.keys(feecardContent);
  const [activeTab, setActiveTab] = useState(feecardContent[tabs[0]]);

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  useEffect(() => {
    const initialData = {};
    activeTab?.fields?.forEach((item) => {
      initialData[item.field] = '';
    });
    setFormData(initialData);

  }, [activeTab])


  useEffect(() => {
    setActiveTab(feecardContent[tabs[0]]);
  },[])

  return (
    <View style={styles.container}>
      {/* Tabs */}
      <View style={styles.tabContainer}>
        {tabs.map((tab, index) => (
            <TouchableOpacity
                key={index}
                style={[styles.tabButton, activeTab.title === feecardContent[tab].title && styles.activeTab]}
                onPress={() => setActiveTab(feecardContent[tab])}
            >
                <Text style={[styles.tabText, activeTab.title === feecardContent[tab].title && styles.activeTabText]}>
                {feecardContent[tab].title}
                </Text>
            </TouchableOpacity>
            ))}
      </View>

      {/* Form */}
      <ScrollView style={styles.formContainer}>
        {activeTab?.fields?.map((item, index) => (
          <View key={index} style={styles.inputRow}>
            <Text style={styles.label}>{item.label}</Text>
            <TextInput
              style={styles.input}
              value={formData[item.field] ?? ''}
              onChangeText={(text) => handleChange(item.field, text)}
              placeholder=""
              placeholderTextColor="#ccc"
            />
          </View>
        ))}

        {/* Update Button */}
        <TouchableOpacity style={styles.updateButton} onPress={() => handleNextClick()}>
          <Text style={styles.updateButtonText}>update</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default FeeCardComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
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
    backgroundColor: '#E7ECF3',
    borderRadius: 10,
    height: 40,
    width: '45%',
    paddingHorizontal: 10,
    color: '#081932',
    ...globalStyles.paragraph,
    fontSize: 14,
  },
  updateButton: {
    marginTop: 30,
    backgroundColor: '#0A122A',
    paddingVertical: 15,
    borderRadius: 15,
    alignItems: 'center',
  },
  updateButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
});

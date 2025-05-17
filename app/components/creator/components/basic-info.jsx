import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView,TouchableWithoutFeedback } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // For radio buttons & close icons (optional)
import { globalStyles } from '@/assets/typography/typography';
import { COLORS } from '@/assets/typography/colors';
import { KeyboardAvoidingView,Platform } from 'react-native';

const BasicInfo = ({ data, handleNextClick }) => {
  const [basicInfo, setBasicInfo] = useState(data);
  
  const updateBasicInfo = (key, value) => {
    setBasicInfo((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  return (
    <KeyboardAvoidingView  style={{ flex: 1 }}
    behavior="height"
    keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 0}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <ScrollView  keyboardShouldPersistTaps="handled" contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      
      {/* Image */}
      <View style={styles.imageWrapper}>
        <Image 
          source={require('../../../../assets/images/creator/sample.png')}
          style={styles.profileImage}
        />
        <TouchableOpacity style={styles.replaceBtn}>
          <Text style={styles.replaceText}>replace</Text>
        </TouchableOpacity>
      </View>

      {/* Name */}
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter name"
          value={basicInfo['name']}
          onChangeText={(e) => updateBasicInfo('name', e)}
        />
      </View>

      {/* Titles */}
      <View style={styles.inputWrapper}>
        <Text style={styles.normalLabel}>title</Text>
        <View style={styles.tagsWrapper}>
          {basicInfo['titles'].map((title, index) => (
            <View key={index} style={styles.tag}>
              <Text style={styles.tagText}>{title}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Location */}
      <View style={styles.inputWrapper}>
        <Text style={styles.normalLabel}>location</Text>
        {basicInfo['locations'].map((loc, index) => (
          <TouchableOpacity key={index} style={styles.locationRow} onPress={() => updateBasicInfo('currentLocation', loc)}>
            <View style={styles.radioButtonOuter}>
              {basicInfo?.currentLocation === loc && <View style={styles.radioButtonInner} />}
            </View>
            <Text style={styles.locationText}>{loc}</Text>
            {basicInfo?.currentLocation === loc && <Text style={styles.hereText}>i'm here</Text>}
          </TouchableOpacity>
        ))}
      </View>

      {/* Bio */}
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>bio</Text>
        <TextInput
          style={[styles.input, { height: 85, paddingVertical: 15 }]}
          value={basicInfo['bio']}
          onChangeText={(e) => updateBasicInfo('bio', e)}
          multiline
        />
      </View>

      {/* Socials */}
      <View style={styles.socialRow}>
        <Image source={require('../../../../assets/images/creator/instagram.png')} style={styles.socialIcon} />
        <TextInput
          style={styles.socialInput}
          value={basicInfo['instagram']}
          onChangeText={(e) => updateBasicInfo('instagram',e)}
        />
        {basicInfo['instagram'] ? <TouchableOpacity onPress={() => updateBasicInfo('instagram','')}>
          <Ionicons name="close" size={20} color="#000" />
        </TouchableOpacity> : null}
      </View>

      <View style={styles.socialRow}>
        <Image source={require('../../../../assets/images/creator/youtube.png')} style={styles.socialIcon} />
        <TextInput
          style={styles.socialInput}
          value={basicInfo['youtube']}
          onChangeText={(e) => updateBasicInfo('youtube', e)}
        />
       {basicInfo['youtube'] ? <TouchableOpacity onPress={() => updateBasicInfo('youtube','')}>
          <Ionicons name="close" size={20} color="#000" />
        </TouchableOpacity> : null}
      </View>

      {/* Next Button */}
      <TouchableOpacity style={styles.nextButton} onPress={() => handleNextClick(basicInfo)}>
        <Text style={styles.nextButtonText}>next</Text>
      </TouchableOpacity>

    </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};


const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 50,
  },
  imageWrapper: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: '100%',
    borderRadius: 20,
  },
  replaceBtn: {
    marginTop: 10,
    borderColor: COLORS.primary,
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  replaceText: {
    ...globalStyles.btnText,
    color: COLORS.primary,
  },
  inputWrapper: {
    marginBottom: 20,
    position: 'relative',
  },
  label: {
    ...globalStyles.btnText,
    color: '#888',
    marginBottom: 10,
    textTransform: 'lowercase',
    position: 'absolute',
    top: -7,
    left: 15,
    backgroundColor: '#F8FBFF', // Light background matching your input
    paddingHorizontal: 5,
    zIndex: 1,
    fontSize: 12,
  },

  normalLabel : {
    ...globalStyles.btnText,
    color: '#888',
    marginBottom: 10,
    textTransform: 'lowercase',
  },

  input: {
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: globalStyles.paragraph.fontSize,
    fontFamily: globalStyles.paragraph.fontFamily,
    borderWidth: 1,
    borderColor: '#ddd',
    height: 50,
    color: COLORS.primary,
  },
  tagsWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 5,
  },
  tag: {
    backgroundColor: '#000',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginRight: 5,
    marginTop: 5,
  },
  tagText: {
    ...globalStyles.btnText,
    color: '#fff',
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  radioButtonOuter: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: '#000',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioButtonInner: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#000',
  },
  locationText: {
    fontSize: globalStyles.paragraph.fontSize,
    fontFamily: globalStyles.paragraph.fontFamily,
    color: '#333',
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
    fontSize: globalStyles.paragraph.fontSize,
    fontFamily: globalStyles.paragraph.fontFamily,
    color: COLORS.primary,
  },
  socialRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    height: 50,
    color: COLORS.primary,
  },
  socialIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
    resizeMode: 'contain',
  },
  socialInput: {
    flex: 1,
    fontSize: globalStyles.paragraph.fontSize,
    fontFamily: globalStyles.paragraph.fontFamily,
    color: COLORS.primary,
  },
  nextButton: {
    marginTop: 20,
    backgroundColor: '#081932',
    paddingVertical: 15,
    borderRadius: 15,
    alignItems: 'center',
  },
  nextButtonText: {
    ...globalStyles.notificationText,
    color: COLORS.white,
    textTransform: 'capitalize',
  },
});

export default BasicInfo;

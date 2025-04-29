import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // For radio buttons & close icons (optional)
import { globalStyles } from '@/assets/typography/typography';

const BasicInfo = ({ data, handleNextClick }) => {
  const [basicInfo, setBasicInfo] = useState(data);
  
  const updateBasicInfo = (key, value) => {
    setBasicInfo((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      
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
        <Text style={styles.label}>title</Text>
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
        <Text style={styles.label}>location</Text>
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
          style={[styles.input, { height: 80 }]}
          placeholder="Write something..."
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
    width: 280,
    height: 300,
    borderRadius: 20,
  },
  replaceBtn: {
    marginTop: 10,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 4,
    paddingHorizontal: 20,
  },
  replaceText: {
    ...globalStyles.btnText,
    color: '#000',
  },
  inputWrapper: {
    marginBottom: 20,
  },
  label: {
    ...globalStyles.btnText,
    color: '#888',
    marginBottom: 5,
    textTransform: 'lowercase',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: globalStyles.paragraph.fontSize,
    fontFamily: globalStyles.paragraph.fontFamily,
    borderWidth: 1,
    borderColor: '#ddd',
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
    borderRadius: 15,
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
  },
  hereText: {
    fontSize: globalStyles.btnText.fontSize,
    fontFamily: globalStyles.btnText.fontFamily,
    color: '#666',
  },
  addLocation: {
    marginTop: 5,
  },
  addLocationText: {
    fontSize: globalStyles.paragraph.fontSize,
    fontFamily: globalStyles.paragraph.fontFamily,
    color: '#007BFF',
  },
  socialRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
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
    color: '#000',
  },
  nextButton: {
    marginTop: 20,
    backgroundColor: '#000',
    paddingVertical: 15,
    borderRadius: 15,
    alignItems: 'center',
  },
  nextButtonText: {
    ...globalStyles.notificationText,
    color: '#fff',
    textTransform: 'lowercase',
  },
});

export default BasicInfo;

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';

const BasicInfo = (props) => {
  const [name, setName] = useState('');
  const [titles, setTitles] = useState(['model', 'skincare enthusiast']);
  const [location, setLocation] = useState('chandigarh');
  const [bio, setBio] = useState('');
  const [instagram, setInstagram] = useState('@karina_bedi');
  const [youtube, setYoutube] = useState('karinabedi');

  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      
      {/* Image Upload Section */}
      <View style={styles.imageContainer}>
        <Image 
          source={require("../../../../assets/images/creator/sample.png")} 
          style={styles.image}
        />
        <TouchableOpacity style={styles.replaceButton}>
          <Text style={styles.replaceButtonText}>Replace</Text>
        </TouchableOpacity>
      </View>

      {/* Name */}
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />

      {/* Title */}
      <View style={styles.titleContainer}>
        {titles.map((title, index) => (
          <View key={index} style={styles.titleTag}>
            <Text style={styles.titleText}>{title}</Text>
          </View>
        ))}
      </View>

      {/* Location */}
      <View style={styles.locationContainer}>
        <TouchableOpacity style={styles.locationButton}>
          <Text style={styles.locationText}>{location}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addLocationButton}>
          <Text style={styles.addLocationText}>+ Add</Text>
        </TouchableOpacity>
      </View>

      {/* Bio */}
      <TextInput
        style={[styles.input, { height: 100 }]}
        placeholder="Bio"
        value={bio}
        onChangeText={setBio}
        multiline
      />

      {/* Socials */}
      <View style={styles.socialContainer}>
        <View style={styles.socialRow}>
          <Image source={require('../../../../assets/images/creator/instagram.png')} style={styles.socialIcon} />
          <TextInput
            style={styles.socialInput}
            value={instagram}
            onChangeText={setInstagram}
          />
        </View>

        <View style={styles.socialRow}>
          <Image source={require('../../../../assets/images/creator/youtube.png')} style={styles.socialIcon} />
          <TextInput
            style={styles.socialInput}
            value={youtube}
            onChangeText={setYoutube}
          />
        </View>
      </View>

      {/* Next Button */}
      <TouchableOpacity style={styles.nextButton} onPress={() => {
        console.log('Next clicked:');
        props?.handleNextClick()
      }}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { 
    padding: 20, 
    paddingBottom: 40, 
    backgroundColor: '#fff',
    overflowY: 'scroll',
    height: '100%',
    width: '100%',
  },
  
  imageContainer: { alignItems: 'center', marginBottom: 20, width:'100%' },
  image: { width: 250, height: 200, borderRadius: 10 },
  replaceButton: { marginTop: 10, paddingVertical: 5, paddingHorizontal: 15, backgroundColor: '#eee', borderRadius: 5 },
  replaceButtonText: { color: '#333' },

  input: { 
    borderWidth: 1, borderColor: '#ccc', borderRadius: 10,
    padding: 10, marginBottom: 15, fontSize: 16
  },

  titleContainer: { flexDirection: 'row', flexWrap: 'wrap', marginBottom: 15 },
  titleTag: { backgroundColor: '#000', paddingVertical: 5, paddingHorizontal: 10, borderRadius: 15, marginRight: 5, marginBottom: 5 },
  titleText: { color: '#fff', fontSize: 14 },

  locationContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 15 },
  locationButton: { marginRight: 10 },
  locationText: { fontSize: 16, color: '#333' },
  addLocationButton: { padding: 5 },
  addLocationText: { color: '#007BFF', fontSize: 16 },

  socialContainer: { marginBottom: 20 },
  socialRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  socialIcon: { fontSize: 20 },
  socialInput: { flex: 1, borderBottomWidth: 1, borderBottomColor: '#ccc', fontSize: 16 },

  nextButton: { backgroundColor: '#000', padding: 15, borderRadius: 10, alignItems: 'center', marginTop: 10 },
  nextButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});

export default BasicInfo;
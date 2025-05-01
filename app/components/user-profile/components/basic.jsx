import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const BasicInfo = ({ data }) => {
const {name, titles, location, locations, bio} = data || {};
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../../assets/images/creator/sample.png')} // Replace with real image URI
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.titles}>{titles?.join(', ')}</Text>

      <View style={styles.locationContainer}>
        {locations?.map((loc) => (
          <TouchableOpacity
            key={loc}
            style={[
              styles.locationButton,
              loc === location ? styles.activeLocation : styles.inactiveLocation,
            ]}
          >
            <Text
              style={[
                styles.locationText,
                loc === location ? styles.activeText : styles.inactiveText,
              ]}
            >
              {loc}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.bio}>{bio}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: 'center', paddingHorizontal:30 },
  image: { width: '100%', height: 250, borderRadius: 16 },
  name: { fontSize: 18, fontWeight: 'bold', color: '#0A1B31', marginTop: 16 },
  titles: { fontSize: 14, color: '#6B7280' },
  locationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginVertical: 16,
    gap: 8,
  },
  locationButton: { paddingHorizontal: 16, paddingVertical: 4, borderRadius: 16 },
  activeLocation: { backgroundColor: '#0A1B31' },
  inactiveLocation: { backgroundColor: '#F1F5F9' },
  locationText: { fontSize: 14 },
  activeText: { color: '#FFFFFF' },
  inactiveText: { color: '#0A1B31' },
  bio: { textAlign: 'center', fontSize: 12, color: '#6B7280', marginBottom: 16 },
});

export default BasicInfo;
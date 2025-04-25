import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const fashionCategories = [
  "streetwear", "luxury fashion", "y2k", "diy", "haute", "bridal clothing",
  "vintage", "boho", "formal wear", "beach wear", "mens wear", "performance wear", "kids fashion"
];

const beautyCategories = [
  "premium beauty", "makeup artist", "vfx makeup", "body care", "haircare", "skincare",
  "nailcare", "deromatologist", "nailart", "beauty appliance", "product review", "fragrances"
];

const lifestyleCategories = [
  "travel blogger", "chef", "travel photographer", "food blogger", "mom blogger",
  "athlete", "fitness trainer", "diy decor", "finance", "gardening", "handcrafts"
];

const CategoriesScreen = ({ navigation }) => {
  const [selectedFashion, setSelectedFashion] = useState([]);
  const [selectedBeauty, setSelectedBeauty] = useState([]);
  const [selectedLifestyle, setSelectedLifestyle] = useState([]);

  const toggleSelection = (category, type) => {
    if (type === 'fashion') {
      setSelectedFashion(prev => 
        prev.includes(category) ? prev.filter(item => item !== category) : [...prev, category]
      );
    } else if (type === 'beauty') {
      setSelectedBeauty(prev => 
        prev.includes(category) ? prev.filter(item => item !== category) : [...prev, category]
      );
    } else if (type === 'lifestyle') {
      setSelectedLifestyle(prev => 
        prev.includes(category) ? prev.filter(item => item !== category) : [...prev, category]
      );
    }
  };

  const renderCategories = (data, type, selected) => (
    <View style={styles.section}>
      {data.map((item) => (
        <TouchableOpacity 
          key={item}
          style={[styles.categoryButton, selected.includes(item) && styles.selectedCategory]}
          onPress={() => toggleSelection(item, type)}
        >
          <Text style={[styles.categoryText, selected.includes(item) && styles.selectedCategoryText]}>
            {item}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.header}>Fashion 0{selectedFashion.length}</Text>
        {renderCategories(fashionCategories, 'fashion', selectedFashion)}
        
        <Text style={styles.header}>Beauty 0{selectedBeauty.length}</Text>
        {renderCategories(beautyCategories, 'beauty', selectedBeauty)}
        
        <Text style={styles.header}>Lifestyle 0{selectedLifestyle.length}</Text>
        {renderCategories(lifestyleCategories, 'lifestyle', selectedLifestyle)}
      </ScrollView>

      <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('RecentWork')}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  header: { fontSize: 18, fontWeight: 'bold', marginTop: 20, marginBottom: 10 },
  section: { flexDirection: 'row', flexWrap: 'wrap' },
  categoryButton: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 15,
    margin: 5,
  },
  selectedCategory: {
    backgroundColor: '#0a0a23', // dark navy background
    borderColor: '#0a0a23',
  },
  categoryText: { color: '#000' },
  selectedCategoryText: { color: '#fff' },
  nextButton: {
    backgroundColor: '#0a0a23',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginVertical: 20,
  },
  nextButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});

export default CategoriesScreen;

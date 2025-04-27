import { globalStyles } from '@/assets/typography/typography';
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

const CategoriesScreen = ({ handleNextClick }) => {
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
  
    const renderCategorySection = (title, categories, type, selectedItems) => {
      return (
          <View style={styles.categorySection}>
            <View style={styles.title}>
            <Text>{title}</Text> 
            <Text>{selectedItems.length.toString().padStart(2, '0') }</Text>
            </View>

          <View>
            {renderCategories(categories, type, selectedItems)}
          </View>  
          </View>
      );
    };
  
    return (
      <View style={styles.container}>
        {renderCategorySection('Fashion', fashionCategories, 'fashion', selectedFashion)}
        {renderCategorySection('Beauty', beautyCategories, 'beauty', selectedBeauty)}
        {renderCategorySection('Lifestyle', lifestyleCategories, 'lifestyle', selectedLifestyle)}
  
        <TouchableOpacity style={styles.nextButton} onPress={handleNextClick}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff'},

  categorySection: { fontSize: 18,marginBottom: 20, width: '100%',...globalStyles.paragraph},

  title :{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },

  section: { flexDirection: 'row', flexWrap: 'wrap' },

  categoryButton: {
    borderWidth: 1,
    borderColor: '#081932',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 15,
    margin: 5,
  },

  selectedCategory: {
    backgroundColor: '#081932', // dark navy background
    borderColor: '#081932',
  },
  categoryText: { color: '#091C38', ...globalStyles.btnText, fontSize: 12 },
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

import { globalStyles } from '@/assets/typography/typography';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const CategoriesScreen = ({ data, handleNextClick }) => {
  const [categories, setCategories] = useState(data);

  const handleCategorySelect = (category, title) => {
    const updatedCategories = { ...categories };
    const selectedItems = updatedCategories[category].map((item) => {
      if (item.title === title) {
        return { ...item, selected: !item.selected };
      }
      return item;
    });
    updatedCategories[category] = selectedItems;
    setCategories(updatedCategories);
  }

  const getSelectedCount = (category) => {
    const selectedItems = categories[category].filter(item => item.selected);
    return selectedItems.length.toString().padStart(2, '0');
  }
  
  const renderCategorySection = (categoryData, key) => {
    return (
          <View style={styles.categorySection}>
            <View style={styles.title}>
            <Text style={styles.count}>{key}</Text> 
            <Text style={styles.count} >{getSelectedCount(key)}</Text>
            </View>

        <View style={styles.section}>
          {categoryData.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.categoryButton, item.selected && styles.selectedCategory]}
              onPress={() => handleCategorySelect(key, item.title)}
            >
              <Text style={[styles.categoryText, item.selected && styles.selectedCategoryText]}>
                {item.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  }

    return (
      <View style={styles.container}>
        {
          Object.keys(categories).map((key) => {
            const categoryData = categories[key];
            const selectedItems = categoryData.selectedItems || [];
            return (
              <View key={key}>
                {renderCategorySection(categoryData, key)}
              </View>
            );
          })
        }
        <TouchableOpacity style={styles.nextButton} onPress={() => handleNextClick(categories)}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    );
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 20, paddingVertical: 20 },

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

  count: {
    color: "#081932",
    ...globalStyles.paragraph,
    fontSize: 14,
  },

  selectedCategory: {
    backgroundColor: '#081932', // dark navy background
    borderColor: '#081932',
  },
  categoryText: { color: '#091C38', ...globalStyles.btnText, fontSize: 12, letterSpacing:1 },
  selectedCategoryText: { color: '#fff' },
  nextButton: {
    backgroundColor: '#081932',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    marginVertical: 20,
  },
  nextButtonText: { color: '#fff', fontWeight: 'bold', ...globalStyles.paragraph, },
});

export default CategoriesScreen;

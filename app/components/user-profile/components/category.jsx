import { globalStyles } from '@/assets/typography/typography';
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';


const CategoriesAccordion = ({categoryData}) => {
  return (
    <ScrollView style={styles.container}>
      {Object.keys(categoryData).map((category) => {

        const selectedItems = categoryData[category].filter(item => item.selected);
        
        return (
          <View key={category} style={styles.section}>
            <Text style={styles.title}>{category}</Text>
            <View style={styles.tags}>
              {selectedItems.length > 0 ? (
                selectedItems.map((item) => (
                  <View key={item.title} style={styles.tag}>
                    <Text style={styles.tagText}>{item.title}</Text>
                  </View>
                ))
              ) : (
                <Text style={styles.noSelection}>No selections</Text>
              )}
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#f6f8fa',
  },
  section: {
    marginBottom: 24,
  },
  title: {
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
    textTransform: 'capitalize',
    ...globalStyles.paragraph,
    fontSize: 13,
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tag: {
    backgroundColor: '#e0e0e0',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginRight: 8,
    marginBottom: 8,
    ...globalStyles.paragraph,
    fontSize: 16,
  },
  tagText: {
    fontSize: 14,
    color: '#1a1a1a',
  },
  noSelection: {
    color: '#888',
    ...globalStyles.paragraph,
    fontSize: 14,
  },
});

export default CategoriesAccordion;

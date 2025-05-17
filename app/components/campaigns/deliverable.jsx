import { globalStyles } from '@/assets/typography/typography';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DeliverablesTab = ({campaign}) => {
  const deliverables = campaign?.campaignDetails?.deliverables || []

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>total deliverables</Text>
        <View style={styles.counterBox}>
          <Text style={styles.counterText}>{deliverables.length.toString().padStart(2, '0')}</Text>
        </View>
      </View>

      {deliverables.map((item, index) => (
        <View 
          key={index} 
          style={[
            styles.itemContainer
          ]}
        >
          <Text style={styles.titleText}>{item.title}</Text>
          <Text style={styles.priceText}>{item.price}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    color: '#555',
    ...globalStyles.paragraph,
    fontSize: 14,
    fontWeight: 600,
    textTransform: 'capitalize',
  },
  counterBox: {
    backgroundColor: '#091C380D',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  counterText: {
    ...globalStyles.notificationText,
    fontSize: 14,
    fontWeight: 600
  },
  itemContainer: {
    backgroundColor: '#08193205',
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#0819321A',
  },
  lastItemBorder: {
    borderWidth: 1,
    borderColor: '#60A5FA', // light blue border
  },
  titleText: {
    ...globalStyles.paragraph,
    fontSize: 14,
    color: "#081932"
  },
  priceText: {
    ...globalStyles.paragraph,
    fontSize: 14,
    color: "#081932"
  },
});

export default DeliverablesTab;

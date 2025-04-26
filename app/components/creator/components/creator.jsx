import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import BasicInfo from './basic-info';
import Categories from './category';

const Creator = () => {
  const [activeTab, setActiveTab] = useState('BasicInfo');

  const renderContent = () => {
    switch (activeTab) {
      case 'BasicInfo':
        return <BasicInfo />;
      case 'Categories':
        return <Categories />;
    //   case 'RecentWork':
    //     return <RecentWork />;
      default:
        return <BasicInfo />;
    }
  };

  return (
    <View style={styles.container}>
      
      {/* Tab List */}
      <View style={styles.tabContainer}>
        <TouchableOpacity 
          style={[styles.tabButton, activeTab === 'BasicInfo' && styles.activeTab]}
          onPress={() => setActiveTab('BasicInfo')}
        >
          <Text style={[styles.tabText, activeTab === 'BasicInfo' && styles.activeTabText]}>
            Basic Info
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.tabButton, activeTab === 'Categories' && styles.activeTab]}
          onPress={() => setActiveTab('Categories')}
        >
          <Text style={[styles.tabText, activeTab === 'Categories' && styles.activeTabText]}>
            Categories
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.tabButton, activeTab === 'RecentWork' && styles.activeTab]}
          onPress={() => setActiveTab('RecentWork')}
        >
          <Text style={[styles.tabText, activeTab === 'RecentWork' && styles.activeTabText]}>
            Recent Work
          </Text>
        </TouchableOpacity>
      </View>

      {/* Tab Content */}
      <View style={styles.contentContainer}>
        {renderContent()}
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  tabContainer: { flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#f0f0f0' },
  tabButton: { paddingVertical: 10, paddingHorizontal: 20 },
  tabText: { fontSize: 16, color: '#555' },
  activeTab: { borderBottomWidth: 2, borderBottomColor: '#000' },
  activeTabText: { fontWeight: 'bold', color: '#000' },
  contentContainer: { flex: 1, padding: 20 },
});

export default Creator;

import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import BasicInfo from './basic-info';
import Categories from './category';
import FeeCardComponent from './fee-card';

import { globalStyles } from '@/assets/typography/typography';
import { tabs } from '@/assets/constants/constants';

import { useNavigation } from '@react-navigation/native';
import localStorageService from '@/app/service/localstorage.service';

const Creator = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const navigation = useNavigation();
  const localstorageService = localStorageService()

  const renderContent = () => {
    switch (activeTab.route) {
      case 'BasicInfo':
        return <BasicInfo handleNextClick={() => handleNavigation('next')}/>;
      case 'Categories':
        return <Categories handleNextClick={() => handleNavigation('next')} />;

      case 'FeeCard':
        return <FeeCardComponent handleNextClick={() => handleNavigation('next')} />;

      default:
        return <BasicInfo handleNextClick={() => handleNavigation('next')} />;
        
    }
  };

  const handleNavigation = (type) => {
    debugger;
    switch(type){
      case 'next' :
        if(activeTab.id === 2) {
          localstorageService.setStoreItem('profileCompletion', true)
          navigation.navigate('DashboardScreen');
          return
        }

        setTabs(tabs[activeTab.id + 1]);
        break;
      
      case 'previous':
        setTabs(tabs[activeTab.id - 1]);
        break;
    }
  }
  
  const setTabs = (tab) => {
    if (activeTab === tab) return;

    setActiveTab(tab);
  };

  const handleSkip = () => {
    localstorageService.setStoreItem('profileCompletion', true)
    navigation.navigate('DashboardScreen');
  }

  useEffect(() => {
    setActiveTab(tabs[0]);
  },[])

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => handleNavigation('previous')}>
        <Image
         onPress={() => handleNavigation('previous')}
          source={require('../../../../assets/images/creator/back.png')}
          style={{
            width: 10,
            height: 10,
            visibility: activeTab.id === 0 ? 'hidden' : 'visible',
            pointerEvents: activeTab.id === 0  ? 'none' : 'auto',
          }}
        />
        </TouchableOpacity>
        <Text style={{ color: '#555', ...globalStyles.paragraph,fontSize: 14 }} onPress={() => handleSkip()}>skip</Text>
      </View>

      {/* Tab List */}
      <View style={styles.tabContainer}>
        {
          tabs.map((tab) => (
            <TouchableOpacity
              key={tab.id}
              style={[styles.tabButton, activeTab.id === tab.id && styles.activeTab]}
              onPress={() => setTabs(tab)}
            >
              <Text style={[styles.tabText, activeTab === tab.route && styles.activeTabText]}>
                {tab.text}
              </Text>
            </TouchableOpacity>
          ))
        }
      </View>

      {/* Tab Content */}
      <ScrollView style={styles.contentContainer}>
        {renderContent()}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  container: { flex: 1, backgroundColor: '#fff' },
  tabContainer: { flexDirection: 'row', justifyContent: 'space-around' },
  tabButton: { paddingVertical: 10, paddingHorizontal: 20 },
  tabText: { ...globalStyles.paragraph, fontSize: 14, color: '#091C38'},
  activeTabText: { ...globalStyles.notificationText, fontSize: 14, color: '#091C38', fontWeight: 'bold' },
  contentContainer: { flex: 1, padding: 20 },
});

export default Creator;

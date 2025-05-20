import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, TouchableWithoutFeedback, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
import BasicInfo from './basic-info';
import Categories from './category';
import FeeCardComponent from './fee-card';

import { globalStyles } from '@/assets/typography/typography';
import { tabs } from '@/assets/constants/constants';

import { useNavigation } from '@react-navigation/native';
import localStorageService from '@/app/service/localstorage.service';
import { SafeAreaView } from 'react-native-safe-area-context';

const Creator = () => {
  const [allTabs, setTabs] = useState(tabs)
  const [activeTab, setActiveTab] = useState(allTabs[0]);
  const navigation = useNavigation();
  const localstorageService = localStorageService()

  const [isLoading, setLoading] = useState(true);

  const renderContent = () => {
    switch (activeTab.route) {
      case 'BasicInfo':
        return <BasicInfo data={activeTab.data} handleNextClick={(basicInfo) => handleNavigation(basicInfo, 'next')}/>;
      case 'Categories':
        return <Categories data={activeTab.data} handleNextClick={(categories) => handleNavigation(categories, 'next')} />;

      case 'FeeCard':
        return <FeeCardComponent data={activeTab.data} handleNextClick={(info) => handleNavigation(info, 'next')} />;

      default:
        return <BasicInfo handleNextClick={() => handleNavigation('next')} />;
        
    }
  };

  const handleNavigation = (info, type) => {
    switch (type) {
      case 'next':
        const updatedTabs = allTabs.map((tab) => {
          if (tab.id === activeTab.id) {
            return { ...tab, data: info };
          }
          return tab;
        });

        setTabs(updatedTabs);

        localstorageService.setStoreItem('tabs', updatedTabs);

        if (activeTab.id === 2) {
          localstorageService.setStoreItem('profileCompletion', true);
          navigation.navigate('DashboardScreen');
          return;
        }

        setActiveTab(updatedTabs[activeTab.id + 1]);
        break;

      case 'previous':
        setActiveTab(allTabs[activeTab.id - 1]);
        break;
    }
  };
  const setActiveTabData = (tab) => {
    if(!allTabs[0]?.data?.name){
      return
    } 
    if (activeTab === tab) return;
    setActiveTab(tab);
  };

  const handleSkip = () => {
    localstorageService.setStoreItem('tabs', allTabs)
    localstorageService.setStoreItem('profileCompletion', true)
    navigation.navigate('DashboardScreen');
  }

  useEffect(() => {
    const importTabs = async () => {
      const tabs = await localstorageService.getStoreItem('tabs');

      if (tabs) {
        setTabs(tabs);
        setActiveTab(tabs[0]);
      } else {
        setTabs(allTabs);
        setActiveTab(allTabs[0]);
      }

      setLoading(false);
    };

    importTabs();
  },[])

  return (
      <SafeAreaView style={{ flex: 1, backgroundColor: 'rgba(245, 251, 255, 1)' }}> 
      <TouchableWithoutFeedback onPress={() =>{if (Platform.OS !== 'web') Keyboard.dismiss();}}>
    <KeyboardAvoidingView  style={{ flex: 1 }}
    behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 0}>
   {!isLoading ? <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => handleNavigation('', 'previous')}>
        <Image
         onPress={() => handleNavigation('', 'previous')}
          source={require('../../../../assets/images/creator/back.png')}
          style={{
            width: 62,
            height: 30,
            visibility: activeTab.id === 0 ? 'hidden' : 'visible',
            pointerEvents: activeTab.id === 0  ? 'none' : 'auto',
          }}
        />
        </TouchableOpacity>
        {allTabs[0]?.data?.name && <Text style={{ color: '#555', ...globalStyles.paragraph,fontSize: 14 }} onPress={() => handleSkip()}>skip</Text>}
      </View>

      {/* Tab List */}
      <View style={styles.tabContainer}>
        {
          allTabs.map((tab) => (
            <TouchableOpacity
              key={tab.id}
              style={[styles.tabButton, activeTab.id === tab.id && styles.activeTab]}
              onPress={() => setActiveTabData(tab)}
            >
              <Text style={[styles.tabText, activeTab.id === tab.id && styles.activeTabText]}>
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
    : <View style={{flex:1, backgroundColor:'#fff', justifyContent:'center', alignItems:'center'}}>
        <Text style={{...globalStyles.paragraph, fontSize: 14}}>Loading...</Text>
      </View>}
     </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
    </SafeAreaView> 
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
  container: { flex: 1,  backgroundColor: "rgba(245, 251, 255, 1)" },
  tabContainer: { flexDirection: 'row', justifyContent: 'space-around' },
  tabButton: { paddingVertical: 10, paddingHorizontal: 20 },
  tabText: { ...globalStyles.paragraph, fontSize: 14, color: '#091C38'},
  activeTabText: { ...globalStyles.notificationText,fontSize: 14 },
  contentContainer: { flex: 1, paddingBottom: 20 },
});

export default Creator;

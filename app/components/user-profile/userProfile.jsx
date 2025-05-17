import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import localStorageService from '../../service/localstorage.service';

import Header from './components/header';
import BasicInfo from './components/basic';
import CategoriesAccordion from './components/category';
import FeeCard from './components/fee-card';
import { globalStyles } from '@/assets/typography/typography';
import { SafeAreaView } from 'react-native-safe-area-context';

const TABS = ['categories', 'fee card'];

const UserProfile = () => {
  const storage = localStorageService();
  const [data, setData] = useState({ basic: {}, categories: {}, feeCard: {} });
  const [isLoading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('categories'); // default tab

  useEffect(() => {
    const fetchData = async () => {
      const userData = await storage.getStoreItem('tabs');
      setData({
        basic: userData[0]?.data || {},
        categories: userData[1]?.data || {},
        feeCard: userData[2]?.data || {},
      });
      setLoading(false);
    };
    setLoading(true);
    fetchData();
  }, []);

  if (isLoading) return null;

  return (
    <SafeAreaView style={{ flex: 1 }}>
    <ScrollView style={{backgroundColor:'#f1f5f9'}} className="bg-[#F8FCFF] flex-1 px-4">
      <Header />
      <BasicInfo data={data?.basic} />

      {/* Tabs */}
      <View style={{ flexDirection: 'row', backgroundColor: '#F1F5F9', padding: 20, borderRadius: 10}}>
        {TABS.map(tab => (
          <TouchableOpacity
            key={tab}
            onPress={() => setActiveTab(tab)}
            style={{
              backgroundColor: activeTab === tab ? '#0819320D' : '#08193205',
              borderRadius: 10,
              paddingVertical: 8,
              paddingHorizontal: 16,
              marginRight: 8,
            }}
          >
            <Text style={{ fontWeight: activeTab === tab ? 'bold' : 'normal', color: '#111827',...globalStyles.paragraph,
                fontSize: 14, }}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Conditional Tab Content */}
      {activeTab === 'categories' && <CategoriesAccordion categoryData={data?.categories} />}
      {activeTab === 'fee card' && <FeeCard data={data?.feeCard} />}
    </ScrollView>
    </SafeAreaView>
  );
};

export default UserProfile;

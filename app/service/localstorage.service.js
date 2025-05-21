// localStorageService.js
import AsyncStorage from "@react-native-async-storage/async-storage";

const localStorageService = () => {
  const setStoreItem = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error saving data to AsyncStorage:", error);
    }
  };

  const getStoreItem = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    } catch (error) {
      console.error("Error reading data from AsyncStorage:", error);
      return null;
    }
  };

  const removeStoreItem = async (key) => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.error("Error removing data from AsyncStorage:", error);
    }
  };

  return { setStoreItem, getStoreItem, removeStoreItem };
};

export default localStorageService;

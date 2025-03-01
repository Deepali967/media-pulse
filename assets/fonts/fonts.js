import * as Font from 'expo-font';
import { useState, useEffect } from 'react';

const useFonts = async () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'regular': require('../fonts/avenir/regular.otf'),
        'regular2': require('../fonts/avenir/regular2.otf'),
        'bold': require('../fonts/avenir/bold.otf'),
        'medium': require('../fonts/avenir/medium.ttf'),
        // Add more fonts here
      });
      setFontsLoaded(true);
    }

    loadFonts();
  }, []);

  return fontsLoaded;
};

export default useFonts;

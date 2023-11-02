import React, {useEffect} from 'react';
import AppNavigation from './navigation/AppNavigation';
import '@/Translations/i18n';
import i18n from '@/Translations/i18n';
import {languageStore} from './stores';

const App = () => {
  useEffect(() => {
    i18n.changeLanguage(languageStore.currentLanguage?.code);
  }, []);

  return <AppNavigation />;
};

export default App;

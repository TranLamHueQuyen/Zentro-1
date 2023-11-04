import React, {useEffect} from 'react';
import AppNavigation from './navigation/AppNavigation';
import '@/Translations/i18n';
import {languageStore} from './stores';

const App = () => {
  useEffect(() => {
    languageStore.getLanguage();
  }, []);

  return <AppNavigation />;
};

export default App;

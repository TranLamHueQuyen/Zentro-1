import React, {useEffect} from 'react';
import AppNavigation from './navigation/AppNavigation';
import '@/Translations/i18n';
import {languageStore} from './stores';
import {AuthProvider} from './context/AuthContext';

const App = () => {
  useEffect(() => {
    languageStore.getLanguage();
  }, []);

  return (
    <AuthProvider>
      <AppNavigation />
    </AuthProvider>
  );
};

export default App;

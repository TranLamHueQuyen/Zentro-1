import React from 'react';
import AppNavigation from './navigation/AppNavigation';
import '@/Translations/i18n';
import i18n from '@/Translations/i18n';
i18n.changeLanguage('en');

const App = () => {
  return <AppNavigation />;
};

export default App;

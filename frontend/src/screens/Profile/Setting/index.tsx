import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext} from 'react';
import {useTranslation} from 'react-i18next';
import {BackButton} from '@/components';
import {AuthContext} from '@/context/AuthContext';
import {navigate, replace} from '@/navigation/NavigationUtils';

const Setting = () => {
  const {t} = useTranslation();
  const {logout} = useContext(AuthContext);
  return (
    <View>
      <BackButton />
      <Text style={styles.settingTitle}>{t('setting')}</Text>
      <View style={styles.profileContent}>
        <TouchableOpacity
          onPress={() => {
            logout();
          }}
        >
          <Text style={styles.logoutText}>{t('logout')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  settingTitle: {
    color: '#252B5C',
    fontFamily: 'Lato-Bold',
    fontSize: 20,
    marginTop: 35,
    marginBottom: 20,
    textAlign: 'center',
  },
  profileContent: {
    paddingHorizontal: 24,
  },
  logoutText: {
    fontFamily: 'Lato-Regular',
    fontSize: 14,
    color: '#252B5C',
  },
});

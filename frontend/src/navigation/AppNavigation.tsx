import {ActivityIndicator, StyleSheet, View} from 'react-native';
import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './AppStack';
import {navigationRef} from './NavigationUtils';
import {AuthContext} from '@/context/AuthContext';
import Login from '@/screens/Login';
import Splash from '@/components/Splash';
import TabNavigator from './TabNavigator';

const AppNavigation = () => {
  const {isLoading, userToken} = useContext(AuthContext);

  return (
    <NavigationContainer ref={navigationRef}>
      {isLoading ? (
        <Splash />
      ) : userToken === null ? (
        <Login />
      ) : (
        <View style={styles.container}>
          <AppStack name={userToken ? 'HomeScreen' : undefined} />
        </View>
      )}
    </NavigationContainer>
  );
};

export default AppNavigation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});

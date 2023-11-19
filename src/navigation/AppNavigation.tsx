import {StyleSheet, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './AppStack';
import {navigationRef} from './NavigationUtils';

const AppNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <View style={styles.container}>
        <AppStack />
      </View>
    </NavigationContainer>
  );
};

export default AppNavigation;

const styles = StyleSheet.create({
  container: {flex: 1},
});

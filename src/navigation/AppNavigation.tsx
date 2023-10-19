import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './AppStack';

const AppNavigation = () => {
  return (
    <NavigationContainer>
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

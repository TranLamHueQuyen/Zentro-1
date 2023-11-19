import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Transaction from './Transaction';
import Listing from './Listing';
import Sold from './Sold';

const Tab = createMaterialTopTabNavigator();

const TabMenu = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Transaction"
        component={Transaction}
      />
      <Tab.Screen
        name="Listing"
        component={Listing}
      />
      <Tab.Screen
        name="Sold"
        component={Sold}
      />
    </Tab.Navigator>
  );
};

export default TabMenu;

const styles = StyleSheet.create({});

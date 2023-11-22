import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Sold = () => {
  return (
    <View style={styles.container}>
      <Text>SoldScreen</Text>
    </View>
  );
};

export default Sold;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
});

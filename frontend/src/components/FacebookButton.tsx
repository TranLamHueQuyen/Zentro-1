import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {memo} from 'react';
import {Facebook_Icon} from '@/assets/Svg';
import {screenWidth} from '@/themes/Responsive';

const FacebookButton = () => {
  return (
    <View>
      <TouchableOpacity
        style={{
          width: screenWidth / 2 - 29,
          height: 70,
          backgroundColor: '#F5F4F8',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 25,
          marginLeft: 10,
          marginTop: 20,
        }}
        activeOpacity={0.3}
      >
        <Facebook_Icon />
      </TouchableOpacity>
    </View>
  );
};

export default memo(FacebookButton);

const styles = StyleSheet.create({});

import {StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {screenWidth} from '@/themes/Responsive';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParams} from '@/utils/type';

const LoginButton = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();
  return (
    <View style={{alignItems: 'center'}}>
      <TouchableOpacity
        onPress={() => navigation.navigate('HomeScreen')}
        style={{
          flexDirection: 'row',
          width: screenWidth - 96,
          height: 63,
          backgroundColor: '#8BC83F',
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        activeOpacity={0.7}
      >
        <Text
          style={{
            color: '#FFFFFF',
            fontSize: 16,
            fontFamily: 'Lato-Bold',
            padding: 6,
          }}
        >
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default memo(LoginButton);

const styles = StyleSheet.create({});

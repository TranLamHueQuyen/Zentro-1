import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {getImages} from '@/assets/Images';
import {Email_Icon} from '@/assets/Svg';
import Separator from '@/components/Separator';
import {screenHeight, screenWidth} from '@/themes/Responsive';
import GoogleButton from '@/components/GoogleButton';
import FacebookButton from '@/components/FacebookButton';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParams} from '@/utils/type';

const OptionLogin = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();
  return (
    <View style={{backgroundColor: 'white', height: screenHeight}}>
      <View style={styles.header}>
        <Image
          source={getImages().picture_4}
          style={styles.images}
        />
        <Image
          source={getImages().picture_1}
          style={styles.images}
        />
        <Image
          source={getImages().picture_3}
          style={styles.images}
        />
        <Image
          source={getImages().picture_5}
          style={styles.images}
        />
      </View>
      <View style={{flexDirection: 'row', marginVertical: 50, marginLeft: 24}}>
        <Text
          style={{
            color: '#252B5C',
            fontSize: 25,
            fontFamily: 'Lato-Regular',
          }}
        >
          Ready to{' '}
        </Text>
        <Text style={{color: '#1F4C6B', fontSize: 25, fontFamily: 'Lato-Bold'}}>
          explore?
        </Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity
          style={styles.email}
          activeOpacity={0.7}
          onPress={() => navigation.navigate('Login')}
        >
          <Email_Icon color="#FFFFFF" />
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: 16,
              fontFamily: 'Lato-Bold',
              padding: 6,
            }}
          >
            Continue with Email
          </Text>
        </TouchableOpacity>
      </View>
      <Separator />
      <View style={{flexDirection: 'row'}}>
        <GoogleButton />
        <FacebookButton />
      </View>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginVertical: '20%',
        }}
        activeOpacity={0.5}
        onPress={() => navigation.navigate('Register')}
      >
        <Text
          style={{fontSize: 14, color: '#53587A', fontFamily: 'Lato-Regular'}}
        >
          Don’t have an account?{' '}
        </Text>
        <Text style={{fontSize: 14, color: '#1F4C6B', fontFamily: 'Lato-Bold'}}>
          Register
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default OptionLogin;

const styles = StyleSheet.create({
  images: {
    width: screenWidth / 2 - 22,
    height: screenWidth / 2 - 22,
    borderRadius: 20,
    marginTop: 8,
    marginHorizontal: 4,
  },
  header: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  email: {
    flexDirection: 'row',
    width: screenWidth - 96,
    height: 63,
    backgroundColor: '#8BC83F',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

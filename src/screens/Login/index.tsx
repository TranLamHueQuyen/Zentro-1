import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {getImages} from '@/assets/Images';
import {Email_Icon} from '@/assets/Svg';
import Feather from 'react-native-vector-icons/Feather';
import Separator from '@/components/Separator';
import LoginButton from '@/components/LoginButton';
import GoogleButton from '@/components/GoogleButton';
import FacebookButton from '@/components/FacebookButton';
import {screenWidth} from '@/themes/Responsive';
import BackButton from '@/components/BackButton';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [login, setLogin] = useState(false);

  return (
    <View style={styles.container}>
      <BackButton />
      <Image
        source={getImages().city}
        style={styles.headerImage}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 10,
          marginLeft: 29,
        }}
      >
        <Text
          style={{color: '#252B5C', fontFamily: 'Lato-Medium', fontSize: 25}}
        >
          Let’s{' '}
        </Text>
        <Text style={{color: '#1F4C6B', fontFamily: 'Lato-Bold', fontSize: 25}}>
          Sign In
        </Text>
      </View>
      {login ? (
        <View
          style={{
            height: 50,
            width: screenWidth - 48,
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 24,
            paddingHorizontal: 46,
            borderRadius: 10,
            backgroundColor: '#234F68',
            position: 'absolute',
            top: 229,
          }}
        >
          <Text style={{color: '#FFFFFF'}}>Email or password is incorrect</Text>
        </View>
      ) : null}
      <View style={{marginTop: 74}}>
        <View style={styles.icon}>
          <Email_Icon color="#252B5C" />
        </View>
        <TextInput
          placeholder="Email"
          style={[
            styles.input,
            {fontFamily: email ? 'Lato-Bold' : 'Lato-Regular'},
          ]}
          placeholderTextColor={'#A1A5C1'}
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
      </View>
      <View style={{marginTop: 15}}>
        <View style={styles.icon}>
          <Feather
            name="lock"
            size={20}
            color={'#252B5C'}
          />
        </View>
        <TextInput
          placeholder="Password"
          secureTextEntry={showPassword}
          style={[
            styles.input,
            {fontFamily: password ? 'Lato-Bold' : 'Lato-Regular'},
          ]}
          placeholderTextColor={'#A1A5C1'}
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
      </View>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          marginHorizontal: 24,
          marginTop: 10,
        }}
      >
        <TouchableOpacity>
          <Text style={styles.text}>Forgot password?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setShowPassword(!showPassword)}
          activeOpacity={0.6}
        >
          <Text style={styles.text}>
            {showPassword ? 'Show ' : 'Hide '}password
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{marginTop: 50}}>
        <LoginButton />
      </View>
      <View style={{marginTop: 10}}>
        <Separator />
      </View>
      <View style={{flexDirection: 'row'}}>
        <GoogleButton />
        <FacebookButton />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginVertical: '20%',
        }}
      >
        <Text
          style={{fontSize: 14, color: '#53587A', fontFamily: 'Lato-Regular'}}
        >
          Don’t have an account?{' '}
        </Text>
        <Text style={{fontSize: 14, color: '#1F4C6B', fontFamily: 'Lato-Bold'}}>
          Register
        </Text>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  headerImage: {
    height: 175,
    zIndex: -1,
  },
  input: {
    color: '#252B5C',
    fontSize: 15,
    height: 70,
    marginHorizontal: 24,
    paddingHorizontal: 46,
    borderRadius: 10,
    backgroundColor: '#F5F4F8',
    zIndex: -1,
  },
  icon: {
    position: 'absolute',
    alignItems: 'center',
    flex: 1,
    top: 25,
    left: 40,
  },
  text: {
    fontSize: 12,
    fontFamily: 'Lato-Black',
    color: '#234F68',
  },
});

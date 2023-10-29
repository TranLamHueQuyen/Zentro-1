import {
  StyleSheet,
  Text,
  View,
  PermissionsAndroid,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {screenHeight, screenWidth} from '@/themes/Responsive';
import Geolocation from '@react-native-community/geolocation';
import BackButton from '@/components/BackButton';
import {ButtonCenter} from '@/assets/Svg';
import Feather from 'react-native-vector-icons/Feather';

const Location = () => {
  const [latitude, setLatitude] = useState(16.081706176409128);
  const [longitude, setLongitude] = useState(108.07812645010671);
  const [search, setSearch] = useState('');
  const [showView, setShowView] = useState(false);
  const handleTextInputPress = () => {
    setShowView(true);
  };

  useEffect(() => {
    requestCameraPermission();
  }, []);

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        getCurrentLocation();
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      (error) => {
        console.log('Error: ', error.message);
      },
      {enableHighAccuracy: false},
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.borderRadiusMap}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 1,
            longitudeDelta: 1,
          }}
          region={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
          onPress={(e) => {
            setLatitude(e.nativeEvent.coordinate.latitude);
            setLongitude(e.nativeEvent.coordinate.longitude);
          }}
        >
          <Marker
            coordinate={{
              latitude: latitude,
              longitude: longitude,
            }}
          />
        </MapView>
      </View>

      {!showView ? (
        <View style={styles.view2}>
          <BackButton />
          <View style={{position: 'absolute', zIndex: 1, top: 89}}>
            <View style={styles.icon}>
              <Feather
                name="search"
                size={20}
                color={'#252B5C'}
              />
            </View>
            <TextInput
              placeholder="Find location"
              style={[
                styles.input,
                {fontFamily: search ? 'Lato-Bold' : 'Lato-Regular'},
              ]}
              placeholderTextColor={'#A1A5C1'}
              onChangeText={(text) => setSearch(text)}
              onPressIn={handleTextInputPress}
              value={search}
            />
          </View>
          <TouchableOpacity
            style={{
              marginLeft: screenWidth - 74,
              marginTop: screenHeight - 260,
            }}
            onPress={requestCameraPermission}
          >
            <ButtonCenter />
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity
          style={{
            backgroundColor: '#234F68',
            position: 'absolute',
            zIndex: 1,
            top: 0,
            left: 0,
            width: screenWidth,
            height: screenHeight,
            opacity: 0.67,
          }}
          onPress={() => setShowView(false)}
          activeOpacity={0}
        >
          <View style={{position: 'absolute', zIndex: 1, top: 89}}>
            <View style={{position: 'absolute', top: 25, right: 40, zIndex: 2}}>
              <Feather
                name="search"
                size={20}
                color={'#252B5C'}
              />
            </View>
            <TextInput
              placeholder="Find location"
              style={[
                styles.input,
                {
                  fontFamily: search ? 'Lato-Bold' : 'Lato-Regular',
                  paddingHorizontal: 24,
                },
              ]}
              placeholderTextColor={'#A1A5C1'}
              onChangeText={(text) => setSearch(text)}
              value={search}
              autoFocus
            />
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Location;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  borderRadiusMap: {
    borderRadius: 25,
    width: screenWidth - 24,
    height: screenHeight - 24,
    overflow: 'hidden',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  icon: {
    position: 'absolute',
    top: 25,
    left: 40,
    zIndex: 2,
  },
  input: {
    color: '#252B5C',
    fontSize: 15,
    height: 70,
    width: screenWidth - 48,
    marginHorizontal: 24,
    paddingHorizontal: 46,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    zIndex: 1,
  },
  view2: {
    position: 'absolute',
    zIndex: 1,
    top: 0,
    left: 0,
  },
});

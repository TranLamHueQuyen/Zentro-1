import {
  StyleSheet,
  Text,
  View,
  PermissionsAndroid,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  Image,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {screenHeight, screenWidth} from '@/themes/Responsive';
import BackButton from '@/components/BackButton';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import axios from 'axios';
import {useTranslation} from 'react-i18next';
import Geolocation from 'react-native-geolocation-service';
import {Marker_Icon} from '@/assets/Svg';
import {getImages} from '@/assets/Images';

const Location = () => {
  const {t} = useTranslation();
  const [search, setSearch] = useState('');
  const [showView, setShowView] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentAddress, setCurrentAddress] = useState('');
  const [currentLocation, setCurrentLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const [changeLocation, setChangeLocation] = useState({
    latitude: currentLocation?.latitude || 0,
    longitude: currentLocation?.longitude || 0,
  });

  const handleTextInputPress = () => {
    setShowView(true);
  };

  useEffect(() => {
    requestCameraPermission();
  }, [changeLocation]);

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
      async (position) => {
        const {latitude, longitude} = position.coords;

        let URL = '';
        if (changeLocation.latitude !== 0 && changeLocation.longitude !== 0) {
          URL = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${changeLocation.latitude}&lon=${changeLocation.longitude}`;
        } else {
          URL = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
        }
        try {
          const response = await axios.get(URL);
          const current = `${response.data.address.road},  ${response.data.address.city_district}, ${response.data.address.city}`;

          setCurrentAddress(current);
        } catch (error) {
          console.error('Lỗi:', error);
        }
        setCurrentLocation({latitude, longitude});
        setIsLoading(false);
      },
      (error) => {
        console.log('Error: ', error.message);
      },
      {enableHighAccuracy: false},
    );
  };

  return isLoading ? (
    <View style={styles.container}>
      <ActivityIndicator
        size="large"
        color="#8BC83F"
      />
    </View>
  ) : (
    <View style={styles.container}>
      <View style={styles.borderRadiusMap}>
        {currentLocation !== null && (
          <MapView
            style={styles.map}
            region={{
              latitude:
                changeLocation.latitude !== 0
                  ? changeLocation?.latitude
                  : currentLocation.latitude,
              longitude:
                changeLocation.longitude !== 0
                  ? changeLocation?.longitude
                  : currentLocation.longitude,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
            onPress={(e) => {
              setChangeLocation({
                latitude: e.nativeEvent.coordinate.latitude,
                longitude: e.nativeEvent.coordinate.longitude,
              });
            }}
          >
            <Marker
              coordinate={
                changeLocation.latitude !== 0 ? changeLocation : currentLocation
              }
              title={currentAddress}
            >
              <View style={{top: 9, position: 'absolute'}}>
                <Marker_Icon />
                <Image
                  source={getImages().picture_1}
                  style={styles.markerImage}
                />
              </View>
            </Marker>
          </MapView>
        )}
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
          <View style={styles.locView}>
            <Text style={styles.addressTitle}>Location detail</Text>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 15,
                marginBottom: 20,
                marginHorizontal: 15,
                alignItems: 'center',
              }}
            >
              <View style={styles.iconLocView}>
                <Octicons
                  name="location"
                  color={'#53587A'}
                  size={14}
                />
              </View>
              <Text style={styles.addressText}>{currentAddress}</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.chooseLocBtn}
            activeOpacity={0.8}
          >
            <Text
              style={{fontFamily: 'Lato-Bold', color: '#FFF', fontSize: 16}}
            >
              {t('choose_location')}
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity
          style={styles.activeInput}
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
  markerImage: {
    width: 32.32,
    height: 32.71,
    borderRadius: 100,
    position: 'absolute',
    top: 4,
    left: 4,
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
  activeInput: {
    backgroundColor: '#234F68',
    position: 'absolute',
    zIndex: 1,
    top: 0,
    left: 0,
    width: screenWidth,
    height: screenHeight,
    opacity: 0.67,
  },
  view2: {
    position: 'absolute',
    zIndex: 1,
    top: 0,
    left: 0,
  },
  locView: {
    backgroundColor: '#FFF',
    borderRadius: 25,
    width: screenWidth - 48,
    marginLeft: 24,
    position: 'absolute',
    top: screenHeight - 238,
  },
  chooseLocBtn: {
    position: 'absolute',
    top: screenHeight - 95,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginLeft: 45,
    width: screenWidth - 90,
    height: 65,
    backgroundColor: '#8BC83F',
  },
  addressTitle: {
    color: '#252B5C',
    fontFamily: 'Lato-Bold',
    fontSize: 18,
    marginLeft: 15,
    marginTop: 20,
  },
  addressText: {
    color: '#53587A',
    fontFamily: 'Lato-Regular',
    fontSize: 14,
    width: screenWidth - 128,
    marginLeft: 15,
  },
  iconLocView: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ECEDF3',
    borderRadius: 50,
  },
});

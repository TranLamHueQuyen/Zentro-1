import {
  StyleSheet,
  Text,
  View,
  PermissionsAndroid,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {screenHeight, screenWidth} from '@/themes/Responsive';
import Geolocation from '@react-native-community/geolocation';
import axios from 'axios';
import {useTranslation} from 'react-i18next';

const Maps = () => {
  const {t} = useTranslation();
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [address, setAddress] = useState('');
  const [name, setName] = useState('');

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
      async (position) => {
        const {latitude, longitude} = position.coords;

        try {
          const response = await axios.get(
            `https://maps.googleapis.com/maps/api/geocode/json?address=${latitude},${longitude}&key=AIzaSyCXHsPT450-AosY7dvzi5gUT_geYSpI34o`,
          );
          console.log(response.data);
          const address = response.data.results[0].formatted_address;
          const countName = response.data.results[0].address_components.length;
          const name = response.data.results[0].address_components
            .slice(countName - 3, countName - 1)
            .map((item: any) => console.log(item.long_name));

          setAddress(address);
        } catch (error) {
          console.error('Lỗi:', error);
        }
        setLatitude(latitude);
        setLongitude(longitude);
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
        <MapView
          scrollEnabled={false}
          style={styles.map}
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
          provider={PROVIDER_GOOGLE}
          showsUserLocation={true}
        >
          {/* <Marker
              coordinate={{
                latitude: latitude,
                longitude: longitude,
              }}
            /> */}
        </MapView>
      </View>
    </View>
  );
};

export default Maps;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  borderRadiusMap: {
    borderRadius: 25,
    width: screenWidth - 48,
    height: 250,
    overflow: 'hidden',
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

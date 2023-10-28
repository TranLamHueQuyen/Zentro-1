import {
  StyleSheet,
  Text,
  View,
  PermissionsAndroid,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {screenHeight, screenWidth} from '@/themes/Responsive';
import Geolocation from '@react-native-community/geolocation';

const Location = () => {
  const [latitude, setLatitude] = useState(16.081706176409128);
  const [longitude, setLongitude] = useState(108.07812645010671);

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
      <TouchableOpacity
        style={{
          position: 'absolute',
          width: 100,
          height: 100,
          backgroundColor: 'red',
        }}
        onPress={requestCameraPermission}
      >
        <Text>OnPress</Text>
      </TouchableOpacity>
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
});

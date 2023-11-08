import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Featured} from '@/utils/interface';
import {screenHeight, screenWidth} from '@/themes/Responsive';
import {BackButton} from '@/components';
import FavoriteButton from '@/components/FavoriteButton';

const EstateDetail: React.FC<Featured> = ({route, navigation}) => {
  const {estate} = route.params;

  return (
    <View>
      <BackButton />
      <FavoriteButton
        size={50}
        favorite={estate.favorite}
      />
      <View style={styles.imgArrayView}>
        <View style={styles.insideImg}>
          <Image
            source={estate.images[1]}
            style={styles.imgArray}
          />
        </View>

        <View style={styles.insideImg}>
          <Image
            source={estate.images[2]}
            style={styles.imgArray}
          />
        </View>
      </View>
      <View>
        
      </View>
      <Image
        source={estate.images[0]}
        style={styles.images}
      />
    </View>
  );
};

export default EstateDetail;

const styles = StyleSheet.create({
  images: {
    width: screenWidth - 20,
    height: 500,
    borderRadius: 50,
    margin: 10,
  },
  imgArrayView: {
    flexDirection: 'column',
    position: 'absolute',
    zIndex: 1,
    bottom: 30,
    right: 24,
  },
  imgArray: {
    width: 60,
    height: 60,
    borderRadius: 18,
  },
  insideImg: {
    borderWidth: 3,
    borderColor: '#FFFFFF',
    borderRadius: 18,
    marginTop: 5,
  },
});

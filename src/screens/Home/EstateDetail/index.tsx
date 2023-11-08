import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Featured} from '@/utils/interface';
import {screenHeight, screenWidth} from '@/themes/Responsive';
import {BackButton, Separator} from '@/components';
import FavoriteButton from '@/components/FavoriteButton';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {Bath_Icon, Bed_Icon, Chat_Icon} from '@/assets/Svg';
import {useTranslation} from 'react-i18next';

const EstateDetail: React.FC<Featured> = ({route, navigation}) => {
  const {t} = useTranslation();
  const {estate} = route.params;
  return (
    <ScrollView style={styles.component}>
      <View>
        <BackButton />
        <FavoriteButton
          size={50}
          favorite={estate.assets.favorite}
        />
        <View style={styles.imgArrayView}>
          {estate.assets.images.length > 3
            ? estate.assets.images
                .slice(0, 3)
                .map((item: any, index: number) => {
                  return (
                    <View
                      style={styles.insideImg}
                      key={index}
                    >
                      <Image
                        source={item}
                        style={styles.imgArray}
                      />
                    </View>
                  );
                })
            : estate.assets.images.map((item: any, index: number) => {
                return (
                  <View
                    style={styles.insideImg}
                    key={index}
                  >
                    <Image
                      source={item}
                      style={styles.imgArray}
                    />
                  </View>
                );
              })}
        </View>
        {estate.assets.images.length > 3 ? (
          <View style={styles.countImage}>
            <Text style={{fontSize: 20, fontFamily: 'Lato-Regular'}}>
              +{estate.assets.images.length - 3}
            </Text>
          </View>
        ) : null}

        <View style={[styles.ratingView]}>
          <Entypo
            name="star"
            color={'#FFC42D'}
            size={12}
          />
          <Text style={styles.ratingText}>{estate.assets.star_rating}</Text>
        </View>
        <Image
          source={estate.assets.images[0]}
          style={styles.images}
        />
      </View>
      <View style={styles.nameView}>
        <Text style={styles.nameStyle}>{estate.assets.name}</Text>
        <Text style={styles.priceStyle}>$ {estate.assets.price}</Text>
      </View>
      <View style={styles.nameView}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <FontAwesome6
            name="location-dot"
            color={'#1F4C6B'}
            size={12}
          />
          <Text style={styles.locationStyle}> {estate.assets.location}</Text>
        </View>

        <Text style={styles.locationStyle}>per month</Text>
      </View>
      <View style={{flexDirection: 'row', marginTop: 20}}>
        <TouchableOpacity style={styles.rentButton}>
          <Text style={styles.rentText}>{t('rent')}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buyButton}>
          <Text style={styles.buyText}>{t('buy')}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.separator}></View>
      <View style={styles.ownerView}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={estate.avatar}
            style={styles.avatarStyles}
          />
          <View style={{marginLeft: 16}}>
            <Text style={styles.username}>{estate.name}</Text>
            <Text style={styles.address}>{estate.address}</Text>
          </View>
        </View>
        <Chat_Icon />
      </View>
      <View style={styles.facilitiesView}>
        {estate.assets.bedroom ? (
          <View style={styles.facilities}>
            <Bed_Icon />
            <Text style={styles.bedroom}>
              {estate.assets.bedroom} {t('bedroom')}
            </Text>
          </View>
        ) : null}
        {estate.assets.bathroom ? (
          <View style={styles.facilities}>
            <Bath_Icon />
            <Text style={styles.bedroom}>
              {estate.assets.bathroom} {t('bathroom')}
            </Text>
          </View>
        ) : null}
      </View>
    </ScrollView>
  );
};

export default EstateDetail;

const styles = StyleSheet.create({
  component: {
    backgroundColor: '#FFFFFF',
  },
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
  ratingView: {
    position: 'absolute',
    bottom: 30,
    left: 24,
    zIndex: 1,
    backgroundColor: 'rgba(35,79,104,.69)',
    width: 95,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  ratingText: {
    fontFamily: 'Lato-Bold',
    fontSize: 14,
    marginLeft: 4,
    color: '#FFFFFF',
  },
  countImage: {
    position: 'absolute',
    zIndex: 1,
    bottom: 33,
    right: 27,
    backgroundColor: 'rgba(23,12,46,.43)',
    width: 60,
    height: 60,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    marginTop: 5,
  },
  nameStyle: {
    fontFamily: 'Lato-Bold',
    fontSize: 25,
    color: '#252B5C',
    width: screenWidth / 1.4,
  },
  priceStyle: {
    color: '#252B5C',
    fontSize: 25,
    fontWeight: '500',
  },
  locationStyle: {
    color: '#53587A',
    fontSize: 14,
    fontFamily: 'Lato-Regular',
  },
  rentButton: {
    backgroundColor: '#8BC83F',
    paddingHorizontal: 24,
    paddingVertical: 17.5,
    borderRadius: 20,
    marginLeft: 24,
  },
  buyButton: {
    backgroundColor: '#F5F4F8',
    paddingHorizontal: 24,
    paddingVertical: 17.5,
    borderRadius: 20,
    marginLeft: 24,
  },
  rentText: {
    color: '#FFFFFF',
    fontFamily: 'Lato-Bold',
  },
  buyText: {
    color: '#252B5C',
    fontFamily: 'Lato-Regular',
  },
  separator: {
    backgroundColor: '#ECEDF3',
    marginHorizontal: 24,
    height: 1.3,
    marginTop: 23,
  },
  avatarStyles: {
    width: 35,
    height: 35,
    borderRadius: 50,
  },
  username: {
    fontFamily: 'Lato-Bold',
    color: '#252B5C',
    fontSize: 15,
  },
  address: {
    fontFamily: 'Lato-Regular',
    color: '#53587A',
    fontSize: 12,
  },
  ownerView: {
    justifyContent: 'space-between',
    width: screenWidth - 48,
    backgroundColor: '#F5F4F8',
    paddingHorizontal: 16,
    paddingVertical: 24,
    flexDirection: 'row',
    borderRadius: 20,
    alignItems: 'center',
    marginLeft: 24,
    marginTop: 20,
  },
  facilitiesView: {
    flexDirection: 'row',
    marginLeft: 24,
    marginTop: 20,
  },
  facilities: {
    flexDirection: 'row',
    backgroundColor: '#F5F4F8',
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 100,
    marginRight: 10,
  },
  bedroom: {
    color: '#53587A',
    marginLeft: 8,
  },
});

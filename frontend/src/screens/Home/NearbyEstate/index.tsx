import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {getImages} from '@/assets/Images';
import {EstateItems} from '@/utils/interface';
import FavoriteButton from '@/components/FavoriteButton';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {screenWidth} from '@/themes/Responsive';
import {push} from '@/navigation/NavigationUtils';

const NearbyEstate = ({
  navigation,
  detail,
}: {
  navigation: any;
  detail: boolean;
}) => {
  const {t} = useTranslation();
  const data = [
    {
      id: 1,
      name: 'Hung',
      avatar: getImages().picture_1,
      address: 'Việt Nam',
      phone: '123456789',
      email: 'admin@gmail.com',
      assets: {
        images: [
          getImages().picture_1,
          getImages().picture_2,
          getImages().picture_3,
          getImages().picture_4,
          getImages().picture_5,
        ],
        name: 'Sky Dandelions Apartment',
        location: 'K814 Tran Cao Van,TP.Đà Nẵng, Việt Nam',
        star_rating: 4.5,
        price: 290,
        bathroom: 2,
        bedroom: 2,
        floors: 2,
        time: 'month',
        favorite: true,
      },
    },
    {
      id: 2,
      name: 'Tony',
      avatar: getImages().picture_2,
      address: 'Việt Nam',
      phone: '123456789',
      email: 'admin@gmail.com',
      assets: {
        images: [
          getImages().picture_4,
          getImages().picture_5,
          getImages().picture_3,
        ],
        name: 'Sky Dandelions Apartment',
        location: 'K814 Tran Cao Van,TP.Đà Nẵng, Việt Nam',
        star_rating: 4.7,
        price: 160,
        bathroom: 2,
        bedroom: 3,
        floors: 2,
        time: 'month',
        favorite: false,
      },
    },
    {
      id: 3,
      name: 'Tony',
      avatar: getImages().picture_2,
      address: 'Việt Nam',
      phone: '123456789',
      email: 'admin@gmail.com',
      assets: {
        images: [
          getImages().picture_4,
          getImages().picture_5,
          getImages().picture_3,
        ],
        name: 'Sky Dandelions Apartment',
        location: 'K814 Tran Cao Van,TP.Đà Nẵng, Việt Nam',
        star_rating: 4.7,
        price: 160,
        bathroom: 2,
        bedroom: 3,
        floors: 2,
        time: 'month',
        favorite: false,
      },
    },
    {
      id: 4,
      name: 'Hung',
      avatar: getImages().picture_1,
      address: 'Việt Nam',
      phone: '123456789',
      email: 'admin@gmail.com',
      assets: {
        images: [
          getImages().picture_1,
          getImages().picture_2,
          getImages().picture_3,
          getImages().picture_4,
          getImages().picture_5,
        ],
        name: 'Sky Dandelions Apartment',
        location: 'K814 Tran Cao Van,TP.Đà Nẵng, Việt Nam',
        star_rating: 4.5,
        price: 290,
        bathroom: 2,
        bedroom: 2,
        floors: 2,
        time: 'month',
        favorite: true,
      },
    },
    {
      id: 5,
      name: 'Hung',
      avatar: getImages().picture_1,
      address: 'Việt Nam',
      phone: '123456789',
      email: 'admin@gmail.com',
      assets: {
        images: [
          getImages().picture_1,
          getImages().picture_2,
          getImages().picture_3,
          getImages().picture_4,
          getImages().picture_5,
        ],
        name: 'Sky Dandelions Apartment',
        location: 'K814 Tran Cao Van,TP.Đà Nẵng, Việt Nam',
        star_rating: 4.5,
        price: 290,
        bathroom: 2,
        bedroom: 2,
        floors: 2,
        time: 'month',
        favorite: true,
      },
    },
  ];

  const RenderItems = ({item}: {item: EstateItems}) => {
    return (
      <View style={styles.cardItem}>
        <View style={styles.btnFavorite}>
          <FavoriteButton favorite={item.assets.favorite} />
        </View>

        <View style={styles.priceView}>
          <View style={styles.priceContent}>
            <Text style={styles.price}>$ </Text>
            <Text style={styles.price}>{item.assets.price}</Text>
            <Text style={styles.stay}> /</Text>
            <Text style={styles.stay}>{item.assets.time}</Text>
          </View>
        </View>

        <Image
          source={item.assets.images[0]}
          style={styles.images}
        />

        <TouchableOpacity
          style={styles.cardContent}
          onPress={() => push({name: 'EstateDetail', params: {estate: item}})}
        >
          <Text style={styles.cardName}>{item.assets.name}</Text>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.ratingView}>
              <Entypo
                name="star"
                color={'#FFC42D'}
                size={10}
              />
              <Text style={styles.rating}>{item.assets.star_rating}</Text>
            </View>
            <View style={styles.locationView}>
              <FontAwesome6
                name="location-dot"
                color={'#234F68'}
                size={9}
              />
              <Text style={styles.location}>{item.assets.location}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View>
      {detail ? (
        <Text style={styles.textHeader}>{t('nearby_location')}</Text>
      ) : (
        <Text style={styles.textHeader}>{t('explore_nearby_estates')}</Text>
      )}
      <View style={styles.viewRender}>
        {data.map((item: EstateItems, index: number) => {
          return (
            <RenderItems
              item={item}
              key={index}
            />
          );
        })}
      </View>
    </View>
  );
};

export default NearbyEstate;

const styles = StyleSheet.create({
  component: {
    flex: 1,
  },
  textHeader: {
    fontFamily: 'Lato-Bold',
    fontSize: 18,
    color: '#252B5C',
    marginLeft: 24,
  },
  btnFavorite: {
    position: 'absolute',
    right: 48,
    top: 8,
  },
  viewRender: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    marginLeft: 24,
  },
  cardItem: {
    width: screenWidth / 2 - 27.5,
    backgroundColor: '#F5F4F8',
    borderRadius: 25,
    marginTop: 20,
    padding: 8,
    marginRight: 7,
  },
  cardContent: {
    width: screenWidth / 2 - 56,
    marginLeft: 12,
    marginTop: 8,
  },
  cardName: {
    fontFamily: 'Lato-Bold',
    fontSize: 16,
    color: '#252B5C',
  },
  ratingView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    marginRight: 7.5,
  },
  locationView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    height: 12,
  },
  rating: {
    color: '#53587A',
    fontSize: 12,
    fontFamily: 'Lato-Bold',
    marginLeft: 2,
  },
  location: {
    color: '#53587A',
    fontFamily: 'Lato-Regular',
    marginLeft: 2,
    fontSize: 12,
    width: screenWidth / 2 - 99.5,
  },
  priceView: {
    top: 154,
    right: 16,
    position: 'absolute',
    zIndex: 1,
    // width: 75,
    // height: 25,
    backgroundColor: 'rgba(35,79,104,.69)',
    borderRadius: 8,
  },
  priceContent: {
    marginHorizontal: 8,
    flexDirection: 'row',
    marginVertical: 5,
    alignItems: 'center',
  },
  price: {
    color: '#F5F4F8',
    fontSize: 16,
    fontFamily: 'Lato-Bold',
    marginLeft: 2,
  },
  stay: {
    color: '#F5F4F8',
    fontSize: 10,
    fontFamily: 'Lato-Regular',
  },
  images: {
    width: screenWidth / 2 - 43.5,
    height: 180,
    borderRadius: 25,
  },
});

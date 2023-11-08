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
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import FavoriteButton from '@/components/FavoriteButton';
import {EstateItems, FeaturedProps} from '@/utils/interface';

const FeaturedEstates: React.FC<FeaturedProps> = ({navigation}) => {
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
        location: 'Đà Nẵng, Việt Nam',
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
        location: 'Đà Nẵng, Việt Nam',
        star_rating: 4.7,
        price: 160,
        bathroom: 2,
        bedroom: 3,
        floors: 2,
        time: 'month',
        favorite: false,
      },
    },
  ];
  const RenderItems = ({item}: {item: EstateItems}) => {
    return (
      <View style={styles.cardItem}>
        <View>
          <FavoriteButton favorite={item.assets.favorite} />
          <Image
            source={item.assets.images[0]}
            style={styles.images}
          />
        </View>

        <TouchableOpacity
          style={styles.cardContent}
          onPress={() => navigation.push('EstateDetail', {estate: item})}
        >
          <Text style={styles.cardName}>{item.assets.name}</Text>
          <View style={styles.ratingView}>
            <Entypo
              name="star"
              color={'#FFC42D'}
              size={10}
            />
            <Text style={styles.rating}>{item.assets.star_rating}</Text>
          </View>
          <View style={styles.ratingView}>
            <FontAwesome6
              name="location-dot"
              color={'#234F68'}
              size={9}
            />
            <Text style={styles.location}>{item.assets.location}</Text>
          </View>
          <View style={styles.priceView}>
            <Text style={styles.price}>$ </Text>
            <Text style={styles.price}>{item.assets.price}</Text>
            <Text style={styles.stay}> /</Text>
            <Text style={styles.stay}>{item.assets.time}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View>
      <View style={styles.itemHeader}>
        <Text style={styles.textHeader}>{t('featured_estates')}</Text>
        <Text style={styles.textViewAll}>{t('view_all')}</Text>
      </View>
      <View style={styles.listFeatured}>
        <FlatList
          data={data}
          renderItem={(item) => RenderItems(item)}
          keyExtractor={(item) => item.id.toString()}
          horizontal
        />
      </View>
    </View>
  );
};

export default FeaturedEstates;

const styles = StyleSheet.create({
  listFeatured: {
    flexDirection: 'row',
    marginLeft: 24,
    marginBottom: 24,
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  textHeader: {
    fontFamily: 'Lato-Bold',
    fontSize: 18,
    color: '#252B5C',
  },
  textViewAll: {
    fontSize: 12,
    color: '#234F68',
    fontFamily: 'Lato-Regular',
  },
  images: {
    width: 130,
    height: 140,
    borderRadius: 25,
  },
  cardItem: {
    width: 268,
    height: 156,
    backgroundColor: '#F5F4F8',
    borderRadius: 25,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 8,
    marginRight: 10,
  },
  cardContent: {
    width: 108,
    marginLeft: 12,
    marginTop: 8,
  },
  cardName: {
    fontFamily: 'Lato-Bold',
    fontSize: 12,
    color: '#252B5C',
  },
  ratingView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  rating: {
    color: '#53587A',
    fontSize: 10,
    fontFamily: 'Lato-Bold',
    marginLeft: 2,
  },
  location: {
    color: '#53587A',
    fontFamily: 'Lato-Regular',
    marginLeft: 2,
    fontSize: 10,
  },
  priceView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 29,
  },
  price: {
    color: '#252B5C',
    fontSize: 16,
    fontFamily: 'Lato-Bold',
    marginLeft: 2,
  },
  stay: {
    color: '#252B5C',
    fontSize: 10,
    fontFamily: 'Lato-Regular',
  },
});

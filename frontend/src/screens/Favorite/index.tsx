import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
} from 'react-native';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {Swipeable} from 'react-native-gesture-handler';
import {Empty} from '@/assets/Svg';
import {screenWidth} from '@/themes/Responsive';
import {getImages} from '@/assets/Images';
import FavoriteButton from '@/components/FavoriteButton';
import {collectStoredAnnotations} from 'mobx/dist/internal';

const Favorite = () => {
  const {t} = useTranslation();
  const [length, setLength] = useState(1);
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
  ];

  const FavoriteItems = () => {
    return data.map((item: any, index: any) => {
      return (
        <Swipeable
          renderRightActions={() => RightSwipe(item)}
          key={index}
          overshootRight={false}
        >
          <View style={styles.itemView}>
            <View style={styles.contentView}>
              <View style={styles.btnFavoriteView}>
                <FavoriteButton favorite={true} />
              </View>

              <Image
                source={item.assets.images[0]}
                style={styles.imgItem}
              />
              <View style={styles.rightView}>
                <Text style={styles.nameEstate}>{item.assets.name}</Text>
                <View style={styles.ratingView}>
                  <Entypo
                    name="star"
                    color={'rgba(35,79,104,.42)'}
                    size={12}
                  />
                  <Text style={styles.rating}>{item.assets.star_rating}</Text>
                </View>
                <View style={styles.ratingView}>
                  <FontAwesome6
                    name="location-dot"
                    color={'#234F68'}
                    size={12}
                  />
                  <Text style={styles.location}>{item.assets.location}</Text>
                </View>
                <View style={styles.priceView}>
                  <Text style={styles.price}>$ </Text>
                  <Text style={styles.price}>{item.assets.price}</Text>
                  <Text style={styles.stay}> /</Text>
                  <Text style={styles.stay}>{item.assets.time}</Text>
                </View>
              </View>
            </View>
          </View>
        </Swipeable>
      );
    });
  };
  const handleUnFavorite = (item: any) => {
    console.log(item.id);
  };
  const RightSwipe = (item: any) => {
    return (
      <TouchableOpacity
        style={styles.DeleteView}
        onPress={() => handleUnFavorite(item)}
      >
        <View style={styles.trashIcon}>
          <Feather
            name="trash"
            color={'#FFFFFF'}
            size={20}
          />
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.component}>
      <Text style={styles.favoriteTitle}>{t('my_favorite')}</Text>
      <TouchableOpacity style={styles.btnDelete}>
        <Feather
          name="trash"
          color={'#252B5C'}
          size={15}
        />
      </TouchableOpacity>
      <Text style={styles.txtEstates}>0 estates</Text>
      {length === 0 ? (
        <View style={styles.emptyView}>
          <Empty />
          <Text style={styles.titleNormal}>{t('your_favorite')}</Text>
          <Text style={styles.titleHighlight}>{t('empty')}</Text>
        </View>
      ) : (
        <FavoriteItems />
      )}
    </View>
  );
};

export default Favorite;

const styles = StyleSheet.create({
  component: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  favoriteTitle: {
    color: '#252B5C',
    fontFamily: 'Lato-Bold',
    fontSize: 20,
    marginTop: 35,
    marginBottom: 20,
    textAlign: 'center',
  },
  btnDelete: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    position: 'absolute',
    top: 24,
    right: 24,
    borderRadius: 25,
    backgroundColor: '#F5F4F8',
    zIndex: 1,
  },
  txtEstates: {
    color: '#252B5C',
    fontFamily: 'Lato-Medium',
    fontSize: 20,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 24,
  },
  emptyView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleNormal: {
    fontFamily: 'Lato-Medium',
    color: '#252B5C',
    fontSize: 30,
    marginTop: 14,
  },
  titleHighlight: {
    fontFamily: 'Lato-Bold',
    color: '#1F4C6B',
    fontSize: 30,
  },
  itemView: {
    width: screenWidth - 48,
    height: 156,
    backgroundColor: '#F5F4F8',
    marginLeft: 24,
    marginBottom: 10,
    borderRadius: 25,
  },
  contentView: {
    flexDirection: 'row',
  },
  btnFavoriteView: {
    left: 8,
    top: 8,
  },
  imgItem: {
    width: screenWidth / 2 - 16,
    height: 140,
    borderRadius: 18,
    margin: 8,
  },
  rightView: {
    marginLeft: 16,
    marginTop: 16,
  },
  nameEstate: {
    fontFamily: 'Lato-Bold',
    color: '#252B5C',
    fontSize: 16,
    width: screenWidth / 2 - 24 - 48,
  },
  ratingView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
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
    fontSize: 14,
    width: screenWidth / 2 - 24 - 48 - 16,
  },
  priceView: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
  },
  price: {
    color: '#252B5C',
    fontSize: 18,
    fontFamily: 'Lato-Bold',
    marginLeft: 2,
  },
  stay: {
    color: '#252B5C',
    fontSize: 12,
    fontFamily: 'Lato-Regular',
  },
  DeleteView: {
    backgroundColor: '#234F68',
    justifyContent: 'center',
    alignItems: 'center',
    height: 156,
    width: 118,
    marginLeft: -50,
    marginRight: 24,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
  },
  trashIcon: {
    left: 18,
  },
});

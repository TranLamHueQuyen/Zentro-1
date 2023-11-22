import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import FavoriteButton from '@/components/FavoriteButton';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {EstateItems} from '@/utils/interface';
import {screenHeight, screenWidth} from '@/themes/Responsive';
import {push} from '@/navigation/NavigationUtils';
import {getImages} from '@/assets/Images';
import {Pencil_Icon} from '@/assets/Svg';
import {t} from 'i18next';

const data = [
  {
    id: 1,
    name: 'Hung',
    avatar: getImages().picture_1,
    address: 'Việt Nam',
    phone: '123456789',
    email: 'admin@gmail.com',
    assets: {
      images: [getImages().picture_1],
      name: 'Sky Dandelions Apartment',
      location: 'K814 Tran Cao Van,TP.Đà Nẵng, Việt Nam',
      check_in: '11/28/2021',
      check_out: '01/28/2022',
      owner_name: 'John',
      type: 'Rent',
      period_time: '2 month',
      discount: '88',
      total: '31,250',
      favorite: true,
    },
  },
];
const RenderItems = ({item}: {item: any}) => {
  return (
    <View style={styles.cardItem}>
      <View style={styles.btnFavorite}>
        <FavoriteButton favorite={item.assets.favorite} />
      </View>

      <View style={styles.priceView}>
        <View style={styles.priceContent}>
          <Text style={styles.price}>{t('rent')}</Text>
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
          <View style={styles.locationView}>
            <AntDesign
              name="clockcircle"
              color={'#8BC83F'}
              size={10}
            />
            <Text style={styles.location}>{item.assets.check_in}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const Transaction = () => {
  const {t} = useTranslation();
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.textTitle}>2 {t('transactions')}</Text>
        <View style={styles.viewRender}>
          {data.map((item: any, index: number) => {
            return (
              <RenderItems
                item={item}
                key={index}
              />
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};

export default Transaction;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    width: screenWidth,
    height: screenHeight,
    marginBottom: 332,
  },
  textTitle: {
    textTransform: 'lowercase',
    color: '#252B5C',
    fontFamily: 'Lato-Medium',
    fontSize: 18,
    marginTop: 30,
  },
  viewRender: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  btnFavorite: {
    position: 'absolute',
    right: 48,
    top: 8,
  },
  cardItem: {
    width: screenWidth / 2 - 27.5,
    backgroundColor: '#F5F4F8',
    borderRadius: 25,
    marginTop: 20,
    padding: 8,
    marginRight: 5,
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
    width: screenWidth / 2 - 76,
  },
  priceView: {
    top: 154,
    right: 16,
    position: 'absolute',
    zIndex: 1,
    backgroundColor: 'rgba(35,79,104,0.69)',
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
    fontSize: 12,
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
  viewButton: {
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 1,
  },
});

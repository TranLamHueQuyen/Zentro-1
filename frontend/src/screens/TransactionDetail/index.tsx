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
import BackButton from '../../components/BackButton';
import FavoriteButton from '../../components/FavoriteButton';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {screenWidth} from '@/themes/Responsive';
import {getImages} from '@/assets/Images';
import {navigate} from '@/navigation/NavigationUtils';

const TransactionDetail = ({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) => {
  const {transaction} = route.params;
  const {t} = useTranslation();

  const EstateView = () => {
    return (
      <View style={styles.estateView}>
        <View style={styles.estateContent}>
          <FavoriteButton favorite={transaction.assets.favorite} />
          <Image
            source={{uri: transaction.assets.images[0]}}
            style={styles.estateImage}
          />
          <View style={styles.cardContent}>
            <Text style={styles.cardName}>{transaction.assets.name}</Text>

            <View style={styles.ratingView}>
              <FontAwesome6
                name="location-dot"
                color={'#234F68'}
                size={9}
              />
              <Text style={styles.location}>{transaction.assets.location}</Text>
            </View>
          </View>
          <View style={styles.typeView}>
            <Text style={styles.typeText}>{transaction.assets.type}</Text>
          </View>
        </View>
      </View>
    );
  };

  const TransactionDetail = () => {
    return (
      <View style={styles.transactionView}>
        <Text style={styles.transactionText}>{t('transaction_detail')}</Text>
        <View style={styles.tranDetail}>
          <View style={styles.tranView}>
            <View style={styles.tranContent}>
              <Text style={styles.tranText}>{t('check_in')}</Text>
              <Text style={styles.tranText}>{transaction.assets.check_in}</Text>
            </View>
            <View style={styles.tranContent}>
              <Text style={styles.tranText}>{t('check_out')}</Text>
              <Text style={styles.tranText}>
                {transaction.assets.check_out}
              </Text>
            </View>
            <View style={styles.tranContent}>
              <Text style={styles.tranText}>{t('owner_name')}</Text>
              <Text style={styles.tranText}>
                {transaction.assets.owner_name}
              </Text>
            </View>
            <View style={styles.tranContent}>
              <Text style={styles.tranText}>{t('transaction_type')}</Text>
              <Text style={styles.tranText}>{transaction.assets.type}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  const PaymentDetail = () => {
    return (
      <View style={styles.transactionView}>
        <Text style={styles.transactionText}>{t('payment_detail')}</Text>
        <View style={styles.payDetail}>
          <View style={styles.tranView}>
            <View style={styles.tranContent}>
              <Text style={styles.tranText}>{t('period_time')}</Text>
              <Text style={styles.tranText}>
                {transaction.assets.period_time}
              </Text>
            </View>
            <View style={styles.tranContent}>
              <Text style={styles.tranText}>{t('monthly_payment')}</Text>
              <Text style={styles.tranText}>
                {transaction.assets.check_out}
              </Text>
            </View>
            <View style={styles.tranContent}>
              <Text style={styles.tranText}>{t('discount')}</Text>
              <Text style={styles.tranText}>
                -$ {transaction.assets.discount}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.payView}>
          <View style={styles.payContent}>
            <Text style={styles.payText}>{t('total')}</Text>
            <Text style={styles.payText}>$ {transaction.assets.total}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.component}>
      <BackButton />
      <View style={styles.titleView}>
        <Text style={styles.transactionTitle}>{t('transaction_detail')}</Text>
      </View>
      <ScrollView>
        <EstateView />
        <TransactionDetail />
        <PaymentDetail />
        <View style={styles.transactionView}>
          <Text style={styles.transactionText}>{t('payment_method')}</Text>
          <View style={styles.tranDetail}>
            <Text style={styles.methodText}>{t('direct_transaction')}</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.btnReview}
          onPress={() => navigate({name: 'AddReview'})}
        >
          <Text style={styles.textReview}>{t('add_review')}</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default TransactionDetail;

const styles = StyleSheet.create({
  component: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  transactionTitle: {
    color: '#252B5C',
    fontFamily: 'Lato-Bold',
    fontSize: 20,
    marginTop: 35,
    marginBottom: 20,
  },
  titleView: {
    alignItems: 'center',
  },
  estateView: {
    marginHorizontal: 24,
    marginTop: 35,
    borderRadius: 20,
    backgroundColor: '#F5F4F8',
  },
  estateContent: {
    marginVertical: 8,
    marginLeft: 8,
    flexDirection: 'row',
  },
  estateImage: {
    height: 140,
    width: screenWidth / 2 - 24,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  cardContent: {
    width: screenWidth / 2 - 68,
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
  },

  location: {
    color: '#53587A',
    fontFamily: 'Lato-Regular',
    marginLeft: 2,
    fontSize: 12,
  },
  typeView: {
    width: 70,
    height: 47,
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 8,
    right: 16,
    position: 'absolute',
  },
  typeText: {
    color: '#252B5C',
    fontFamily: 'Lato-Medium',
  },
  transactionText: {
    color: '#252B5C',
    fontFamily: 'Lato-Bold',
    fontSize: 18,
  },
  transactionView: {
    marginLeft: 24,
    marginTop: 35,
  },
  tranDetail: {
    width: screenWidth - 48,
    borderWidth: 1,
    borderColor: '#ECEDF3',
    borderRadius: 25,
    marginTop: 24,
  },
  tranView: {
    width: screenWidth - 80,
    marginHorizontal: 16,
    marginBottom: 24,
    marginTop: 9,
  },
  tranContent: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  tranText: {
    color: '#53587A',
    fontFamily: 'Lato-Regular',
    fontSize: 14,
    marginTop: 15,
  },
  payDetail: {
    width: screenWidth - 48,
    borderWidth: 1,
    borderColor: '#ECEDF3',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: 24,
  },
  payView: {
    backgroundColor: '#F5F4F8',
    width: screenWidth - 48,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  payContent: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: 24,
    marginHorizontal: 16,
  },
  payText: {
    color: '#252B5C',
    fontFamily: 'Lato-Bold',
    fontSize: 18,
  },
  payImages: {
    width: 20,
    height: 20,
  },
  methodView: {
    width: screenWidth - 80,
    marginLeft: 15,
    marginVertical: 15,
    flexDirection: 'row',
  },

  methodText: {
    color: '#53587A',
    marginLeft: 15,
    fontFamily: 'Lato-Regular',
    fontSize: 15,
    marginVertical: 15,
  },
  btnReview: {
    width: screenWidth - 100,
    height: 70,
    backgroundColor: '#8BC83F',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 50,
    marginTop: 35,
    marginBottom: 24,
  },
  textReview: {
    color: '#FFFFFF',
    fontFamily: 'Lato-Bold',
    fontSize: 16,
  },
});

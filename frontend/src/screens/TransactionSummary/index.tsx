import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext, useMemo, useRef, useState} from 'react';
import {useTranslation} from 'react-i18next';
import FavoriteButton from '@/components/FavoriteButton';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {screenWidth} from '@/themes/Responsive';
import {BackButton} from '@/components';
import {navigate, push} from '@/navigation/NavigationUtils';
import BottomSheet, {BottomSheetBackdrop} from '@gorhom/bottom-sheet';
import {Error, Success} from '@/assets/Svg';
import Loading from '@/components/Loading';
import moment from 'moment';
import axios from 'axios';
import {AuthContext} from '@/context/AuthContext';
import {Config} from '@/config';

const TransactionSummary = ({route}: any) => {
  const {data, checkIn, checkOut, note} = route.params;
  const {userToken, idUser} = useContext(AuthContext);
  const fromDate = moment(checkIn, 'DD/MM/YYYY');
  const toDate = moment(checkOut, 'DD/MM/YYYY');
  const dateInMonth = toDate.daysInMonth();
  const totalDate = toDate.diff(fromDate, 'days');
  const totalMoney = ((data.price.rent / dateInMonth) * totalDate).toFixed(2);
  const {t} = useTranslation();
  const [success, setSuccess] = useState(true);
  const [loading, setLoading] = useState(false);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['50%'], []);

  const handleClosePress = () => bottomSheetRef.current?.close();

  const handleBookRoom = () => {
    setLoading(true);
    axios
      .post(
        `${Config.API_URL}/api/payment`,
        {
          checkIn,
          checkOut,
          price: totalMoney,
          note,
          type: 'rent',
          discount: 0,
          paymentMethod: 'Direct Transaction',
          estateId: data._id,
          estateUserId: data.user._id,
        },
        {
          headers: {Authorization: userToken},
        },
      )
      .then((res) => {
        console.log(res);
        setLoading(false);
        setSuccess(true);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
        setSuccess(false);
      })
      .finally(() => bottomSheetRef.current?.expand());
  };

  const EstateView = () => {
    return (
      <View style={styles.estateView}>
        <View style={styles.estateContent}>
          {/* <FavoriteButton favorite={estate.assets.favorite} /> */}
          <Image
            source={{uri: data.images[0]}}
            style={styles.estateImage}
          />
          <View style={styles.cardContent}>
            <Text style={styles.cardName}>{data.name}</Text>

            <View style={styles.ratingView}>
              <FontAwesome6
                name="location-dot"
                color={'#234F68'}
                size={9}
              />
              <Text style={styles.location}>
                {data.address.road}, {data.address.city}
              </Text>
            </View>
          </View>
          <View style={styles.typeView}>
            <Text style={styles.typeText}>Rent</Text>
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
              <Text style={styles.tranText}>{totalDate} Day</Text>
            </View>
            <View style={styles.tranContent}>
              <Text style={styles.tranText}>{t('monthly_payment')}</Text>
              <Text style={styles.tranText}>{checkOut}</Text>
            </View>
            <View style={styles.tranContent}>
              <Text style={styles.tranText}>{t('discount')}</Text>
              <Text style={styles.tranText}>-$ 0</Text>
            </View>
          </View>
        </View>
        <View style={styles.payView}>
          <View style={styles.payContent}>
            <Text style={styles.payText}>{t('total')}</Text>
            <Text style={styles.payText}>$ {totalMoney}</Text>
          </View>
        </View>
        <View style={{marginTop: 35}}>
          <Text style={styles.transactionText}>{t('payment_method')}</Text>
        </View>
        <View style={styles.tranDetail}>
          <Text style={styles.methodText}>{t('direct_transaction')}</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.component}>
      {loading && <Loading />}
      <View style={{zIndex: 0}}>
        <BackButton />
      </View>
      <View style={styles.titleView}>
        <Text style={styles.transactionTitle}>{t('transaction_summary')}</Text>
      </View>
      <EstateView />
      <PaymentDetail />

      <View
        style={{
          alignItems: 'center',
          position: 'absolute',
          bottom: 24,
          left: 48,
        }}
      >
        <TouchableOpacity
          onPress={handleBookRoom}
          style={styles.btnNext}
          activeOpacity={0.7}
        >
          <Text style={styles.txtNext}>{t('book_room')}</Text>
        </TouchableOpacity>
      </View>
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose
        backdropComponent={(props) => (
          <BottomSheetBackdrop
            {...props}
            appearsOnIndex={0}
            disappearsOnIndex={-1}
          />
        )}
      >
        {success ? (
          <View style={styles.contentContainer}>
            <Success />
            <Text style={[styles.titleNormal, {marginTop: 24}]}>
              {t('your_trans')}
            </Text>
            <Text style={styles.titleHighlight}>{t('success')}</Text>
            <View style={styles.btnModalGroup}>
              <TouchableOpacity
                style={styles.btnFinishModal}
                onPress={() => navigate({name: 'HomeScreen'})}
              >
                <Text style={styles.txtFinishModal}>
                  {t('continue_exploring')}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View style={styles.contentContainer}>
            <Error />
            <Text style={[styles.titleNormal, {marginTop: 24}]}>
              {t('aw_snap')}
            </Text>
            <Text style={styles.titleHighlight}>{t('error')}</Text>
            <View style={styles.btnModalGroup}>
              <TouchableOpacity
                style={styles.btnAddMoreModal}
                onPress={handleClosePress}
              >
                <Text style={styles.txtAddMoreModal}>{t('close')}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnRetry}>
                <Text style={styles.txtFinishModal}>{t('retry')}</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </BottomSheet>
    </View>
  );
};

export default TransactionSummary;

const styles = StyleSheet.create({
  component: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  titleView: {
    alignItems: 'center',
  },
  transactionTitle: {
    color: '#252B5C',
    fontFamily: 'Lato-Bold',
    fontSize: 20,
    marginTop: 35,
    marginBottom: 20,
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
  transactionText: {
    color: '#252B5C',
    fontFamily: 'Lato-Bold',
    fontSize: 18,
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
  methodText: {
    color: '#53587A',
    marginLeft: 15,
    fontFamily: 'Lato-Regular',
    fontSize: 15,
    marginVertical: 15,
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
  btnNext: {
    flexDirection: 'row',
    width: screenWidth - 96,
    height: 63,
    backgroundColor: '#8BC83F',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtNext: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Lato-Bold',
    padding: 6,
  },
  contentContainer: {
    alignItems: 'center',
    flex: 1,
  },
  titleNormal: {
    fontFamily: 'Lato-Medium',
    color: '#000000',
    fontSize: 30,
  },
  titleHighlight: {
    fontFamily: 'Lato-Bold',
    color: '#252B5C',
    fontSize: 30,
  },
  btnModalGroup: {
    flexDirection: 'row',
    bottom: 24,
    position: 'absolute',
  },
  btnAddMoreModal: {
    width: screenWidth / 2 - 29,
    height: 70,
    backgroundColor: '#F5F4F8',
    borderRadius: 10,
    marginRight: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnRetry: {
    width: screenWidth / 2 - 29,
    height: 70,
    backgroundColor: '#8BC83F',
    borderRadius: 10,
    marginRight: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnFinishModal: {
    width: screenWidth - 100,
    height: 70,
    backgroundColor: '#8BC83F',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtAddMoreModal: {
    color: '#252B5C',
    fontFamily: 'Lato-Bold',
    fontSize: 18,
  },
  txtFinishModal: {
    color: '#FFFFFF',
    fontFamily: 'Lato-Bold',
    fontSize: 18,
  },
});

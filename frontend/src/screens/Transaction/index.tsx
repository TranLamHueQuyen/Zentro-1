import {
  Image,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {BackButton} from '@/components';
import {useTranslation} from 'react-i18next';
import {screenHeight, screenWidth} from '@/themes/Responsive';
import FavoriteButton from '@/components/FavoriteButton';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Feather from 'react-native-vector-icons/Feather';
import {Calendar} from 'react-native-calendars';
import moment from 'moment';

const Transaction = ({route}: any) => {
  const {estate} = route.params;
  const {t} = useTranslation();
  const [modalVisible, setModalVisible] = useState(false);
  const [check, setCheck] = useState(false);

  const [selectedIn, setSelectedIn] = useState('');
  const [selectedOut, setSelectedOut] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const handleCheckIn = (day: any) => {
    setSelectedIn(day.dateString);
    setCheckIn(moment(day.dateString).format('DD/MM/YYYY'));
    setModalVisible(false);
  };
  const handleCheckOut = (day: any) => {
    setSelectedOut(day.dateString);
    setCheckOut(moment(day.dateString).format('DD/MM/YYYY'));
    setModalVisible(false);
  };

  const EstateView = () => {
    return (
      <View style={styles.estateView}>
        <View style={styles.estateContent}>
          <FavoriteButton favorite={estate.assets.favorite} />
          <Image
            source={estate.assets.images[0]}
            style={styles.estateImage}
          />
          <View style={styles.cardContent}>
            <Text style={styles.cardName}>{estate.assets.name}</Text>

            <View style={styles.ratingView}>
              <FontAwesome6
                name="location-dot"
                color={'#234F68'}
                size={9}
              />
              <Text style={styles.location}>{estate.assets.location}</Text>
            </View>
          </View>
          <View style={styles.typeView}>
            <Text style={styles.typeText}>{estate.assets.type}</Text>
          </View>
        </View>
      </View>
    );
  };
  const PeriodView = () => {
    return (
      <View style={styles.periodView}>
        <Text style={styles.transactionText}>{t('period')}</Text>
        <View style={styles.contentCheckIn}>
          <TouchableOpacity
            style={styles.checkInVIew}
            onPress={() => {
              setModalVisible(true);
              setCheck(true);
            }}
          >
            <View style={styles.contentCheckIn}>
              <Feather
                name="calendar"
                color={'#252B5C'}
                size={15}
              />
              <Text style={styles.txtCheckIn}>
                {checkIn !== '' ? checkIn : t('check_in')}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.checkInVIew, {marginLeft: 10}]}
            onPress={() => {
              setModalVisible(true);
              setCheck(false);
            }}
          >
            <View style={styles.contentCheckIn}>
              <Feather
                name="calendar"
                color={'#252B5C'}
                size={15}
              />
              <Text style={styles.txtCheckIn}>
                {checkOut !== '' ? checkOut : t('check_out')}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
        >
          <TouchableOpacity
            style={{
              flex: 1,
              backgroundColor: 'rgba(31,76,107,.69)',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => setModalVisible(false)}
            activeOpacity={1}
          >
            <View
              style={{
                width: screenWidth - 48,
                borderRadius: 25,
              }}
            >
              {check ? (
                <Calendar
                  style={{
                    borderRadius: 25,
                  }}
                  onDayPress={(day) => handleCheckIn(day)}
                  markedDates={{
                    [selectedIn]: {
                      selected: true,
                      selectedColor: '#8BC83F',
                    },
                  }}
                />
              ) : (
                <Calendar
                  style={{
                    borderRadius: 25,
                  }}
                  onDayPress={(day) => handleCheckOut(day)}
                  markedDates={{
                    [selectedOut]: {
                      selected: true,
                      selectedColor: '#8BC83F',
                    },
                  }}
                />
              )}
            </View>
          </TouchableOpacity>
        </Modal>
      </View>
    );
  };
  return (
    <View style={styles.component}>
      <BackButton />
      <View style={styles.titleView}>
        <Text style={styles.transactionTitle}>{t('transaction_detail')}</Text>
      </View>
      <EstateView />
      <PeriodView />
      <View style={styles.radialGradient}>
        <View style={styles.radialColor}></View>
      </View>
    </View>
  );
};

export default Transaction;

const styles = StyleSheet.create({
  radialGradient: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'transparent',
    overflow: 'hidden',
  },
  radialColor: {
    flex: 1,
    backgroundColor: '#1A1F71',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
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
    marginBottom: 20,
  },
  periodView: {
    marginTop: 35,
    marginLeft: 24,
  },
  checkInVIew: {
    width: screenWidth / 2 - 29,
    height: 70,
    backgroundColor: '#F5F4F8',
    borderRadius: 20,
    justifyContent: 'center',
    paddingLeft: 18.5,
  },
  txtCheckIn: {
    color: '#A1A5C1',
    fontFamily: 'Lato-Regular',
    fontSize: 14,
    marginLeft: 12.5,
  },
  contentCheckIn: {
    flexDirection: 'row',
  },
});

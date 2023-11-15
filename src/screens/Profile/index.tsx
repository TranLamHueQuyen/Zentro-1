import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Pencil_Icon, Setting_Icon} from '@/assets/Svg';
import {getImages} from '@/assets/Images';
import {screenWidth} from '@/themes/Responsive';
import Octicons from 'react-native-vector-icons/Octicons';
import {ProfileProps} from '@/utils/interface';

const Profile: React.FC<ProfileProps> = ({navigation}) => {
  const {t} = useTranslation();
  const handleEmailPress = () => {
    Linking.openURL(`mailto:hthung0101@email.com`);
  };
  return (
    <View style={styles.component}>
      <Text style={styles.profileTitle}>{t('profile')}</Text>
      <TouchableOpacity style={styles.btnSetting}>
        <Setting_Icon />
      </TouchableOpacity>
      <View>
        <Image
          style={styles.avatar}
          source={getImages().picture_1}
        />
        <View style={styles.btnEdit}>
          <Pencil_Icon />
        </View>
      </View>
      <Text style={styles.username}>Name</Text>
      <Text
        style={styles.email}
        onPress={handleEmailPress}
      >
        hthung0101@email.com
      </Text>
      <View style={styles.information}>
        <TouchableOpacity style={styles.btnListing}>
          <Text style={styles.username}>30</Text>
          <Text style={styles.listingText}>{t('listings')}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnListing}>
          <Text style={styles.username}>12</Text>
          <Text style={styles.listingText}>{t('sold')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnListing}
          onPress={() => navigation.navigate('AllReview')}
        >
          <Text style={styles.username}>28</Text>
          <Text style={styles.listingText}>{t('reviews')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  component: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  profileTitle: {
    color: '#252B5C',
    fontFamily: 'Lato-Bold',
    fontSize: 20,
    marginTop: 35,
    marginBottom: 20,
  },
  btnSetting: {
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
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  btnEdit: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30,
    position: 'absolute',
    bottom: 0,
    right: 0,
    borderRadius: 25,
    backgroundColor: '#234F68',
    zIndex: 1,
  },
  username: {
    color: '#252B5C',
    fontFamily: 'Lato-Bold',
    fontSize: 16,
    marginTop: 12,
  },
  email: {
    color: '#53587A',
    fontFamily: 'Lato-Regular',
    marginTop: 4,
    textDecorationLine: 'underline',
  },
  information: {
    flexDirection: 'row',
    marginLeft: -10,
  },
  listingText: {
    color: '#53587A',
    fontFamily: 'Lato-Regular',
    marginTop: 7,
  },
  btnListing: {
    marginTop: 20,
    width: screenWidth / 3 - 24,
    height: 70,
    borderRadius: 18,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ECEDF3',
    marginLeft: 10,
  },
});

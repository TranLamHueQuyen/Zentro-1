import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {BackButton} from '@/components';
import {getImages} from '@/assets/Images';
import {Swipeable} from 'react-native-gesture-handler';
import {Empty} from '@/assets/Svg';
import {screenWidth} from '@/themes/Responsive';
import {useTranslation} from 'react-i18next';
import {navigate} from '@/navigation/NavigationUtils';

const Message = () => {
  const {t} = useTranslation();
  const [length, setLength] = useState(1);
  const [online, setOnline] = useState(true);
  const [seen, setSeen] = useState(true);

  const FavoriteItems = () => {
    return (
      <View>
        <Swipeable
          renderRightActions={() => RightSwipe(1)}
          overshootRight={false}
        >
          <TouchableOpacity
            style={styles.itemView}
            onPress={() => navigate({name: 'MessagesDetail'})}
          >
            <View style={styles.contentView}>
              <View>
                <View style={styles.viewAvatar}>
                  <Image
                    source={getImages().picture_1}
                    style={styles.avatar}
                  />
                </View>
                <View style={styles.viewIcon}>
                  <View style={styles.iconOnline} />
                </View>
              </View>

              <View style={styles.rightView}>
                <Text style={styles.name}>Perry</Text>
                <Text style={styles.text}>
                  tempor incididunt ut labore et dolore adssd asdffg asad asd
                </Text>
              </View>
              <View style={styles.viewTime}>
                <Text style={styles.time}>10.45</Text>
                <View style={styles.btnSeen}>
                  <Text style={styles.btnSeenText}>2</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </Swipeable>
        <Swipeable
          renderRightActions={() => RightSwipe(1)}
          overshootRight={false}
        >
          <View style={styles.itemView}>
            <View style={styles.contentView}>
              <View>
                <View style={styles.viewAvatar}>
                  <Image
                    source={getImages().picture_1}
                    style={styles.avatar}
                  />
                </View>
                {!online && (
                  <View style={styles.viewIcon}>
                    <View style={styles.iconOnline} />
                  </View>
                )}
              </View>

              <View style={styles.rightView}>
                <Text style={styles.name}>Perry</Text>
                <Text style={styles.textSeen}>
                  tempor incididunt ut labore et dolore adssd asdffg asad asd
                </Text>
              </View>
              <View style={styles.viewTime}>
                <Text style={styles.time}>2 Day ago</Text>
                {!seen && (
                  <View style={styles.btnSeen}>
                    <Text style={styles.btnSeenText}>2</Text>
                  </View>
                )}
              </View>
            </View>
          </View>
        </Swipeable>
      </View>
    );
  };
  const handleUnFavorite = (item: any) => {
    console.log(item);
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
      <BackButton />
      <Text style={styles.favoriteTitle}>{t('message')}</Text>
      <TouchableOpacity style={styles.btnDelete}>
        <Feather
          name="trash"
          color={'#252B5C'}
          size={15}
        />
      </TouchableOpacity>
      <Text style={styles.txtAllChat}>All chats</Text>
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

export default Message;

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
  txtAllChat: {
    color: '#252B5C',
    fontFamily: 'Lato-Bold',
    fontSize: 22,
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
    height: 70,
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
  viewAvatar: {
    backgroundColor: '#FFFF',
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    margin: 10,
  },
  avatar: {
    width: 47,
    height: 47,
    borderRadius: 25,
  },
  viewIcon: {
    backgroundColor: '#FFFFFF',
    width: 12,
    height: 12,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 12,
    top: 8,
    borderRadius: 12,
  },
  iconOnline: {
    backgroundColor: '#8BC83F',
    width: 8,
    height: 8,
    borderRadius: 8,
  },
  rightView: {
    marginTop: 16,
  },
  name: {
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
  text: {
    color: '#252B5C',
    fontFamily: 'Lato-Bold',
    marginLeft: 2,
    fontSize: 14,
    width: screenWidth / 2,
    height: 15,
    marginTop: 4,
  },
  textSeen: {
    color: '#53587A',
    fontFamily: 'Lato-Medium',
    marginLeft: 2,
    fontSize: 14,
    width: screenWidth / 2,
    height: 15,
    marginTop: 4,
  },
  viewTime: {
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 10,
    top: 20,
  },
  time: {
    color: '#A1A5C1',
    fontSize: 12,
    fontFamily: 'Lato-Regular',
    marginRight: 2,
  },
  btnSeen: {
    height: 16,
    width: 16,
    backgroundColor: '#8BC83F',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 3,
  },
  btnSeenText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontFamily: 'Lato-Regular',
    marginRight: 2,
  },
  DeleteView: {
    backgroundColor: '#234F68',
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
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

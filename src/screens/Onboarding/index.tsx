import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Animated,
  Pressable,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {getImages} from '@/assets/Images';
import Paginator from '@/components/Paginator';
import OptionLogin from '../OptionLogin';
import {useTranslation} from 'react-i18next';
import {screenHeight, screenWidth} from '@/themes/Responsive';
import Modal from 'react-native-modal';
import Entypo from 'react-native-vector-icons/Entypo';

const Onboarding = () => {
  const {t} = useTranslation();
  const slides = [
    {
      key: 1,
      title: t('onboarding.description1.title'),
      text: t('onboarding.description1.text'),
      image: getImages().picture_1,
    },
    {
      key: 2,
      title: t('onboarding.description2.title'),
      text: t('onboarding.description2.text'),
      image: getImages().picture_2,
    },
    {
      key: 3,
      title: t('onboarding.description3.title'),
      text: t('onboarding.description3.text'),
      image: getImages().picture_3,
    },
  ];
  const [skip, setSkip] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const slidesRef = useRef<FlatList>(null);

  const viewableItemsChanged = useRef(({viewableItems}: any) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  const scrollTo = () => {
    if (currentIndex < slides.length - 1) {
      slidesRef.current?.scrollToIndex({index: currentIndex + 1});
    } else {
      setSkip(true);
    }
  };

  const renderItem = ({item}: any) => {
    return (
      <View style={styles.slide}>
        <View style={styles.viewTitle}>
          <Text>
            {' '}
            {item.title.split(' ').map((item: any, index: any) => {
              if (
                item === 'tốt' ||
                item === 'nhất' ||
                item === 'một' ||
                item === 'lần' ||
                item === 'chạm' ||
                item === 'hoàn' ||
                item === 'the' ||
                item === 'best' ||
                item === 'one' ||
                item === 'click' ||
                item === 'perfect' ||
                item === 'choice'
              ) {
                return (
                  <Text
                    key={index}
                    style={styles.titleHighlight}
                  >
                    {item}&nbsp;
                  </Text>
                );
              } else {
                return (
                  <Text
                    key={index}
                    style={styles.titleNormal}
                  >
                    {item}&nbsp;
                  </Text>
                );
              }
            })}
          </Text>
        </View>
        <View style={styles.viewText}>
          <Text style={styles.text}>{item.text}</Text>
        </View>
        <Image
          source={item.image}
          style={styles.images}
        />
      </View>
    );
  };
  const ModelView = () => {
    return (
      <Modal
        swipeDirection={'down'}
        isVisible={modalVisible}
        onBackdropPress={() => setModalVisible(false)}
        onSwipeComplete={() => setModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View
              style={{
                width: 30,
                height: 3,
                borderRadius: 30,
                backgroundColor: 'black',
                justifyContent: 'center',
                marginLeft: screenWidth / 2 - 40,
              }}
            ></View>
            <Text
              style={{color: 'black', fontFamily: 'Lato-Bold', fontSize: 20}}
            >
              {t('choose_language')}
            </Text>
            <TouchableOpacity style={styles.language}>
              <Image
                source={getImages().vn_flag}
                style={styles.flag}
              />
              <Text style={styles.textLanguage}>Tiếng Việt</Text>
              <Entypo
                name="check"
                size={15}
                color={'#8BC83F'}
                style={{position: 'absolute', right: 20}}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.language}>
              <Image
                source={getImages().vn_flag}
                style={styles.flag}
              />
              <Text style={styles.textLanguage}>Tiếng Việt</Text>
              <Entypo
                name="check"
                size={15}
                color={'#A1A5C1'}
                style={{position: 'absolute', right: 20}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  };
  return skip ? (
    <View>
      <OptionLogin />
    </View>
  ) : (
    <View style={styles.container}>
      <ModelView />

      <Image
        source={getImages().logo}
        style={styles.logo}
      />
      <View style={styles.header}>
        <Pressable
          style={{flex: 1, marginLeft: -20, justifyContent: 'center'}}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.textLanguage}>Show Modal</Text>
        </Pressable>
        <TouchableOpacity
          style={styles.buttonSkip}
          onPress={() => setSkip(true)}
        >
          <Text style={styles.textSkip}>skip</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={slides}
        renderItem={renderItem}
        keyExtractor={(item) => item.key.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        bounces={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {
            useNativeDriver: false,
          },
        )}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        ref={slidesRef}
      />
      <Paginator
        data={slides}
        scrollX={scrollX}
      />
      <TouchableOpacity
        style={styles.nextButton}
        onPress={scrollTo}
      >
        <Text style={styles.nextText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 24,
    paddingTop: 37,
  },
  textSkip: {
    color: '#2A2A2A',
    fontSize: 15,
  },
  buttonSkip: {
    width: 86,
    height: 38,
    backgroundColor: '#DFDFDF',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#ffffff',
    padding: 8,
    alignItems: 'center',
    marginTop: 30.59,
  },
  logo: {
    width: 79.02,
    height: 74.41,
    position: 'absolute',
    top: 0,
    left: 0,
    marginTop: 19,
    marginLeft: 10,
  },
  images: {
    width: screenWidth - 16,
    height: screenHeight - 400,
    borderRadius: 30,
    marginBottom: 14,
  },
  viewTitle: {
    position: 'absolute',
    top: 0,
    left: 0,
    paddingLeft: 20,
  },
  viewText: {
    position: 'absolute',
    top: 0,
    left: 0,
    paddingLeft: 20,
    paddingRight: 70,
    paddingTop: 100,
  },
  text: {
    fontFamily: 'Lato-Regular',
    color: '#53587A',
    fontSize: 16,
  },
  nextButton: {
    width: 190,
    height: 54,
    backgroundColor: '#8BC83F',
    shadowColor: '#8BC83F',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 24,
  },
  nextText: {
    fontFamily: 'Lato-Bold',
    fontSize: 16,
    color: '#FFFFFF',
  },
  titleNormal: {
    fontFamily: 'Lato-Regular',
    color: '#000000',
    fontSize: 40,
  },
  titleHighlight: {
    fontFamily: 'Lato-Bold',
    color: '#204D6C',
    fontSize: 40,
  },
  centeredView: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1,
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    marginBottom: -20,
    width: screenWidth,
    flexDirection: 'column',
  },
  language: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 0.5,
    borderColor: '#ECEDF3',
    width: screenWidth,
    marginLeft: -20,
  },
  textLanguage: {
    color: '#252B5C',
    textAlign: 'center',
    fontFamily: 'Lato-Bold',
  },
  flag: {
    width: 40,
    height: 40,
    borderRadius: 40,
    marginRight: 15,
  },
});

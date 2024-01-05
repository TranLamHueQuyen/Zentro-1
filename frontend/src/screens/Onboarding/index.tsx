import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Animated,
  ActivityIndicator,
} from 'react-native';
import React, {useContext, useEffect, useRef, useState} from 'react';
import {getImages} from '@/assets/Images';
import Paginator from '@/components/Paginator';
import {useTranslation} from 'react-i18next';
import {screenHeight, screenWidth} from '@/themes/Responsive';
import Feather from 'react-native-vector-icons/Feather';
import {languageStore, onboardingStore} from '@/stores';
import {LanguageBottomSheet} from '@/components/LanguageBottomSheet';
import {observer} from 'mobx-react-lite';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {OnboardingProps} from '@/utils/interface';
import OptionLogin from '../OptionLogin';
import {replace} from '@/navigation/NavigationUtils';
import Splash from '@/components/Splash';
import {AuthContext} from '@/context/AuthContext';
import TabNavigator from '@/navigation/TabNavigator';

const Onboarding: React.FC<OnboardingProps> = observer(() => {
  const {userToken} = useContext(AuthContext);

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

  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const slidesRef = useRef<FlatList>(null);

  const viewableItemsChanged = useRef(({viewableItems}: any) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  const [onboardingStatus, setOnboardingStatus] = useState(false);

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const check = async () => {
      const value = await AsyncStorage.getItem('Onboarding');
      if (value) {
        setOnboardingStatus(true);
        setIsLoading(false);
      } else {
        setIsLoading(false);
        await AsyncStorage.setItem('Onboarding', 'true');
      }
    };
    check();
  }, []);

  const scrollTo = async () => {
    if (currentIndex < slides.length - 1) {
      slidesRef.current?.scrollToIndex({index: currentIndex + 1});
    } else {
      await AsyncStorage.setItem('Onboarding', 'true');
      setOnboardingStatus(true);
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
                item === 'hảo' ||
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

  return isLoading ? (
    <Splash />
  ) : onboardingStatus ? (
    <View style={{flex: 1}}>
      <OptionLogin />
    </View>
  ) : (
    <View style={styles.container}>
      <LanguageBottomSheet />
      <Image
        source={getImages().logo}
        style={styles.logo}
      />
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            languageStore.setShowLanguageSheet(true);
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              borderColor: '#ECEDF3',
              padding: 16,
              marginLeft: 40,
            }}
          >
            <Text
              style={{
                color: '#252B5C',
                fontSize: 12,
                fontFamily: 'Lato-Regular',
                marginHorizontal: 8,
              }}
            >
              {t('choose_language')}
            </Text>
            <Feather
              name="chevron-down"
              size={12.5}
              color={'#234F68'}
            />
          </View>
        </TouchableOpacity>
        <View style={{flex: 1}}></View>
        <TouchableOpacity
          style={styles.buttonSkip}
          onPress={async () => {
            await AsyncStorage.setItem('Onboarding', 'true');
            setOnboardingStatus(true);
          }}
        >
          <Text style={styles.textSkip}>{t('skip')}</Text>
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
});

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    paddingTop: 37,
    justifyContent: 'space-between',
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
});

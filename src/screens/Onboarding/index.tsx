import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Animated,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Home from '../Home';
import {getImages} from '@/assets/Images';
import Paginator from '@/components/Paginator';
import slides from '@/assets/data/slides';
import NextButton from '@/components/NextButton';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Onboarding = () => {
  const [skip, setSkip] = useState(false);
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
                item === 'hảo'
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

  return skip ? (
    <View>
      <Home />
    </View>
  ) : (
    <View style={styles.container}>
      <Image
        source={getImages().logo}
        style={styles.logo}
      />
      <View style={styles.header}>
        <View style={{flex: 1}}></View>
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
    width: width - 16,
    height: height - 400,
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

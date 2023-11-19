import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Animated,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {StoriesProps} from '@/utils/interface';
import {screenHeight, screenWidth} from '@/themes/Responsive';
import {goBack} from '@/navigation/NavigationUtils';

const Stories: React.FC<StoriesProps> = ({route, navigation}) => {
  const [current, setCurrent] = useState(0);
  const {content} = route.params;
  const [data, setData] = useState(content);
  const progress = useRef(new Animated.Value(0)).current;

  const start = () => {
    Animated.timing(progress, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: false,
    }).start(({finished}) => {
      if (finished) {
        next();
      }
    });
  };
  const next = () => {
    if (current != data.length - 1) {
      let temp = data;
      temp[current].finish = 1;
      setData(temp);
      setCurrent(current + 1);
      progress.setValue(0);
    } else {
      close();
    }
  };
  const previous = () => {
    if (current - 1 >= 0) {
      let temp = data;
      temp[current].finish = 0;
      setData(temp);
      progress.setValue(0);
      setCurrent(current - 1);
    } else {
      close();
    }
  };
  const close = () => {
    console.log(current);

    // setCurrent(current);
    progress.setValue(0);
    goBack();
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          width: screenWidth,
          flexDirection: 'row',
          paddingHorizontal: 8,
          top: 14,
          zIndex: 1,
        }}
      >
        {data.map((item: any, index: any) => {
          return (
            <View
              key={index}
              style={{
                flex: 1,
                height: 2,
                backgroundColor: '#FFFFFF',
                opacity: 0.5,
                marginHorizontal: 1,
                flexDirection: 'row',
              }}
            >
              <Animated.View
                style={{
                  flex: current == index ? progress : data[index].finish,
                  height: 2.4,
                  backgroundColor: 'red',
                }}
              ></Animated.View>
            </View>
          );
        })}
      </View>
      <Image
        source={data[current].images}
        onLoadEnd={() => {
          progress.setValue(0);
          start();
        }}
        style={styles.images}
      />

      <View
        style={{
          position: 'absolute',
          top: 0,
          flexDirection: 'row',
          width: screenWidth,
          height: screenHeight,
          justifyContent: 'space-between',
        }}
      >
        <TouchableOpacity
          style={{width: '50%', height: screenHeight}}
          onPress={() => {
            previous();
          }}
        ></TouchableOpacity>
        <TouchableOpacity
          style={{width: '50%', height: screenHeight}}
          onPress={() => {
            next();
          }}
        ></TouchableOpacity>
      </View>
    </View>
  );
};

export default Stories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  images: {
    width: screenWidth,
    height: '80%',
    resizeMode: 'cover',
  },
});

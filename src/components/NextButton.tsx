import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Svg, {Circle, G} from 'react-native-svg';

const NextButton = () => {
  const size = 128;
  const strokeWidth = 2;
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  return (
    <View style={styles.container}>
      <Svg
        width={size}
        height={size}
        stroke="red"
      >
        <G
          rotation="0"
          origin={center}
        >
          <Circle
            stroke="#E6E7E8"
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
          />
          <Circle
            stroke="#8BC83F"
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={circumference - (circumference * -25) / 100}
          />
        </G>
      </Svg>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.6}
      >
        <Text>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NextButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    position: 'absolute',
    borderRadius: 100,
    backgroundColor: '#f4338f',
    padding: 20,
  },
});

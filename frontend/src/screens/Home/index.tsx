import {StyleSheet, View} from 'react-native';
import React from 'react';

import StoryBar from './StoryBar';
import {HomeProps} from '@/utils/interface';
import TopLocation from './TopLocation';
import FeaturedEstates from './FeaturedEstate';
import Header from './Header';
import NearbyEstate from './NearbyEstate';
import {ScrollView} from 'react-native-virtualized-view';

const Home: React.FC<HomeProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <ScrollView>
        <TopLocation />
        <FeaturedEstates navigation={navigation} />
        <NearbyEstate
          navigation={navigation}
          detail={false}
        />
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BackButton} from '@/components';
import {useTranslation} from 'react-i18next';
import {screenWidth} from '@/themes/Responsive';

const AddEstateImages = ({route}: any) => {
  const {data} = route.params;
  const {t} = useTranslation();

  return (
    <View>
      <View style={styles.pageTitle}>
        <Text style={styles.addList}>{t('add_listing')}</Text>
      </View>
      <BackButton />
      <View style={styles.circle} />
      <View
        style={{
          flexDirection: 'row',
          marginTop: 35,
          marginBottom: 20,
          marginHorizontal: 24,
        }}
      >
        <Text style={styles.titleHighlight}>{t('almost_finish')}</Text>
        <Text style={styles.titleNormal}>{t('complete_list')}</Text>
      </View>
    </View>
  );
};

export default AddEstateImages;

const styles = StyleSheet.create({
  component: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  pageTitle: {alignItems: 'center'},
  addList: {
    color: '#252B5C',
    fontFamily: 'Lato-Bold',
    fontSize: 20,
    marginTop: 35,
    marginBottom: 20,
  },
  circle: {
    height: 280,
    width: 313,
    borderRadius: 500,
    backgroundColor: 'rgba(31,76,107,.3)',
    position: 'absolute',
    top: -58,
    left: -130,
  },
  title: {
    color: '#252B5C',
    fontFamily: 'Lato-Medium',
    fontSize: 30,
    marginTop: 35,
    marginBottom: 20,
    marginHorizontal: 24,
  },
  titleNormal: {
    fontFamily: 'Lato-Medium',
    color: '#000000',
    fontSize: 30,
    backgroundColor: 'red',
  },
  titleHighlight: {
    fontFamily: 'Lato-Bold',
    color: '#252B5C',
    fontSize: 30,
  },
});

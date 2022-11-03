import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import {useRoute} from '@react-navigation/native';
import useDelivery from '../../hooks/use-delivery';
import {Card} from '../../components';
import {Colors} from '../../utils/colors';
import Moment from 'moment';

const DeliveryScreen = () => {
  const route = useRoute();
  const id = route.params || {};

  console.log('route params', id);

  const {data = [], isLoading} = useDelivery();
  console.log('delivery', data);
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {data.map((item) => {
          return (
            <Card
              name={item.shipToName}
              waybill={item.waybillCode}
              address={Object.values(JSON.parse(item.shipToAddress))
                .join(' ')
                .trim()}
              date={Moment(item.itemDeliveryTime).format('DD MMMM YYYY')}
              key={Math.random()}
            />
          );
        })}
      </ScrollView>
      <Spinner
        visible={isLoading}
        textContent={'Loading...'}
        textStyle={styles.textSpinner}
      />
    </View>
  );
};

export default DeliveryScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 20,
  },
  textSpinner: {
    color: Colors.black,
  },
});

import React from 'react';
import {View, ScrollView} from 'react-native';
import Moment from 'moment';
import Spinner from 'react-native-loading-spinner-overlay';
import {useRoute} from '@react-navigation/native';
import useDelivery from '../../hooks/use-delivery';
import {Card} from '../../components';

export default function DeliveryScreen() {
  const route = useRoute();
  const id = route.params || {};

  console.log('route params', id);

  const {data = [], isLoading} = useDelivery();
  return (
    <View className="flex flex-1 p-6">
      <ScrollView showsVerticalScrollIndicator={false}>
        {data.map(item => {
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
        textStyle={{color: 'white'}}
      />
    </View>
  );
}

import React from 'react';
import {ScrollView, View} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import {useRoute} from '@react-navigation/native';
import {useTailwind} from 'tailwind-rn';
import useDelivery from '../../hooks/use-delivery';
import {Card} from '../../components';
import Moment from 'moment';

const DeliveryScreen = () => {
  const tw = useTailwind();
  const route = useRoute();
  const id = route.params || {};

  console.log('route params', id);

  const {data = [], isLoading} = useDelivery();
  console.log('delivery', data);
  return (
    <View style={tw('flex flex-1 p-6')}>
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
        textStyle={tw('text-black')}
      />
    </View>
  );
};

export default DeliveryScreen;

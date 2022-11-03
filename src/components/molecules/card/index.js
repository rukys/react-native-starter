import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Card = ({name, address, waybill, date}) => {
  return (
    <View style={styles.card}>
      <Text>{name}</Text>
      <Text>{waybill}</Text>
      <Text>{address}</Text>
      <Text>{date}</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    height: 75,
    marginBottom: 16,
  },
});

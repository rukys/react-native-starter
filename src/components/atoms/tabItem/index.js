import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {Colors} from '../../../utils/colors';

const TabItem = ({title, active, onPress, onLongPress}) => {
  const Icon = () => {
    if (title === 'Home') {
      return (
        <MaterialIcon
          name="home"
          size={25}
          color={active ? Colors.primary : 'grey'}
        />
      );
    }
    if (title === 'Shipments') {
      return (
        <MaterialIcon
          name="inbox"
          size={25}
          color={active ? Colors.primary : 'grey'}
        />
      );
    }
    if (title === 'Message') {
      return (
        <MaterialIcon
          name="comment"
          size={25}
          color={active ? Colors.primary : 'grey'}
        />
      );
    }
    if (title === 'Profile') {
      return (
        <MaterialIcon
          name="person"
          size={25}
          color={active ? Colors.primary : 'grey'}
        />
      );
    }
    return (
      <MaterialIcon
        name="home"
        size={25}
        color={active ? Colors.primary : 'grey'}
      />
    );
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {alignItems: 'center'},
  text: (active) => ({
    fontSize: 10,
    color: active ? Colors.primary : 'grey',
    fontFamily: 'Poppins-Regular',
    // marginTop: 4,
  }),
});

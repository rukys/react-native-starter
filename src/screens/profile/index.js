import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import useProfile from '../../hooks/use-profile';
import {Colors} from '../../utils/colors';

const ProfileScreen = () => {
  const {data, isLoading} = useProfile();
  return (
    <View style={styles.page}>
      <Text>
        <Text style={styles.textBold}>User : </Text>
        {JSON.stringify(data)}
      </Text>
      <Spinner
        visible={isLoading}
        textContent={'Loading...'}
        textStyle={styles.textSpinner}
      />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 20,
  },
  textBold: {
    fontWeight: 'bold',
  },
  textSpinner: {
    color: Colors.black,
  },
});

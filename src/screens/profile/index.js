import React from 'react';
import {View, Text} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import useProfile from '../../hooks/use-profile';

export default function ProfileScreen() {
  const {data, isLoading} = useProfile();
  return (
    <View className="flex flex-1 p-6">
      <Text>
        <Text className="font-bold">User : </Text>
        {JSON.stringify(data)}
      </Text>
      <Spinner
        visible={isLoading}
        textContent={'Loading...'}
        textStyle={{color: 'white'}}
      />
    </View>
  );
}

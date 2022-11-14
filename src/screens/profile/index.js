import React from 'react';
import {Text, View} from 'react-native';
import {useTailwind} from 'tailwind-rn';
import Spinner from 'react-native-loading-spinner-overlay';
import useProfile from '../../hooks/use-profile';

const ProfileScreen = () => {
  const tw = useTailwind();
  const {data, isLoading} = useProfile();
  return (
    <View style={tw('flex flex-1 p-6')}>
      <Text>
        <Text style={tw('font-bold')}>User : </Text>
        {JSON.stringify(data)}
      </Text>
      <Spinner
        visible={isLoading}
        textContent={'Loading...'}
        textStyle={tw('text-black')}
      />
    </View>
  );
};

export default ProfileScreen;

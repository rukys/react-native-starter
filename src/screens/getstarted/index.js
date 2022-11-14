import React, {useEffect} from 'react';
import {Image, Text, TouchableOpacity, View, SafeAreaView} from 'react-native';
import {ImgReact} from '../../assets/images';
import {Gap} from '../../components';
import {authStore} from '../../store';
import {useTailwind} from 'tailwind-rn';

const GetstartedScreen = ({navigation}) => {
  const tw = useTailwind();
  const {token} = authStore();

  const onGetStarted = () => {
    navigation.replace('LoginScreen');
  };

  useEffect(() => {
    if (token) {
      navigation.replace('HomeScreen');
    }
  }, [navigation, token]);
  return (
    <SafeAreaView style={tw('flex flex-1 bg-white')}>
      <View style={tw('flex-1 justify-center items-center')}>
        <Image
          source={ImgReact}
          style={tw('items-center h-48 w-48')}
          resizeMode="contain"
        />
        <Text style={tw('font-normal text-xl')}>Welcome</Text>
        <Text style={tw('font-light text-sm text-neutral-500')}>
          React Native Starter
        </Text>
      </View>
      <TouchableOpacity
        style={tw(
          'h-12 bg-sky-400 mx-4 rounded-lg justify-center items-center',
        )}
        onPress={onGetStarted}>
        <Text style={tw('text-white text-base')}>Get Started</Text>
      </TouchableOpacity>
      <Gap height={20} />
    </SafeAreaView>
  );
};

export default GetstartedScreen;

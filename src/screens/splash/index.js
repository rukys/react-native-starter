import React, {useEffect} from 'react';
import {View, Image} from 'react-native';
import {ImgReact} from '../../assets';
import {authStore} from '../../store';
import {useNavigation} from '@react-navigation/native';

export default function SplashScreen() {
  const navigation = useNavigation();
  const {token} = authStore();

  useEffect(() => {
    setTimeout(() => {
      if (token) {
        navigation.replace('HomeScreen');
      } else {
        navigation.replace('LoginScreen');
      }
    }, 2000);
  }, [navigation, token]);

  return (
    <View className="items-center justify-center flex-1 bg-white">
      <Image source={ImgReact} className="w-48 h-48" />
    </View>
  );
}

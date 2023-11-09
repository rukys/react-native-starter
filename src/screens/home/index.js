import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {Gap} from '../../components';
import {authStore, userStore} from '../../store';
import useProfile from '../../hooks/use-profile';
import {useNavigation} from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();
  const {token, token_refresh, isAuthenticated, clearAuthStore} = authStore();
  const {user = {}, clearUser} = userStore();

  useProfile();

  const onLogout = () => {
    clearUser();
    clearAuthStore();
    navigation.replace('LoginScreen');
  };

  return (
    <View className="flex flex-1 p-6">
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text>
          <Text className="font-bold">isAuthenticated : </Text>
          {isAuthenticated ? 1 : 0}
        </Text>
        <Text>
          <Text className="font-bold">Token Refresh : </Text>
          {token_refresh}
        </Text>
        <Text>
          <Text className="font-bold">Token : </Text>
          {token}
        </Text>
        <Gap height={16} />
        <View className="flex flex-row">
          <TouchableOpacity
            className="items-center justify-center w-24 h-10 rounded-lg bg-sky-400"
            onPress={() =>
              navigation.navigate('DeliveryScreen', {id: user.id})
            }>
            <Text>Delivery</Text>
          </TouchableOpacity>
          <Gap width={16} />
          <TouchableOpacity
            className="items-center justify-center w-24 h-10 rounded-lg bg-sky-400"
            onPress={() => navigation.navigate('ProfileScreen')}>
            <Text>Profile</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <TouchableOpacity
        className="absolute bottom-0 items-center self-center justify-center w-full h-12 mb-4 rounded-lg bg-sky-400"
        onPress={onLogout}>
        <Text>Log out</Text>
      </TouchableOpacity>
    </View>
  );
}

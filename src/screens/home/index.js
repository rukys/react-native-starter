import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {useTailwind} from 'tailwind-rn';
import {userStore, authStore} from '../../store';
import {Gap} from '../../components';
import useProfile from '../../hooks/use-profile';

const HomeScreen = ({navigation}) => {
  const tw = useTailwind();
  const {token, token_refresh, isAuthenticated, clearAuthStore} = authStore();
  const {user = {}, clearUser} = userStore();
  useProfile();

  const onLogout = () => {
    clearUser();
    clearAuthStore();
    navigation.replace('LoginScreen');
  };

  return (
    <View style={tw('flex flex-1 p-6')}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text>
          <Text style={tw('font-bold')}>isAuthenticated : </Text>
          {isAuthenticated ? 1 : 0}
        </Text>
        <Text>
          <Text style={tw('font-bold')}>Token Refresh : </Text>
          {token_refresh}
        </Text>
        <Text>
          <Text style={tw('font-bold')}>Token : </Text>
          {token}
        </Text>
        <Gap height={16} />
        <View style={tw('flex flex-row')}>
          <TouchableOpacity
            style={tw(
              'h-10 w-24 rounded-lg bg-sky-400 items-center justify-center',
            )}
            onPress={() =>
              navigation.navigate('DeliveryScreen', {id: user.id})
            }>
            <Text>Delivery</Text>
          </TouchableOpacity>
          <Gap width={16} />
          <TouchableOpacity
            style={tw(
              'h-10 w-24 rounded-lg bg-sky-400 items-center justify-center',
            )}
            onPress={() => navigation.navigate('ProfileScreen')}>
            <Text>Profile</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={tw(
          'absolute bottom-0 mb-4 bg-sky-400 h-12 w-full justify-center items-center rounded-lg self-center',
        )}
        onPress={onLogout}>
        <Text>Log out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

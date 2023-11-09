import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {useMutation} from 'react-query';
import {showMessage} from 'react-native-flash-message';
import Spinner from 'react-native-loading-spinner-overlay';
import {useForm, Controller} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import {authStore} from '../../store';
import {login} from '../../api/auth';
import {Gap} from '../../components';

export default function LoginScreen() {
  const navigation = useNavigation();
  const {setAuthStore} = authStore();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const mutationAuth = useMutation(login);
  const onSubmitLogin = data => {
    const payload = {
      username: data.username,
      password: data.password,
    };

    mutationAuth.mutate(payload, {
      onSuccess: (res = {}) => {
        if (res.token) {
          showMessage({
            message: 'Berhasil Masuk',
            description: 'Selamat datang kembali',
            type: 'success',
          });
          setAuthStore({...res, username: data.username});
          navigation.replace('HomeScreen');
        }
      },
      onError: err => {
        showMessage({
          message: 'Gagal Masuk',
          description: `${err?.response?.data?.Message}`,
          type: 'danger',
        });
      },
    });
  };

  return (
    <View className="flex justify-center flex-1 p-6">
      <View className="p-4 bg-white rounded-lg">
        <View className="flex-row justify-center mb-2">
          <Text className="mr-1 text-2xl">React</Text>
          <Text className="text-2xl">Native</Text>
        </View>
        <View className="h-0.5 bg-black" />
        <Gap height={24} />
        <Text>Username</Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              className="p-2 mt-2 border border-black rounded-lg"
              onBlur={onBlur}
              onChangeText={onChange}
              placeholder={'Username'}
              value={value}
            />
          )}
          name="username"
        />
        {errors.username && (
          <Text className="text-red-500">This is required.</Text>
        )}
        <Gap height={16} />
        <Text>Password</Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              className="p-2 mt-2 border border-black rounded-lg"
              onBlur={onBlur}
              onChangeText={onChange}
              placeholder={'Password'}
              value={value}
              secureTextEntry
            />
          )}
          name="password"
        />
        {errors.password && (
          <Text className="text-red-500">This is required.</Text>
        )}
        <Gap height={16} />
        <TouchableOpacity className="items-end">
          <Text>Forgot Password ?</Text>
        </TouchableOpacity>
        <Gap height={24} />
        <TouchableOpacity
          className="items-center justify-center h-12 bg-gray-300 rounded-lg"
          onPress={handleSubmit(onSubmitLogin)}>
          <Text className="text-sm text-black">Login</Text>
        </TouchableOpacity>
      </View>
      <Gap height={16} />
      <Spinner
        visible={mutationAuth.isLoading}
        textContent={'Loading...'}
        textStyle={{color: 'white'}}
      />
    </View>
  );
}

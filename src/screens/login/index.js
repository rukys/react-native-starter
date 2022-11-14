import React from 'react';
import {useMutation} from 'react-query';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import {useTailwind} from 'tailwind-rn';
import {useForm, Controller} from 'react-hook-form';
import {login} from '../../api/auth';
import {Gap} from '../../components';
import {authStore} from '../../store';
import {showMessage} from 'react-native-flash-message';

const LoginScreen = ({navigation}) => {
  const tw = useTailwind();
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

  const onSubmit = (data) => {
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
      onError: (err) => {
        showMessage({
          message: 'Gagal Masuk',
          description: `${err?.response?.data?.Message}`,
          type: 'danger',
        });
      },
    });
  };

  return (
    <View style={tw('flex flex-1 bg-white p-6 justify-center')}>
      <Gap height={32} />
      <View style={tw('rounded-lg bg-sky-400 p-4')}>
        <Text style={tw('text-2xl')}>React</Text>
        <Text style={tw('text-2xl mb-2')}>Native</Text>
        <View style={tw('h-0.5 bg-black')} />
        <Gap height={24} />
        <Text style={tw('')}>Username</Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={tw('border border-black rounded-lg mt-2 p-2')}
              onBlur={onBlur}
              onChangeText={onChange}
              placeholder={'Username'}
              value={value}
            />
          )}
          name="username"
        />
        {errors.username && (
          <Text style={tw('text-red-500')}>This is required.</Text>
        )}
        <Gap height={16} />
        <Text style={tw('')}>Password</Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={tw('border border-black rounded-lg mt-2 p-2')}
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
          <Text style={tw('text-red-500')}>This is required.</Text>
        )}
        <Gap height={16} />
        <TouchableOpacity style={tw('items-end')}>
          <Text>Forgot Password ?</Text>
        </TouchableOpacity>
        <Gap height={24} />
        <TouchableOpacity
          style={tw('items-center bg-white rounded-lg h-12 justify-center')}
          onPress={handleSubmit(onSubmit)}>
          <Text style={tw('text-black text-sm')}>Login</Text>
        </TouchableOpacity>
      </View>
      <Gap height={16} />
      <Text style={tw('self-center')}>v.0.0.1</Text>
      <Gap height={16} />
      <Spinner
        visible={mutationAuth.isLoading}
        textContent={'Loading...'}
        textStyle={tw('text-white')}
      />
    </View>
  );
};

export default LoginScreen;

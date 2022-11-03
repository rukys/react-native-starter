import React from 'react';
import {useMutation} from 'react-query';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import {useForm, Controller} from 'react-hook-form';
import {login} from '../../api/auth';
import {Gap} from '../../components';
import {authStore} from '../../store';
import {showMessage} from 'react-native-flash-message';
import {Colors} from '../../utils/colors';

const LoginScreen = ({navigation}) => {
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
    <View style={styles.page}>
      <Gap height={32} />
      <View style={styles.containerForm}>
        <Text style={styles.textTitle}>React</Text>
        <Text style={styles.textDesc}>Native</Text>
        <View style={styles.lineDash} />
        <Gap height={24} />
        <Text style={styles.textLabel}>Username</Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              placeholder={'Username'}
              value={value}
            />
          )}
          name="username"
        />
        {errors.username && (
          <Text style={styles.textLabel}>This is required.</Text>
        )}
        <Gap height={16} />
        <Text style={styles.textLabel}>Password</Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={styles.input}
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
          <Text style={styles.textLabel}>This is required.</Text>
        )}
        <Gap height={16} />
        <TouchableOpacity style={styles.containerForgot}>
          <Text style={styles.textForgot}>Forgot Password ?</Text>
        </TouchableOpacity>
        <Gap height={24} />
        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit(onSubmit)}>
          <Text style={styles.textButton}>Login</Text>
        </TouchableOpacity>
      </View>
      <Gap height={16} />
      <Text style={styles.textVersion}>v.0.0.1</Text>
      <Gap height={16} />
      <Spinner
        visible={mutationAuth.isLoading}
        textContent={'Loading...'}
        textStyle={styles.textSpinner}
      />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 20,
  },
  containerLogo: {
    borderWidth: 1,
    width: '40%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerForm: {
    backgroundColor: Colors.primary,
    borderRadius: 16,
    padding: 16,
  },
  textTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 25,
  },
  textDesc: {
    fontFamily: 'Poppins-Medium',
    fontSize: 25,
    marginTop: -8,
  },
  lineDash: {
    height: 1,
    backgroundColor: Colors.black,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 16,
    paddingRight: 16,
    marginTop: 8,
    height: 45,
  },
  textForgot: {
    fontFamily: 'Poppins-Regular',
    alignSelf: 'flex-end',
  },
  containerForgot: {},
  button: {
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
    height: 55,
  },
  textLabel: {
    fontFamily: 'Poppins-Regular',
  },
  textButton: {
    color: 'black',
    fontFamily: 'Poppins-Regular',
    // fontFamily: 'Poppins-Medium',
    // fontFamily: 'Poppins-Light',
  },
  textVersion: {
    fontFamily: 'Poppins-Light',
    alignSelf: 'center',
  },
  textSpinner: {
    color: Colors.white,
  },
});

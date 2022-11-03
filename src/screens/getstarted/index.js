import React, {useEffect} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';
import {ImgReact} from '../../assets/images';
import {Colors} from '../../utils/colors';
import {Gap} from '../../components';
import {authStore} from '../../store';

const GetstartedScreen = ({navigation}) => {
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
    <SafeAreaView style={styles.page}>
      <View style={styles.content}>
        <Image source={ImgReact} style={styles.image} resizeMode="contain" />
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.desc}>React Native Starter</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={onGetStarted}>
        <Text style={styles.buttontText}>Get Started</Text>
      </TouchableOpacity>
      <Gap height={20} />
    </SafeAreaView>
  );
};

export default GetstartedScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: Colors.grey,
  },
  language: {
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    height: 35,
    width: 35,
    borderRadius: 35 / 2,
    marginTop: 20,
    marginRight: 20,
  },
  gap: {
    flex: 1,
  },
  image: {
    alignSelf: 'center',
    height: 200,
    width: 200,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
  },
  desc: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    textAlign: 'center',
  },
  button: {
    height: 45,
    backgroundColor: Colors.primary,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  buttontText: {
    color: Colors.white,
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
});

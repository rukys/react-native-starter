import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {userStore, authStore} from '../../store';
import {Colors} from '../../utils/colors';
import {Gap} from '../../components';
import useProfile from '../../hooks/use-profile';

const HomeScreen = ({navigation}) => {
  const {token, token_refresh, isAuthenticated, clearAuthStore} = authStore();
  const {user = {}, clearUser} = userStore();
  useProfile();

  const onLogout = () => {
    clearUser();
    clearAuthStore();
    navigation.replace('LoginScreen');
  };

  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text>
          <Text style={styles.textBold}>isAuthenticated : </Text>
          {isAuthenticated ? 1 : 0}
        </Text>
        <Text>
          <Text style={styles.textBold}>Token Refresh : </Text>
          {token_refresh}
        </Text>
        <Text>
          <Text style={styles.textBold}>Token : </Text>
          {token}
        </Text>
        <Gap height={16} />
        <View style={styles.containerTab}>
          <TouchableOpacity
            style={styles.buttonTab}
            onPress={() =>
              navigation.navigate('DeliveryScreen', {id: user.id})
            }>
            <Text>Delivery</Text>
          </TouchableOpacity>
          <Gap width={16} />
          <TouchableOpacity
            style={styles.buttonTab}
            onPress={() => navigation.navigate('ProfileScreen')}>
            <Text>Profile</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.button} onPress={onLogout}>
        <Text>Log out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 20,
  },
  textBold: {
    fontWeight: 'bold',
  },
  button: {
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    height: 55,
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
  containerTab: {
    flexDirection: 'row',
  },
  buttonTab: {
    width: 100,
    height: 45,
    backgroundColor: Colors.primary,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

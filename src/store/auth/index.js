import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

const log = config => (set, get, api) =>
  config(
    (...args) => {
      set(...args);
      console.info('stateAuth', get());
    },
    get,
    api,
  );

const authStore = create(
  log(
    persist(
      set => ({
        token: null,
        token_refresh: null,
        username: null,
        isAuthenticated: false,
        setAuthStore: data =>
          set({
            token: data.token,
            token_refresh: data.tokenRefresh,
            username: data.username,
            isAuthenticated: true,
          }),
        setNewToken: data =>
          set({
            token: data.token,
          }),
        clearAuthStore: () =>
          set({
            token: null,
            token_refresh: null,
            username: null,
            isAuthenticated: false,
          }),
      }),
      {
        name: 'auth-storage',
        storage: createJSONStorage(() => AsyncStorage),
      },
    ),
  ),
);

// Set initial value from storage
AsyncStorage.getItem('auth-storage').then(item => {
  const data = JSON.parse(item);
  if (data) {
    authStore.setState({
      token: data?.state?.token,
      token_refresh: data?.state?.token_refresh,
      username: data?.state?.username,
      isAuthenticated: data?.state?.isAuthenticated,
    });
  }
});

export default authStore;

import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

const log = config => (set, get, api) =>
  config(
    (...args) => {
      set(...args);
      console.info('stateUser', get());
    },
    get,
    api,
  );

const userStore = create(
  log(
    persist(
      set => ({
        user: {},
        setUser: data => set({user: data}),
        clearUser: () =>
          set({
            user: {},
          }),
      }),
      {
        name: 'user-storage',
        storage: createJSONStorage(() => AsyncStorage),
      },
    ),
  ),
);

export default userStore;

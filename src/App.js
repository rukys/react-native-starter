import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider, setLogger} from 'react-query';
import FlashMessage from 'react-native-flash-message';
import {apiStore} from './store';
import Router from './router';

const queryClient = new QueryClient();

const App = () => {
  const setErrorServer = apiStore((state) => state.setErrorServer);
  const setIsNetworkError = apiStore((state) => state.setIsNetworkError);

  setLogger({
    log: (message) => {
      console.log('App.js, Msg: ', message);
    },
    warn: (warn) => {
      console.log('App.js, Warn: ', warn);
    },
    error: (error) => {
      console.log('App.js, Error: ', error);
      const isNetworkError = error.toJSON().message === 'Network Error';
      if (isNetworkError) {
        setIsNetworkError(true);
      }
      // const hasErrorCode = error?.response?.status;
      setErrorServer(error?.response);
    },
  });

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
      <FlashMessage position="top" />
    </QueryClientProvider>
  );
};

export default App;

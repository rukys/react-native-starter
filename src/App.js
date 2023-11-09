import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider, setLogger} from 'react-query';
import FlashMessage from 'react-native-flash-message';
import {apiStore} from './store';
import Router from './navigations';

const queryClient = new QueryClient();

const App = () => {
  const setErrorServer = apiStore(state => state.setErrorServer);
  const setIsNetworkError = apiStore(state => state.setIsNetworkError);

  setLogger({
    log: message => {
      console.log('App.js, Msg: ', message);
    },
    warn: warn => {
      console.log('App.js, Warn: ', warn);
    },
    error: error => {
      console.log('App.js, Error: ', error);
      const isNetworkError = error.toJSON().message === 'Network Error';
      if (isNetworkError) {
        setIsNetworkError(true);
      }
      // const hasErrorCode = error?.response?.status;
      setErrorServer(error?.response);
    },
  });

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

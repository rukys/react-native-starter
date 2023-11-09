import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  DeliveryScreen,
  HomeScreen,
  LoginScreen,
  ProfileScreen,
  SplashScreen,
} from '../screens';
// import {BottomNavigator} from '../components';

const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

// const MainApp = () => {
//   return (
//     <Tab.Navigator tabBar={(props) => <BottomNavigator {...props} />}>
//       <Tab.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{headerShown: false}}
//       />
//       <Tab.Screen
//         name="Shipments"
//         component={ShipmentsScreen}
//         options={{headerShown: false}}
//       />
//       <Tab.Screen
//         name="Message"
//         component={MessageScreen}
//         options={{headerShown: false}}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={ProfileScreen}
//         options={{headerShown: false}}
//       />
//     </Tab.Navigator>
//   );
// };

const Router = () => {
  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="DeliveryScreen" component={DeliveryScreen} />
      {/* <Stack.Screen
        name="MainAppScreen"
        component={MainApp}
      /> */}
    </Stack.Navigator>
  );
};

export default Router;

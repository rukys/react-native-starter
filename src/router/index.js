import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  DeliveryScreen,
  GetstartedScreen,
  HomeScreen,
  LoginScreen,
  ProfileScreen,
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
    <Stack.Navigator initialRouteName="GetstartedScreen">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen
        name="MainAppScreen"
        component={MainApp}
        options={{headerShown: false}}
      /> */}
      <Stack.Screen
        name="GetstartedScreen"
        component={GetstartedScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DeliveryScreen"
        component={DeliveryScreen}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{headerShown: true}}
      />
    </Stack.Navigator>
  );
};

export default Router;

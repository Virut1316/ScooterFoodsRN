import React, {useEffect, useState} from 'react';
import {Text, View, Image} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RestaurantsTab} from './restaurantsTab';
import {CheckoutTab} from './checkoutTab';
import {SettingsTab} from './settingsTab';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Button} from 'react-native-elements/dist/buttons/Button';
import {SingleRestaurant} from './singleRestaurant';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RestaurantTabMode} from './restaurantTabMode';

export const MainScreen = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const BottomTab = createBottomTabNavigator();

  const {username, email, image_id} = route.params; //information from the logged user

  useEffect(() => {});
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#edd522',
        tabBarInactiveTintColor: '#fff',
        tabBarActiveBackgroundColor: '#9C0D38',
        tabBarInactiveBackgroundColor: '#9C0D38',
      }}>
      <BottomTab.Screen
        name="Restaurants"
        component={RestaurantTabMode}
        options={{
          tabBarIcon: ({size, focused, color}) => {
            return (
              <Image
                style={{width: size, height: size, tintColor: '#fff'}}
                source={require('../assets/icons8-restaurant-50.png')}
              />
            );
          },
        }}
      />
      <BottomTab.Screen
        name="Checkout"
        component={CheckoutTab}
        options={{
          tabBarIcon: ({size, focused, color}) => {
            let iconName;
            return (
              <Image
                style={{width: size, height: size, tintColor: '#fff'}}
                source={require('../assets/icons8-checkout-30.png')}
              />
            );
          },
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={SettingsTab}
        initialParams={{username, email, image_id}}
        options={{
          tabBarIcon: ({size, focused, color}) => {
            let iconName;
            return (
              <Image
                style={{width: size, height: size, tintColor: '#fff'}}
                source={require('../assets/icons8-gear-30.png')}
              />
            );
          },
        }}
      />
    </BottomTab.Navigator>
  );
};

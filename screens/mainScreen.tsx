import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RestaurantsTab} from './restaurantsTab';
import {CheckoutTab} from './checkoutTabs';
import {SettingsTab} from './settingsTab';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
      <BottomTab.Screen name="Restaurants" component={RestaurantsTab} />
      <BottomTab.Screen name="Checkout" component={CheckoutTab} />
      <BottomTab.Screen
        name="Settings"
        component={SettingsTab}
        initialParams={{username, email, image_id}}
      />
    </BottomTab.Navigator>
  );
};

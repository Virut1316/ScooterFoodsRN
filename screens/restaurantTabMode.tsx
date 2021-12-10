import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {RestaurantsTab} from './restaurantsTab';
import {SingleRestaurant} from './singleRestaurant';

export const RestaurantTabMode = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Restaurants List">
      <Stack.Screen
        name="Single Restaurant"
        component={SingleRestaurant}
        options={{
          title: 'Menu',
          headerTintColor: '#fff',
          headerStyle: {backgroundColor: '#9C0D38'},
        }}
      />
      <Stack.Screen
        name="Restaurants List"
        component={RestaurantsTab}
        options={{header: () => null}}
      />
    </Stack.Navigator>
  );
};

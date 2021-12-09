import React from 'react';
import {
  Button,
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export const RestaurantCard = () => {
  return (
    <View style={styles.card}>
      <View style={{flex: 1}}></View>
      <View style={{flex: 1}}></View>
      <View style={{flex: 1}}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '70%',
    height: '30%',
    backgroundColor: '#FFF0EB',
    borderRadius: 20,
    opacity: 1.0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.8,
    shadowRadius: 7,

    elevation: 24,
  },
});

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {StyleSheet, Text, TouchableNativeFeedback} from 'react-native';
import {Card} from 'react-native-elements';
import {images, restaurantImage} from '../assets/images';
import {useNavigation} from '@react-navigation/native';

export const RestaurantCard = (props: any) => {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();

  const sendToDestiny = () => {
    navigation.getParent()?.navigate('Single Restaurant', props);
  };

  return (
    <TouchableNativeFeedback onPress={sendToDestiny}>
      <Card containerStyle={styles.card}>
        <Card.Image
          style={{borderRadius: 10}}
          source={{
            uri: restaurantImage(props.restaurantData.image_id),
          }}></Card.Image>
        <Card.Divider />
        <Card.Title>{props.restaurantData.name}</Card.Title>
        <Text>{props.restaurantData.address}</Text>
      </Card>
    </TouchableNativeFeedback>
  );
};

{
  /* <View style={styles.card}>
      <View style={{flex: 1}}></View>
      <View style={{flex: 1}}></View>
      <View style={{flex: 1}}></View>
    </View> */
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    opacity: 1.0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.8,
    shadowRadius: 7,

    elevation: 10,
  },
});

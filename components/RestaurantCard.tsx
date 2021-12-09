import React, {useEffect} from 'react';
import {StyleSheet, Text} from 'react-native';
import {Card} from 'react-native-elements';
import {images, restaurantImage} from '../assets/images';

export const RestaurantCard = (props: any) => {
  console.log(props);
  return (
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

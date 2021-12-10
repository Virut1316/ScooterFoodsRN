import React, {useEffect, useState} from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {RestaurantCard} from '../components/RestaurantCard';
//snack.expo.dev/embedded/@aboutreact/collapsible-and-accordion-view-in-react-native?iframeId=h1ftiunob9&preview=true&platform=ios&theme=dark
import Collapsible from 'react-native-collapsible';
import {Button} from 'react-native-elements';

export const SingleRestaurant = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  let [breakfast, setBreakfast] = useState([]);
  let [lunch, setLunch] = useState([]);
  let [dinner, setDinner] = useState([]);
  const [collapsed, setCollapsed] = useState(true);
  const [collapsed2, setCollapsed2] = useState(true);
  const [collapsed3, setCollapsed3] = useState(true);

  useEffect(() => {
    //console.log(route.params.restaurantData);
    let information = route.params.restaurantData.menu;
    setBreakfast(information.breakfast);
    setLunch(information.lunch);
    setDinner(information.dinner);
  });

  return (
    <View style={styles.container}>
      <RestaurantCard restaurantData={route.params.restaurantData} />
      <TouchableWithoutFeedback
        style={[styles.container]}
        onPress={() => setCollapsed(!collapsed)}>
        <View>
          <Text style={styles.title}>Breakfast</Text>
        </View>
      </TouchableWithoutFeedback>
      <Collapsible
        style={[styles.container]}
        collapsed={collapsed}
        align="center">
        <View>
          {breakfast.map(food => (
            <Text style={styles.items}>{food}</Text>
          ))}
        </View>
      </Collapsible>
      <TouchableWithoutFeedback
        style={[styles.container]}
        onPress={() => setCollapsed2(!collapsed2)}>
        <View>
          <Text style={styles.title}>Lunch</Text>
        </View>
      </TouchableWithoutFeedback>
      <Collapsible collapsed={collapsed2} align="center">
        <View>
          {lunch.map(food => (
            <Text style={styles.items}>{food}</Text>
          ))}
        </View>
      </Collapsible>
      <TouchableWithoutFeedback onPress={() => setCollapsed3(!collapsed3)}>
        <View>
          <Text style={styles.title}>Dinner</Text>
        </View>
      </TouchableWithoutFeedback>
      <Collapsible collapsed={collapsed3} align="center">
        <View>
          {dinner.map(food => (
            <Text style={styles.items}>{food}</Text>
          ))}
        </View>
      </Collapsible>
      <View style={{flex: 2}}></View>
      <Pressable style={styles.button}>
        <Text style={{color: '#fff'}}>12.99$</Text>
      </Pressable>
      <View style={{flex: 0.1}}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#9C0D38',
    alignItems: 'center',
    justifyContent: 'center',
    height: '20%',
    width: '30%',
    borderRadius: 20,
    flex: 1,
    alignSelf: 'center',
  },
  container: {
    backgroundColor: '#FFF0EB',

    flex: 1,
  },
  title: {
    backgroundColor: '#fff',
    borderWidth: 1,
    padding: 10,
    marginTop: 10,
  },
  items: {backgroundColor: '#fff', borderWidth: 1, padding: 10},
});

import {useNavigation} from '@react-navigation/core';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import {Button} from 'react-native-elements/dist/buttons/Button';
import {fonts} from 'react-native-elements/dist/config';
import {RestaurantCard} from '../components/RestaurantCard';
import {SingleRestaurant} from './singleRestaurant';

export const RestaurantsTab = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [search, setSearch] = useState('');

  const Item = ({restaurantData}: {restaurantData: any}) => (
    <RestaurantCard restaurantData={restaurantData} />
  );

  const renderItem = ({item}: {item: any}) => <Item restaurantData={item} />;

  const getRestaurants = async () => {
    try {
      let res;
      if (search) res = await fetch('/api/restaurantsFiltered/' + search);
      else res = await fetch('/api/restaurants');

      let json = await res.json();

      //console.log(json);
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getRestaurants();
    //console.log(data);
  }, []);

  return (
    <View style={{backgroundColor: '#FFF0EB', flex: 1}}>
      <View style={styles.searchBar}>
        <TextInput
          onBlur={getRestaurants}
          onChangeText={setSearch}
          placeholder="Search">
          {search}
        </TextInput>
      </View>
      <View style={{flex: 1}}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={data}
            keyExtractor={item => item.id}
            renderItem={renderItem}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    flex: 0.09,
    backgroundColor: '#fff',
    borderWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

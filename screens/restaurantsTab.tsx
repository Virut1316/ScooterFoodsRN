import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import {RestaurantCard} from '../components/RestaurantCard';

export const RestaurantsTab = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  const Item = ({restaurantData}: {restaurantData: any}) => (
    <View>
      <RestaurantCard restaurantData={restaurantData} />
    </View>
  );

  const renderItem = ({item}: {item: any}) => <Item restaurantData={item} />;

  const getRestaurants = async () => {
    try {
      const res = await fetch('/api/restaurants');
      const json = await res.json();
      console.log(json);
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getRestaurants();
    console.log(data);
  }, []);

  return (
    <View style={{backgroundColor: '#FFF0EB'}}>
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
  );
};

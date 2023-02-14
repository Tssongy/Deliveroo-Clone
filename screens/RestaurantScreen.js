import { View, Text } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';

const RestaurantScreen = () => {
    const route = useRoute();
    const {
        id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        short_description,
        dishes,
        long,
        lat
    } = route.params;
  return (
    <View>
      <Text>{title}</Text>
    </View>
  )
}

export default RestaurantScreen
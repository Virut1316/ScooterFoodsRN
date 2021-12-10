import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';

export const LoginScreen = () => {
  return (
    <ImageBackground source={require('')}>
      <a href="https://www.vecteezy.com/free-vector/watercolor-food">
        Watercolor Food Vectors by Vecteezy
      </a>
      <a href="https://www.vecteezy.com/free-vector/ornament">
        Ornament Vectors by Vecteezy
      </a>
      <a href="https://icons8.com/icon/8694/restaurant">
        Restaurant icon by Icons8
      </a>
      <a href="https://icons8.com/icon/60649/checkout">
        Checkout icon by Icons8
      </a>
      <a href="https://icons8.com/icon/77240/gear">Gear icon by Icons8</a>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({});

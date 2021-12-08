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
import {images} from '../assets/images';

export const LoginScreen = () => {
  const login = () => {};

  return (
    <ImageBackground
      imageStyle={{opacity: 0.65}}
      source={{uri: images.loginBackground}}
      style={[{width: '100%', height: '100%'}, styles.centralContainer]}>
      <View style={{flex: 2}}></View>
      <Image
        source={{uri: images.logo}}
        style={{flex: 1, width: 300, height: 1}}></Image>
      <View style={{flex: 3}}></View>
      <View style={[styles.card, {flex: 5}]}>
        <View style={{flex: 0.3}}></View>
        <TextInput
          style={[{flex: 1}, styles.input]}
          placeholder="Username"></TextInput>
        <View style={{flex: 0.3}}></View>
        <TextInput
          secureTextEntry={true}
          style={[styles.input, {flex: 1}]}
          placeholder="Password"></TextInput>
        <View style={{flex: 1}}></View>
        <Pressable style={[styles.button, {flex: 1}]} onPress={login}>
          <Text style={{color: '#ffffff'}}>Login</Text>
        </Pressable>
        <View style={{flex: 0.3}}></View>
      </View>
      <View style={{flex: 3}}></View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  centralContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
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
  button: {
    backgroundColor: '#9C0D38',
    color: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: '20%',
    borderRadius: 30,
    opacity: 1.0,
  },
  input: {
    backgroundColor: '#ffffff',
    borderRadius: 30,
    paddingHorizontal: '10%',
    marginHorizontal: '2%',
    opacity: 1.0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,

    elevation: 4,
  },
});

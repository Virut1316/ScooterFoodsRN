import React from 'react';
import {
  Image,
  Text,
  View,
  Button,
  StyleSheet,
  Pressable,
  ImageBackground,
} from 'react-native';
import {images, userImage} from '../assets/images';

export const SettingsTab: any = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const {username, email, image_id} = route.params; //information from the logged user

  return (
    <ImageBackground
      imageStyle={{opacity: 0.3}}
      source={{uri: images.settingsBackground}}
      style={[{width: '100%', height: '100%'}, styles.container]}>
      <View style={{flex: 0.1}}></View>
      <Image
        style={[styles.image, {width: '50%', height: '100%'}]}
        source={{uri: userImage(image_id)}}></Image>
      <View style={styles.data}>
        <Text style={styles.text}>Username: {username}</Text>
        <Text style={styles.text}>Email: {email}</Text>
      </View>
      <View style={{flex: 1}}></View>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('Login')}>
          <Text style={{color: '#fff'}}>Sign Out</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF0EB',
  },
  image: {
    flex: 1,
    alignSelf: 'center',
    borderRadius: 100,
    borderColor: '#FFD700',
    borderWidth: 4,
  },
  data: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 5,
    color: '#000',
    marginVertical: 5,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,

    elevation: 4,
  },
  button: {
    backgroundColor: '#9C0D38',
    alignItems: 'center',
    justifyContent: 'center',
    height: '20%',
    width: '30%',
    borderRadius: 20,
  },
});

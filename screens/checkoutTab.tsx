import React, {useState} from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableNativeFeedback,
  View,
} from 'react-native';

export const CheckoutTab = () => {
  let [holder, setHolder] = useState('');
  let [card, setCard] = useState('');
  let [cvv, setCvv] = useState('');

  const controlNumber = () => {
    setCard(card.replace(/[- #*;,.<>\{\}\[\]\\\/]/gi, ''));
  };
  const controlNumber2 = () => {
    setCvv(cvv.replace(/[- #*;,.<>\{\}\[\]\\\/]/gi, ''));
  };

  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <Text style={styles.title}>Items: </Text>
        <Text style={styles.items}>Fish and chips</Text>
        <Text style={styles.items}></Text>
        <Text style={styles.items}></Text>
        <Text style={styles.items}>Total: 13.99</Text>
        <View style={{flex: 1}}></View>
      </View>
      {/* Order list detail*/}
      <View style={{flex: 1}}>
        <TextInput
          style={[{flex: 1}, styles.input]}
          onChangeText={setHolder}
          placeholder="Card holder">
          {holder}
        </TextInput>
        <TextInput
          style={[{flex: 1}, styles.input]}
          onChangeText={setCard}
          keyboardType="numeric"
          onChange={controlNumber}
          placeholder="Card number"
          maxLength={16}>
          {card}
        </TextInput>
        <TextInput
          style={[{flex: 1}, styles.input]}
          onChangeText={setCvv}
          keyboardType="numeric"
          onChange={controlNumber2}
          placeholder="CVV"
          maxLength={3}>
          {cvv}
        </TextInput>
      </View>
      {/* cardholder data */}
      <View style={{flex: 0.1}}></View>
      <View style={{flex: 1}}>
        <TouchableNativeFeedback>
          <Text style={styles.button}>Pay</Text>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback>
          <Text style={[[styles.button], {backgroundColor: '#bbb'}]}>
            Cancel
          </Text>
        </TouchableNativeFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#9C0D38',
    textAlign: 'center',
    color: '#fff',
    textAlignVertical: 'center',
    marginBottom: 25,
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
    backgroundColor: '#eee',
    borderWidth: 1,
    padding: 10,
    marginTop: 10,
    color: 'black',
    fontWeight: 'bold',
  },
  items: {flex: 1, backgroundColor: '#fff', borderWidth: 0.5, padding: 10},
  input: {
    backgroundColor: '#fff',
    borderWidth: 0.5,
    padding: 10,
    borderRadius: 10,
  },
});

import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {CartIC, PlusIc} from '../assets';
import Burger from '../assets/images/pizza.jpg';

export default function ProductItems() {
  return (
    <View style={styles.container}>
      <View style={styles.product}>
        <Image style={styles.image} source={Burger} />
        <View>
          <Text style={styles.title}>Big Burger</Text>
          <Text style={styles.desc}>$ 5.00 </Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
        <PlusIc width={25} height={25} fill="#FCD34D" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    padding: 16,
    backgroundColor: '#374151',
  },
  product: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
    marginRight: 12,
  },
  title: {
    color: '#fff',
    fontSize: 16,
  },
  desc: {
    fontSize: 14,
    color: '#FCD34D',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
  },
});

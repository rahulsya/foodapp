import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import BurgerImg from '../assets/images/burger2.jpg';

export default function OrderItem() {
  return (
    <View style={styles.container}>
      <View style={styles.orderItem}>
        <Image style={styles.image} source={BurgerImg} />
        <View>
          <Text style={styles.title}>Big burger</Text>
          <Text style={styles.desc}>$ 5.00</Text>
        </View>
      </View>
      <View style={styles.buttonAction}>
        <TouchableOpacity style={[styles.button, styles.buttonMinus]}>
          <Text>-</Text>
        </TouchableOpacity>
        <Text style={styles.buttonTextContent}>2</Text>
        <TouchableOpacity style={[styles.button, styles.buttonPlus]}>
          <Text>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderRadius: 10,
    backgroundColor: '#374151',
    marginTop: 12,
  },
  orderItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    marginRight: 12,
  },
  title: {
    color: '#fff',
    fontSize: 14,
  },
  desc: {
    fontSize: 12,
    color: '#FCD34D',
  },
  buttonAction: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginLeft: 45,
  },
  button: {
    width: 25,
    height: 25,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonPlus: {
    backgroundColor: '#FCD34D',
  },
  buttonMinus: {
    backgroundColor: '#F3F4F6',
  },
  buttonTextContent: {
    fontSize: 14,
    color: '#fff',
  },
});

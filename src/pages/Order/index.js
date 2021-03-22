import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ArrowIc} from '../../assets';
import OrderItem from '../../components/OrderItem';

export default function index({navigation}) {
  return (
    <View style={styles.container}>
      {/* hader */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={styles.headerIcon}>
          <ArrowIc height={20} width={20} fill="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Order Info</Text>
      </View>

      {/* orderlist */}
      <Text style={styles.orderTitle}>Order List</Text>
      <ScrollView style={styles.orderItem} showsVerticalScrollIndicator={false}>
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
      </ScrollView>
      {/* summary */}
      <View style={styles.summary}>
        <View style={styles.lineHorizontal}></View>
        <View style={styles.delivery}>
          <Text style={styles.summaryText}>Delivery Services</Text>
          <Text style={styles.Price}>$10.0</Text>
        </View>
        <View style={styles.total}>
          <View>
            <Text style={styles.summaryText}>Total Price</Text>
            <Text style={styles.Price}>$40.50</Text>
          </View>
          <TouchableOpacity style={styles.buttonCheckout}>
            <Text style={styles.checkoutText}>Checkout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#111827',
  },
  header: {
    paddingTop: 35,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerIcon: {
    width: 45,
    height: 45,
    borderRadius: 45 / 2,
    backgroundColor: '#374151',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 15,
    color: '#F3F4F6',
  },
  orderTitle: {
    paddingTop: 20,
    fontSize: 14,
    color: '#9CA3AF',
  },
  orderItem: {
    maxHeight: `50%`,
  },
  summary: {
    marginTop: 12,
    flex: 1,
  },
  lineHorizontal: {
    height: 1,
    backgroundColor: '#F3F4F6',
  },
  delivery: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  summaryText: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  Price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  total: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonCheckout: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 5,
    backgroundColor: '#FCD34D',
  },
  checkoutText: {
    fontSize: 14,
  },
});

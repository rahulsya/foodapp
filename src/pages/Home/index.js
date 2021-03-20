import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {UserIc, BagIC} from '../../assets';
import ProductItems from '../../components/ProductItems';
export default function Home() {
  const [categories] = useState([
    {
      id: 1,
      name: 'All',
    },
    {
      id: 2,
      name: 'Burgers',
    },
    {
      id: 3,
      name: 'Pizza',
    },
    {
      id: 4,
      name: 'Drink',
    },
    {
      id: 5,
      name: 'Coffee',
    },
    {
      id: 6,
      name: 'Dessert',
    },
  ]);

  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.header}>
        <View style={styles.icon}>
          <UserIc width={20} height={20} />
        </View>
        <View style={styles.icon}>
          <BagIC width={20} height={20} />
        </View>
      </View>

      {/* address */}
      <View style={styles.address}>
        <Text style={styles.addressTitle}>take away from</Text>
        <Text style={styles.addressDetails}>2926 Hershell Hollow Road</Text>
      </View>

      {/* category */}
      <View>
        <ScrollView
          style={styles.category}
          horizontal
          showsHorizontalScrollIndicator={false}>
          {categories.map((category) => (
            <Text style={styles.categoryText(category.id)} key={category.id}>
              {category.name}
            </Text>
          ))}
        </ScrollView>
      </View>
      {/* items */}
      <ScrollView style={styles.products} showsVerticalScrollIndicator={false}>
        {/* items here */}
        <ProductItems />
        <ProductItems />
        <ProductItems />
        <ProductItems />
        <ProductItems />
      </ScrollView>
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
    justifyContent: 'space-between',
  },
  icon: {
    width: 45,
    height: 45,
    borderRadius: 45 / 2,
    backgroundColor: '#374151',
    justifyContent: 'center',
    alignItems: 'center',
  },
  address: {
    paddingTop: 20,
  },
  addressTitle: {
    color: '#9CA3AF',
    textTransform: 'capitalize',
  },
  addressDetails: {
    color: '#F3F4F6',
    fontSize: 14,
  },
  category: {
    paddingTop: 20,
  },
  categoryText: (color) => ({
    fontSize: 15,
    paddingRight: 25,
    color: `${color === 2 ? `#FCD34D` : `#374151`}`,
  }),
  products: {
    marginTop: 10,
  },
});

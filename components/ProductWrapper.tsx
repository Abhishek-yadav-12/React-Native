import React from 'react';
import {View, Text, Button, StyleSheet, Image, ScrollView} from 'react-native';
import Header from './Header';
import Product from './Product';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const ProductWrapper = (props: any) => {
    const {navigation} = props;
  const Products = [
    {
      id: 1,
      name: 'Samsung Galaxy S23 Ultra',
      color: 'Phantom Black',
      price: 1199,
      image:
        'https://png.pngtree.com/png-vector/20210303/ourmid/pngtree-mobile-phone-png-smartphone-camera-mockup-png-image_3009179.jpg',
    },
    {
      id: 2,
      name: 'iPhone 15 Pro Max',
      color: 'Black Titanium',
      price: 1199,
      image:
        'https://png.pngtree.com/png-vector/20210303/ourmid/pngtree-mobile-phone-png-smartphone-camera-mockup-png-image_3009179.jpg',
    },
    {
      id: 3,
      name: 'Samsung Galaxy Z Flip 5',
      color: 'Graphite',
      price: 999,
      image:
        'https://png.pngtree.com/png-vector/20210303/ourmid/pngtree-mobile-phone-png-smartphone-camera-mockup-png-image_3009179.jpg',
    },
    {
      id: 4,
      name: 'iPhone 15',
      color: 'Blue',
      price: 799,
      image:
        'https://png.pngtree.com/png-vector/20210303/ourmid/pngtree-mobile-phone-png-smartphone-camera-mockup-png-image_3009179.jpg',
    },
    {
      id: 5,
      name: 'Samsung Galaxy A54 5G',
      color: 'Awesome White',
      price: 449,
      image:
        'https://png.pngtree.com/png-vector/20210303/ourmid/pngtree-mobile-phone-png-smartphone-camera-mockup-png-image_3009179.jpg',
    },
  ];

  return (
    <View style={styles.main}>
      <Button
        title="Go to User List"
        onPress={() => navigation.navigate('User')}
      />
      <Header />
      <ScrollView>
        {Products.map(item => (
          <Product key={item.id} item={item} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {},
});

export default ProductWrapper;

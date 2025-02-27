import React from 'react';
import {View, Text, Button, StyleSheet, Image} from 'react-native';
import {useDispatch} from 'react-redux';
import {addToCart} from './redux/action';

const Products = (props: any) => {
  const dispatch = useDispatch();
  const item = props.item;
  const handleAddToCart = (item: any) => {
    dispatch(addToCart(item));
  };
  return (
    <View
      style={{
        alignItems: 'center',
        borderBottomColor: 'orange',
        borderBottomWidth: 4,
        padding: 10,
        margin:50,
        marginTop:15
      }}>
      <Text>{item.name}</Text>
      <Text>{item.color}</Text>
      <Text>{item.price}</Text>
      <Image style={{height: 200, width: 200}} source={{uri: item.image}} />
      <Button title="Add to Cart" onPress={() => handleAddToCart(item)} />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {},
});

export default Products;

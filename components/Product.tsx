import React, {useEffect, useState} from 'react';
import {View, Text, Button, StyleSheet, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart, removeFromCart} from './redux/action';

const Products = (props: any) => {
  const item = props.item;
  const dispatch = useDispatch();

  const cartItems = useSelector((state: any) => state.reducer);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = (item: any) => {
    dispatch(addToCart(item));
  };

  const handleRemoveFromCart = (item: any) => {
    dispatch(removeFromCart(item.name));
  };

  useEffect(() => {
    let result = cartItems.filter((element: any) => {
      return element.name === item.name;
    });
    if (result.length > 0) {
      setIsAdded(true);
    } else {
      setIsAdded(false);
    }
  }, [cartItems]);

  return (
    <View
      style={{
        alignItems: 'center',
        borderBottomColor: 'orange',
        borderBottomWidth: 4,
        padding: 10,
        margin: 50,
        marginTop: 15,
      }}>
      <Text>{item.name}</Text>
      <Text>{item.color}</Text>
      <Text>{item.price}</Text>
      <Image style={{height: 200, width: 200}} source={{uri: item.image}} />
      {isAdded ? (
        <Button
          title="Remove from Cart"
          onPress={() => handleRemoveFromCart(item)}
        />
      ) : (
        <Button title="Add to Cart" onPress={() => handleAddToCart(item)} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {},
});

export default Products;

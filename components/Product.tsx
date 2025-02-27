import React from 'react';
import {View, Text, Button, StyleSheet, Image} from 'react-native';

const Products = (props: any) => {

  const item = props.item;

  return (
       <View style={{alignItems: 'center', borderBottomColor:"orange", borderBottomWidth: 4, padding: 10}}>
              <Text>{item.name}</Text> 
              <Text>{item.color}</Text>
              <Text>{item.price}</Text>
              <Image style={{height: 200, width: 200}} source={{uri: item.image}} />
              <Button title="Add to Cart" />
            </View>
  );
};

const styles = StyleSheet.create({
  main: {
    
  },
});

export default Products;

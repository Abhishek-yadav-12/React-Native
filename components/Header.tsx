// import React from "react";
// import { TextInput } from "react-native";

// export const Header = () => {
//     return( <TextInput placeholder='Enter'  placeholderTextColor={"white"} style={{color: 'white'}} />);
//   };

// export default Header;

// ********************************************************************************************

// Shopping cart Header Component given below

import React, {useEffect, useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

const Header = () => {
  const cartData = useSelector((state: any) => state.reducer);
  const [cartItems, setCartItems] = useState(0) 

  useEffect(() => {
    setCartItems(cartData.length);
  }, [cartData])
   // useEffect is used to update the cart data when the cart data changes.
  // Here the state is the root reducer which is passed to the useSelector hook. The state is then used to access the cart data from the reducer.
  // The cart data is then used to display the number of items in the cart in the header.

  return (
    <View style={styles.main}>
      <Text
        style={{
          fontSize: 30,
          backgroundColor: 'orange',
          textAlign: 'right',
          padding: 10,
        }}>
        {cartItems}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {},
});

export default Header;

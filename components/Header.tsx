// import React from "react";  
// import { TextInput } from "react-native";

// export const Header = () => {
//     return( <TextInput placeholder='Enter'  placeholderTextColor={"white"} style={{color: 'white'}} />);
//   };

// export default Header;


// ********************************************************************************************

// Shopping cart Header Component given below


import React from "react";
import {View, Text, Button, StyleSheet} from "react-native"

const Header = () => {
  return(
    <View style={styles.main}>
        <Text style={{fontSize:30, backgroundColor:"orange", textAlign:"right", padding:10}}>Header</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  main:{
   
  }
})

export default Header; 
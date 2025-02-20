import React from "react";  
import { Text, Button , View } from "react-native";


export const Home = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 30}}>Home Screen</Text>
      {/* <Button
        title="Go to Login Page"
        onPress={() => props.navigation.navigate('Login')}
      /> */}
    </View>
  );
};
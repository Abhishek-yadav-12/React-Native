import React from "react";  
import { Text, Button , View } from "react-native";

// interface HomeProps {
//   route: {
//     params: {
//       name: string;
//       age: number;
//     };
//   };
//   navigation: any;
// }

export const Home = (props: any) => {
    // const {name,age} = props.route.params
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 30}}>Home Screen</Text>
      {/* <Text style={{fontSize: 30}}>Name: {name}</Text> */}
      {/* <Text style={{fontSize: 30}}>Age: {age}</Text> */}
      {/* <Button
        title="Go to Login Page"
        onPress={() => props.navigation.navigate('Login')}
      /> */}
    </View>
  );
};
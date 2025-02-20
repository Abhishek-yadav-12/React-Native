import React, { useState } from 'react';
import {Text, Button, View, TextInput} from 'react-native';


// The code from line  6 to 10 is explicitly defining the type of props to ensure the type safety in Typescript files
// and a small change in the argument passed in the login function as well
import {NavigationProp} from '@react-navigation/native';

type LoginProps = {
  navigation: NavigationProp<any>;
};

export const Login = (props: LoginProps) => {
  // the props will actually show an error asking to explicitly define the type of props because it is a typescript file.

    const [name, setName] = useState("");
    const age = 21;

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 30}}>Login Screen</Text>
      <TextInput
      onChangeText={(text)=>setName(text)
      }
      placeholder='Enter Your Name' style={{fontSize: 20, borderColor: "#000", borderWidth: 2}} />
      <Button
        title="Go to Home Page"
        onPress={() => props.navigation.navigate('Home', {name, age})}
      />

    </View>
  );
};

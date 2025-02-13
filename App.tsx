// Purpose: Main file for the app. This is the file that will be run when the app is started.

import React from 'react';
import {
  Alert,
  Button,
  Text,
  View,
} from 'react-native';

const App = () => {

  const name = 'Abhishek Yadav';
  let age = 21;
  var email = 'abhishekay2003@gmail.com';

  return(
    <View>
      <Text style={{fontSize:40}}> Learn Native with Abhishekkkkkk </Text>
      <Button title="Click me" onPress={() => Alert.alert('Button pressed!')} />
      <Text style={{fontSize:20}}> {name}</Text>
      <Text style={{fontSize:20}}> {age}</Text>
      <Text style={{fontSize:20}}> {email}</Text>
      <Button title='Get Started'></Button>
    </View>
    

  );
};


export default App;

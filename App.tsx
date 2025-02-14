// // Purpose: Main file for the app. This is the file that will be run when the app is started.
// import React from 'react';
// import {StyleSheet, Alert, Text, TouchableOpacity, View} from 'react-native';
// import Info from './components/info';

// const styles = StyleSheet.create({
//   button: {
//     backgroundColor: 'blue',
//     color: 'white',
//     padding: 10,
//     borderRadius: 6,
//     alignItems: 'center',
//     margin: 20,
//   },
// });

// const App = () => {
//   const name = 'Abhishek Yadav';
//   let age = 21;
//   var email = 'abhishekay2003@gmail.com';

//   return (
//     <View>
//       <Text style={{fontSize: 40}}> Learn Native with Abhishekkkkkk </Text>
//       <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Button pressed!')}>
//         <Text style={{color: 'white'}}>Click me</Text>
//       </TouchableOpacity>
//       <Text style={{fontSize: 20}}> {name}</Text>
//       <Text style={{fontSize: 20}}> {age}</Text>
//       <Text style={{fontSize: 20}}> {email}</Text>

//       <Info />
//       {/* <Button title="Get Started"></Button> */}
//     </View>
//   );
// };

// export default App;

import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';

const App = () => {
  const [name, setName] = useState('Abhi');

  const changeName = () => {
    setName('Zen');
  }
  return (
    <View>
      <Text>{name}</Text>
      <Button title="Change Name" onPress={changeName}></Button>
    </View>
  );
};

export default App;

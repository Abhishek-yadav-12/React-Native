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

// ***********************************************************************************************************************

// import React, {useState} from 'react';
// import {Button, Text, View} from 'react-native';
// import external from './style';

// const App = () => {
//   const [name, setName] = useState('Abhi');

//   const changeName = () => {
//     if(name == 'Abhi'){
//       setName('Zen');
//     }
//     else{
//       setName('Abhi');
//     }
//   }
//   return (
//     <View>
//       <Text>{name}</Text>
//       <Button title="Change Name" onPress={changeName}></Button>
//       <Text style={styles.textBox}>This is using a internal styling!! </Text>
//       <Text style={{fontStyle: 'italic', backgroundColor: 'yellow'}}>This is using inline styling</Text>
//       <Text style={external.textBox}>This is using external styling!!</Text>
//     </View>
//   );
// };

// const styles = {
//   textBox: {
//     fontSize: 20,
//     color: 'white',
//     backgroundColor: 'red'
//   }
// }

// export default App;

// ***********************************************************************************************************************

// import React, {useState} from "react";
// import { View, Text, Button, TextInput } from "react-native";

// const App = () => {

//   const [name, setName] = useState('');
//   return (
//     <View>
//       <Text>Your name is: {name}</Text>
//       <TextInput style={{borderColor: 'blue', borderWidth: 2}} onChangeText={(name)=>(setName(name))} placeholder="Enter your name" value={name}/>
//       <Button onPress={()=> {setName('')}} title="clear" />
//     </View>
//   );
// };

// export default App;

// ***********************************************************************************************************************

// Form Handling

// import React, { useState } from "react";
// import { Button, Text, TextInput, View} from "react-native";

// const App = () =>{

//   const [pass, setPass] = useState('');
//   const [display, setDisplay] = useState(false);

//   return(
//     <View>
//     <TextInput
//     secureTextEntry={true}
//     placeholder="Enter your Password"
//     style={{borderRadius: 2,
//       borderColor: 'blue',
//       borderWidth: 2,
//       margin: 10,
//       padding: 3
//     }}>
//     </TextInput>
//     <View style={{marginBottom:4}}><Button title="Show Details"
//      onPress={()=>{setDisplay(true)}}/>
//     </View>
//     <Button title="Clear Details" />
//     <View>{
//       display ? <View><Text>{pass}</Text></View> : null
//       }
//     </View>
//     </View>

//   )

// }

// export default App;

// *******************************************************************************************

// Flatlist

import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

const App = () => {
  const users = [
    {
      id: 1,
      name: 'Abhi',
    },
    {
      id: 2,
      name: 'Zen',
    },
    {
      id: 3,
      name: 'Eren',
    },
    {
      id: 4,
      name: 'Pam',
    },
  ];

  return (
    <View>
      <Text>Flatlist</Text>
      <FlatList
        data={users}
        renderItem={({item}) => <Text style={styles.container}>{item.name}</Text>}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
})

export default App;

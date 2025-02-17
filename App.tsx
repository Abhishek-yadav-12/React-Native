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

// Flatlist & Map

// import React from 'react';
// import {FlatList, StyleSheet, Text, View} from 'react-native';
// import external from './style';

// const App = () => {
//   const users = [
//     {
//       id: 1,
//       name: 'Abhi',
//     },
//     {
//       id: 2,
//       name: 'Zen',
//     },
//     {
//       id: 3,
//       name: 'Eren',
//     },
//     {
//       id: 4,
//       name: 'Pam',
//     },
//   ];

//   return (
//     <View>
//       {/* <Text>Flatlist</Text>
//       <FlatList
//         data={users}
//         renderItem={({item}) => <Text style={external.container}>{item.name}</Text>}
//         keyExtractor={item => item.id.toString()}
//       /> */}

//       <Text>Map</Text>
//       {users.map((user) => (
//         <Text>{user.name}</Text>
//       ))}
//     </View>
//   );
// };

// export default App;

// *******************************************************************************************

// Dynamic Grid using map function and styles

// import React from "react";
// import { ScrollView, Text, View } from "react-native";
// import external from "./style";

// const App = () => {

//   const users = [
//         {
//           id: 1,
//           name: 'Abhi',
//         },
//         {
//           id: 2,
//           name: 'Zen',
//         },
//         {
//           id: 3,
//           name: 'Eren',
//         },
//         {
//           id: 4,
//           name: 'Pam',
//         },
//         {
//           id: 5,
//           name: 'Sam',
//         },
//         {
//           id: 6,
//           name: 'Ram',
//         },
//         {
//           id: 7,
//           name: 'Han',
//         },
//         {
//           id: 8,
//           name: 'Dan',
//         },
//       ];

//   return(
//     <View style= {{flex: 1,

//     flexDirection: 'row'}}>
//       <ScrollView style={{backgroundColor: 'skyblue'}}>
//       {
//         users.map((user)=>(<Text style={external.grid}>{user.name}</Text>))
//       }
//       </ScrollView>
//     </View>
//   )
// }

// export default App;

// ************************************************************************************************

// Components and Props

// import React from 'react';
// import {View, Text, FlatList, StyleSheet} from 'react-native';

// const App = () => {
//   const users = [
//     {id: 1, name: 'John Doe', email: 'john.doe@email.com'},
//     {id: 2, name: 'Jane Smith', email: 'jane.smith@email.com'},
//     {id: 3, name: 'Alice Johnson', email: 'alice.johnson@email.com'},
//     {id: 4, name: 'Bob Brown', email: 'bob.brown@email.com'},
//     {id: 5, name: 'Emily Davis', email: 'emily.davis@email.com'},
//   ];

//   return (
//     <View>
//       <Text style={{fontSize: 20}}>Component in Loops</Text>
//       <FlatList
//         data={users}
//         renderItem={({item}) => <UserData item={item} />}
//       />
//     </View>
//   );
// };

// const UserData = (props) => {
//   const item = props.item;
//   return (
//     <View style={styles.box}>
//       <Text style={styles.item}>{item.name}</Text>
//       <Text style={styles.item}>{item.email}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   item: {
//     backgroundColor: 'skyblue',
//     padding: 10,
//     fontSize: 20,
//     flex: 1,
//     textAlign: 'center',
//     margin: 2,
//   },
//   box: {
//     backgroundColor: 'lightgreen',
//     padding: 10,
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 2,
//     borderWidth: 2,
//     borderColor: 'white',
//   },
// });

// export default App;

// **********************************************************************************

// Section List - If we have nested arrays, then we use section list to display the data in the array.

// import React from 'react';
// import {SectionList, Text, View} from 'react-native';

// const App = () => {

//   const usersData = [
//     {
//       id: '1',
//       name: 'Alice Johnson',
//       data: ['JavaScript', 'React Native', 'TypeScript'],
//     },
//     {
//       id: '2',
//       name: 'Bob Brown',
//       data: ['Python', 'Django', 'Machine Learning'],
//     },
//     {
//       id: '3',
//       name: 'Charlie Smith',
//       data: ['Java', 'Spring Boot', 'Microservices'],
//     },
//     {
//       id: '4',
//       name: 'David Lee',
//       data: ['C++', 'Data Structures', 'Algorithms'],
//     },
//     {
//       id: '5',
//       name: 'Eve Adams',
//       data: ['Swift', 'iOS Development', 'UI/UX'],
//     },
//   ];

//   return (
//     <View>
//       <Text style={{fontSize: 31, margin: 'auto'}}>Section List</Text>
//       <SectionList
//       sections={usersData}
//       renderItem={({item})=><Text style={{fontSize: 20, marginLeft: 20}}>{item}</Text>}
//       renderSectionHeader={({section: {name}})=>
//        ( <Text style={{fontSize: 25, color: 'blue'}}>
//           {name}
//         </Text>
//   )}
//       />
//     </View>
//   );
// };

// export default App;

// ************************************************************************************************

// Class Component

// import React, { Component} from 'react';
// import {View, Text, Button, TextInput} from 'react-native';
// import Info from './components/info'

// class App extends Component{  // This can also be written as class App extends React.component without using the import of Component in React
  
//   Abhi = () => {
//     console.warn("Good Luck!");
//   }

//   render(){
//     return(
//       <View>
//         <Text style={{fontSize:21, color: 'red'}}>This is a class component in React-Native</Text>
//         <Button title='Press Here' />
//         <Info />
//         <TextInput placeholder='Enter Details' />
//         <Button title='Click for Surprise!' onPress={this.Abhi} />
//       </View>
//     )
//   }
// }

// export default App;

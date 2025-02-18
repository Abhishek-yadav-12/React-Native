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

// Class Component - to call a function available inside the class, we use this keyword as this.functionName

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

// ************************************************************************************************

// State and Props in Class Component
// setState is a default function available in the class component to change the state of the component

// import React, { Component} from 'react';
// import {View, Text, Button, TextInput} from 'react-native';
// import Info from './components/info';
// import Student from './components/Student';

// interface AppState { // This interface and type annotations are used because we are using typescript and not javascript
//   name: string;
//   age: number;
// }

// class App extends Component<{}, AppState> {  // This can also be written as class App extends React.component without using the import of Component in React
//   // To call the constructor of the parent class we use Super keyword as super()
//     constructor(props: any){
//     super(props);
//     this.state = {
//       name: "Abhishek Yadav",
//       age: 21,
//     }
//   }

//   Abhi = () => {
//     console.warn("Good Luck!");
//   }

//   update = (text: string) => {
//     this.setState({name: text})
//   }

//   render(){
//     return(
//       <View>
//         <Text style={{fontSize:21, color: 'red'}}>This is a class component in React-Native</Text>
//         <Text style={{fontSize:21, color: 'red'}}>{this.state.name}</Text>
//         <Text style={{fontSize:21, color: 'red'}}>{this.state.age}</Text>
//         {/* <Button title='Press Here' /> */}
//         <Info />
//         <Student name={this.state.name} />
//         <TextInput style={{borderColor:'black', borderWidth: 2, margin: 5}} placeholder='Enter Details' onChangeText={(name)=>this.update(name)} />
//         <Button title='Click for Surprise!' onPress={this.Abhi} />
//       </View>
//     )
//   }
// }

// export default App;

// ************************************************************************************************

// Lifecycle Methods in Class Component
// 1. Mounting -  When we call the function for the first time
// 2. Updating - When we update the state of the component
// 3. Unmounting - When we remove the component from the screen
// We can use life cycle methods in functional components using useEffect hook

// Hooks - useState, useEffect, useContext, useReducer, useRef, useMemo, useCallback
// Ḥooks helped in overridding the lifecycle methods in the class components and also helped in using the state in functional components
// It helps us use state and other react features without writing a class in a functional component
// Anything that starts with "use" is a hook
// For all lifestyle methods, we use useEffect hook

// import React, { useEffect, useState } from 'react';
// import {View, Text, Button} from 'react-native';

// const App = () => {

//   const [count, setCount] = useState(0);
//   const [data, setData] = useState(10);

//   useEffect(() => {   // Now whenever the component is mounted or starts or any change happens or any event occurs or any props change, the console will print Hello!
//     console.warn(count);
//   }, [count]) // This useEffect will only be called when the count changes

// // Primarily used whenever we want a certain function to be called when the component is mounted or updated or unmounted
// // for example, when we want to fetch data from an API, we use useEffect hook to fetch the data when the component is mounted
// // And when we want the useEffect to be called only for the first time when component loads then we can simply pass an empty array as the second argument of useEffect as ,[]
// // ,[] is the case of componentDidMount
// // ,[count] is the case of componentDidUpdate but in this case it will still be called when the component is mounted for the first time
// // that means atleast 1 time it will be called

//   return (
//     <View>
//       <Text style={{fontSize: 21, color: 'red'}}>Life Cycle Methods</Text>
//       <Text style={{fontSize: 21, color: 'red'}}>{count}</Text>
//       <Button title='Count' onPress={()=>setCount(count+1)} />
//       <Button title='Data' onPress={()=>setData(data-1)} />
//         <User info={{data, count}}/>
//     </View>
//   );
// };

// const User = (props) => {

//   useEffect(() => {
//     console.warn("Count is updated");
//   }, [props.info.count])

//   useEffect(() => {
//     console.warn("Count is updated");
//   }, [props.info.data])

//   return(
//     <View>
//       <Text style={{fontSize: 22}}>User Component</Text>
//       <Text style={{fontSize: 22}}>{props.info.count}</Text>
//       <Text style={{fontSize: 22}}>{props.info.data}</Text>
//     </View>
//   )
// }

// export default App;

// ************************************************************************************************

// useEffect unmounting with TIME INTERVAL

// import React, {useEffect, useState} from "react";
// import { View, Text, Button } from "react-native";

// const App = () => {

//   const [show, setShow] = useState(true);

//   return(
//     <View>
//       <Text style={{fontSize: 24}}>Show or Hide Component</Text>
//       <Button title="Toggle Component" onPress={()=>setShow(!show)}/>
//         {
//           show === true ? <User /> : null
//         }
//     </View>

//   )
// }

// const User = () => {

//   let timer = setInterval(() =>{
//     console.warn("Timer called");
//   }, 2000)

//   useEffect (() => {
//     return() =>
//       clearInterval(timer);
//   })

//   return(
//     <View>
//       <Text style={{fontSize: 22, color:'red'}}>
//         User Component
//       </Text>
//     </View>
//   )
// }

// export default App;

// **********************************************************************************************

// Responsive UI using Flex

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View style={styles.main}>
      <View style={styles.Box1}>
        <View style={styles.InnerBox1}></View>
        <View style={styles.InnerBox2}></View>
        <View style={styles.InnerBox3}></View>
      </View>
      <View style={styles.Box2}></View>
      <View style={styles.Box3}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  main:{
    backgroundColor: 'yellow',
    flex: 1,
  },
  Box1:{
    backgroundColor: 'red',
    flex: 2,
    flexDirection: 'row'
  },
  Box2:{
    backgroundColor: 'blue',
    flex: 1,
  },
  Box3:{
    backgroundColor: 'green',
    flex: 1,
  },
  InnerBox1:{
    backgroundColor: 'skyblue',
    flex: 1,
    margin:5
  },
  InnerBox2:{
    backgroundColor: 'skyblue',
    flex: 1,
    margin:5
  },
  InnerBox3:{
    backgroundColor: 'skyblue',
    flex: 1,
    margin:5
  },


})

export default App;

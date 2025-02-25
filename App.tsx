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

// import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';

// const App = () => {
//   return (
//     <View style={styles.main}>
//       <View style={styles.Box1}>
//         <View style={styles.InnerBox1}></View>
//         <View style={styles.InnerBox2}></View>
//         <View style={styles.InnerBox3}></View>
//       </View>
//       <View style={styles.Box2}></View>
//       <View style={styles.Box3}></View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   main:{
//     backgroundColor: 'yellow',
//     flex: 1,
//   },
//   Box1:{
//     backgroundColor: 'red',
//     flex: 2,
//     flexDirection: 'row'
//   },
//   Box2:{
//     backgroundColor: 'blue',
//     flex: 1,
//   },
//   Box3:{
//     backgroundColor: 'green',
//     flex: 1,
//   },
//   InnerBox1:{
//     backgroundColor: 'skyblue',
//     flex: 1,
//     margin:5
//   },
//   InnerBox2:{
//     backgroundColor: 'skyblue',
//     flex: 1,
//     margin:5
//   },
//   InnerBox3:{
//     backgroundColor: 'skyblue',
//     flex: 1,
//     margin:5
//   },

// })

// export default App;

// Default button in react native does not support much of the styling, so we can use TouchableHiglights or TouchableOpacity to style the button

// import React, {useState} from 'react';
// import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

// const App = () => {

//   const skills = [
//     {
//       id:1,
//       name:"Java"
//     },
//     {
//       id:2,
//       name:"PHP"
//     },
//     {
//       id:3,
//       name:"Node"
//     },
//     {
//       id:4,
//       name:"SQL"
//     },
//   ]

//   const [radio, setRadio] = useState(1);

//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       {/* <TouchableOpacity>
//         <Text style={[styles.Button, styles.Success]}>Success</Text>
//       </TouchableOpacity>
//       <TouchableOpacity>
//         <Text style={[styles.Button, styles.Primary]}>Primary</Text>
//       </TouchableOpacity>
//       <TouchableOpacity>
//         <Text style={[styles.Button, styles.Warning]}>Warning</Text>
//       </TouchableOpacity>
//       <TouchableOpacity>
//         <Text style={[styles.Button, styles.Error]}>Error</Text>
//       </TouchableOpacity>
//       <TouchableOpacity>
//         <Text style={styles.Button}>Button</Text>
//       </TouchableOpacity> */}

//       {/****************************Radio Buttons************************ */}

//       {/* Dynamic Radio Button */}

//         {
//           skills.map((item, index)=><TouchableOpacity
//           key={index}
//           onPress={() => setRadio(item.id)}>
//           <View style={styles.radioWrapper}>
//             <View style={styles.radio}>
//               {radio === item.id ? <View style={styles.radioBg}></View> : null}
//             </View>

//             <Text style={styles.radioText}>{item.name}</Text>
//           </View>
//         </TouchableOpacity>)
//         }

//       {/* <TouchableOpacity onPress={() => setRadio(2)}>
//         <View style={styles.radioWrapper}>
//           <View style={styles.radio}>
//             {radio === 2 ? <View style={styles.radioBg}></View> : null}
//           </View>

//           <Text style={styles.radioText}>Radio 2</Text>
//         </View>
//       </TouchableOpacity> */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   Button: {
//     color: 'white',
//     backgroundColor: 'grey',
//     textAlign: 'center',
//     fontSize: 25,
//     margin: 10,
//     padding: 7,
//     borderRadius: 10,
//     shadowColor: 'black',
//     elevation: 1,
//     shadowOpacity: 0.5,
//   },
//   Success: {
//     backgroundColor: 'green',
//   },
//   Primary: {
//     backgroundColor: 'blue',
//   },
//   Warning: {
//     backgroundColor: 'orange',
//   },
//   Error: {
//     backgroundColor: 'red',
//   },
//   radio: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     borderColor: 'black',
//     borderWidth: 2,
//     margin: 10,
//   },
//   radioText: {
//     fontSize: 30,
//   },
//   radioWrapper: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   radioBg: {
//     backgroundColor: 'black',
//     width: 28,
//     height: 28,
//     borderRadius: 14,
//     margin: 4,
//   },
// });

// export default App;

// React Native does not have Radio Buttons
// We can use Picker or Switch for the same
// Picker is used when we have multiple options to choose from
// Switch is used when we have only 2 options to choose from

// Dynamic Radio Button -
// Make an array of skills
// Apply map over the radio button
// Update the state and skill

// ****************************************************************************************

// Activity Indicator - Loader

// import React, { useState } from "react";
// import { View, Text, Button, ActivityIndicator } from "react-native";

// const App = () => {

//   const [show, setShow] = useState(false);
//   const showLoader = () => {
//     setShow(true);

//     setTimeout(() => {
//       setShow(false)
//     }, 4000);

//   }

//   return(
//     <View style={{alignItems: 'center', justifyContent: 'center', flex:1}}>
//       <Text style={{fontSize: 24, color: 'red'}}>
//         Activity Indicator - Loader
//       </Text>
//       <ActivityIndicator size={50} color={"blue"} animating={show}/>
//       {
//         show ? <ActivityIndicator size={50} color={"red"}/> : null
//       }

//       <Button title="Loader" onPress={showLoader}/>
//     </View>
//   )
// }                     // In android we can adjust the size of the loader by using numbers and as well as small, medium and large but in ios we only use words and not numbers.

// export default App;

// **************************************************************************************

// Modal in React Native - Dialog Box

// import React, {useState} from 'react';
// import {View, Text, Button, StyleSheet, Modal, Pressable, Alert} from 'react-native';

// const App = () => {
//   const [show, setShow] = useState(false);

//   return (
//     // <View style={styles.main}>
//     //   <Modal
//     //   transparent={true}
//     //   visible={show}
//     //   animationType="fade" // or slide

//     //   >
//     //     <View style={styles.centerView}>
//     //       <View style={styles.modalView}>
//     //         <Text style={styles.modalText}>Modal - Dialog Box</Text>
//     //         <Button title='CLose' onPress={()=>setShow(false)} />
//     //       </View>
//     //     </View>
//     //     </Modal>
//     //   <View style={styles.buttonView}>
//     //     <Button title="Open" onPress={()=>setShow(true)} />
//     //   </View>
//     // </View>

//     <View style={styles.main}>
//       <Pressable
//       onPress={()=>console.warn("Press")}
//       onPressIn={()=>console.warn("Press In")}
//       onLongPress={()=>console.warn("Long Press")}
//       delayLongPress={2000}
//       // The default time of a long press is 500ms but we can also adjust that manually
//       onPressOut={()=>console.warn("Press Out")}
//       >
//         <Text style={styles.pressable}>Pressable</Text>
//       </Pressable>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   main: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   buttonView: {
//     flex: 1,
//     justifyContent: 'flex-end',
//   },
//   centerView: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modalView: {
//     backgroundColor: '#fff',
//     padding: 30,
//     borderRadius: 20,
//     shadowColor: 'black',
//     elevation: 5,
//   },
//   modalText: {
//     fontSize: 30,
//     marginBottom: 20,
//   },
//   pressable:{
//   color: '#fff',
//   backgroundColor: 'green',
//   padding: 10,
//   margin: 2,
//   borderRadius: 10,
//   fontSize: 20,
//   shadowColor: '#000',
//     elevation: 5
//   }
// });

// export default App;

//  We can also make our own modal without using the modal import component

// ****************************************************************************************

// Status Bar or in General the Notification Bar we see on phones

// import React, { useState } from "react";
// import {View, Text, Button, StyleSheet, StatusBar} from "react-native"

// const App = () => {

//   const [bar, setBar] = useState(false)
//   const [barStyle, setBarStyle] = useState("default")

//   return(
//     <View style={styles.main}>
//       <StatusBar
//       backgroundColor="red"
//       barStyle={barStyle}
//       hidden={bar}
//       />
//       <Button title="Toggle Status Bar" onPress={()=>setBar(!bar)} />
//       <Button title="Toggle Bar Style" onPress={()=>setBarStyle("dark-content")}/>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   main:{
//     flex:1,
//     justifyContent: 'center'
//   }
// })

// export default App;

// **************************************************************************************

// Platform

// import React from "react";
// import {View, Text, Button, StyleSheet, Platform} from "react-native"

// const App = () => {
//   return(
//     <View style={styles.main}>
//       <Text style={{fontSize: 20}}>
//         Platform : {Platform.OS}
//       </Text>
//       {
//         Platform.OS === "android" ? <View style={{backgroundColor: "red", height:100, width: 100}}></View>
//         :
//         <View style={{backgroundColor: "green",  height:100, width: 100}} ></View>
//       }

//       <Text style={styles.text}>
//       {JSON.stringify(Platform.constants.reactNativeVersion)}
//       </Text>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   main:{
//     flex:1,
//   },
//   text:{
//     color: Platform.OS==="ios" ? "red" : "blue"
//   }
// })

// export default App;

// A Package is a library which consist of a bunch of codes for accessing or implementing some features.
// Anyone can make a NPM package
// After creating a package we can simply publish it on github or npm for others to use it as well

// ***************************************************************************************

// Webview

// import React from "react";
// import {View, Text, Button, StyleSheet} from "react-native"
// import WebView from "react-native-webview";

// const App = () => {
//   return(
//     <View style={styles.main}>
//       <WebView
//       source={{uri: "https://github.com/Abhishek-yadav-12"}}
//       />
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   main:{
//     flex:1,
//   }
// })

// export default App;

// ***********************************************************************************

// Custom Modal - Pop Up

// import React, {useState} from 'react';
// import {View, Text, Button, StyleSheet, TextInput} from 'react-native';

// const App = () => {
//   const [show, setShow] = useState(false);

//   return (
//     <View style={styles.main}>
//       {
//         show ? <View style={styles.modal}>
//         <View style={styles.body}>
//           <Text>Enter in Detail </Text>
//           <Button title="Close" onPress={()=>setShow(false)}/>
//         </View>
//       </View>
//       :
//       null
//       }
//       <Button title="Pop Up" onPress={()=>setShow(true)}/>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   main: {
//     flex: 1,
//     justifyContent: 'flex-end',
//   },
//   modal: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(50, 50, 50, .5)',
//   },
//   body: {
//     backgroundColor: '#fff',
//     height: 300,
//     width: 300,
//     padding: 20,
//     justifyContent: 'flex-end',
//     borderRadius: 10,
//   },
// });

// export default App;

// ************************************************************************************

// Navigation - 3 Types - Stack Drawer Tab Commonly known as Routing in Web Development

// Stack Navigation

// import React from 'react';
// import {Button} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {Home} from './components/Home';
// import {Login} from './components/Login';
// import Header from './components/Header';

// const Stack = createNativeStackNavigator();

// const App = () => {
//   const btnPress = () => {
//     console.warn('Button Pressed!');
//   };

//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         screenOptions={{
//           headerStyle: {
//             backgroundColor: 'lightgreen',
//           },
//           headerTintColor: 'green', // header text color
//           headerTitleStyle: {
//             fontSize: 20,
//           },
//         }}>
//         <Stack.Screen
//           name="Login"
//           component={Login}
//           options={{
//             headerTitle: () => <Button onPress={btnPress} title="Left" />,
//             headerRight: () => <Header />,
//             title: 'User Login',
//             headerStyle: {
//               backgroundColor: 'brown',
//             },
//             headerTintColor: 'white', // header text color
//             headerTitleStyle: {
//               fontSize: 20,
//             },
//           }}></Stack.Screen>
//         <Stack.Screen name="Home" component={Home}></Stack.Screen>
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;

// Stack Navigation Ended

// **********************************************************************************

// Tab Navigation

// To clean the cache after installation of Tab Navigation, use this command -
//  npm start --clean-cache
// By default we get bottom tab navigation

// import React from "react";
// import {View, Text, Button, StyleSheet} from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
// import { Home } from "./components/Home";

// // const Tab = createBottomTabNavigator();
// const Tab = createMaterialTopTabNavigator();

// const App = () => {
//   return(
//     <View style={styles.main}>
//       <NavigationContainer>
//         <Tab.Navigator>
//           <Tab.Screen name="Login" component={Login} />
//           <Tab.Screen name="SignUp" component={SignUp} />
//           <Tab.Screen name="Home" component={Home} />
//         </Tab.Navigator>
//       </NavigationContainer>
//     </View>
//   )
// }

// const Login = () => {
//   return(<View style={{flex:1, alignItems: "center", justifyContent: "center"}}>
//     <Text style={{fontSize:40 }}>Login</Text>
//   </View>)
// }
// const SignUp = () => {
//   return(<View style={{flex:1, alignItems: "center", justifyContent: "center"}}>
//     <Text style={{fontSize:40 }} >SignUp</Text>
//   </View>)
// }

// const styles = StyleSheet.create({
//   main:{
//     flex:1,
//   },
// })

// export default App;

// *****************************************************************************************

// API Call
// TO render the data which we'll get in the json format , we'll use the map function and show it in the list

// import React, {useEffect, useState} from 'react';
// import {View, Text, StyleSheet, ScrollView, FlatList} from 'react-native';

// const App = () => {
//   const [data, setData] = useState<any>(null);

//   // IMPORTANT - here I have specified the type of data in useState as any so that It doesn't shwo any error

//   const getData = async () => {
//     // const url = 'https://jsonplaceholder.typicode.com/posts/1'; // This is the url of the API
//     const url = 'https://jsonplaceholder.typicode.com/posts/';
//     // const url = 'http://localhost:3000/users';
//     let result = await fetch(url);
//     result = await result.json();
//     setData(result);
//   };

//   // We use useEffect hook to call the API when the component is mounted for the first time
//   // Lifecycle methods are used in class components but in functional components we use useEffect hook

//   useEffect(() => {
//     getData();
//   }, []);

//   return (
//     // <ScrollView>
// // Instead of just making a list manually we can use FlatList and then we don't even need to use ScrollView
// <FlatList
//  data={data}
//  renderItem={(item)=><View style={styles.main}>
//  <Text style={{fontSize: 24}}>API Call</Text>
//  {data && data.length ? data.map((item: any) => (
//        <View
//        key={item.id}
//          style={{
//            padding: 10,
//            borderBottomColor: 'grey',
//            borderBottomWidth: 1,
//          }}>
//          <Text style={{fontSize: 20, backgroundColor: 'orange'}}>
//            Id: {item.id}
//          </Text>
//          <Text style={{fontSize: 20}}>Title: {item.title}</Text>
//          <Text style={{fontSize: 20}}>Body: {item.body}</Text>
//        </View>
//      ))
//    : null}
// </View>}
//  >
//       {/* <View style={styles.main}>
//         <Text style={{fontSize: 24}}>API Call</Text>
//         {data && data.length ? data.map((item: any) => (
//               <View
//               // key={item}
//                 style={{
//                   padding: 10,
//                   borderBottomColor: 'grey',
//                   borderBottomWidth: 1,
//                 }}>
//                 <Text style={{fontSize: 20, backgroundColor: 'lightgrey'}}>
//                   Id: {item.id}
//                 </Text>
//                 <Text style={{fontSize: 20}}>Title: {item.title}</Text>
//                 <Text style={{fontSize: 20}}>Body: {item.body}</Text>
//               </View>
//             ))
//           : null}
//       </View> */}
//       </FlatList>
//     // </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   main: {
//     flex: 1,
//   },
// });

// export default App;

// *****************************************************************************************

// API with JSon Server

// To create an api we use json-server
// npm install -g json-server
// json-server --watch db.json ---> TO start the server ------> here db.json is the name of the file where we have stored the data in the form of objects
// db.json is the file where we store the data

// GET - To show the data
// POST - To add the data
// PUT - To edit the data
// DELETE - To delete the data

// import React, {useState} from 'react';
// import {View, Text, Button, StyleSheet, TextInput} from 'react-native';

// const App = () => {
//   const [name, setName] = useState('');
//   const [age, setAge] = useState('');
//   const [email, setEmail] = useState('');

//   const [nameError, setNameError] = useState(false);
//   const [ageError, setAgeError] = useState(false);
//   const [emailError, setEmailError] = useState(false);

//   const saveData = async () => {
//     // const data = {
//     // name: "Shyam",       // This is a static Data
//     //   age: 21,
//     //   email: "shyam@gmail.com"
//     // }

//     !name ? setNameError(true) : setNameError(false);
//     !age ? setAgeError(true) : setAgeError(false);
//     !email ? setEmailError(true) : setEmailError(false);

//     // if (!name) {
//     //   setNameError(true);
//     // } else {
//     //   setNameError(false);
//     // }
//     // if (!age) {
//     //   setAgeError(true);
//     // } else {
//     //   setAgeError(false);
//     // }
//     // if (!email) {
//     //   setEmailError(true);
//     // } else {
//     //   setEmailError(false);
//     // }
//     if (!name || !age || !email) {
//       return false;
//     }

//     const url = 'http://10.0.2.2:3000/users';
//     let result = await fetch(url, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({name: name, age: age, email: email}),
//     });
//     result = await result.json();
//     if (result) {
//       console.warn('Data is Added!');
//     }
//   };

//   return (
//     <View style={styles.main}>
//       <Text style={{fontSize: 24, color: 'blue', margin: 5}}>API Call</Text>
//       <TextInput
//         placeholder="Enter Name"
//         value={name}
//         onChangeText={text => setName(text)}
//         style={{fontSize: 20, borderWidth: 1}}
//       />
//       {nameError ? <Text style={{color: 'red'}}>Please Enter Name</Text> : null}
//       <TextInput
//         placeholder="Enter Age"
//         value={age}
//         onChangeText={text => setAge(text)}
//         style={{fontSize: 20, borderWidth: 1}}
//       />
//       {ageError ? <Text style={{color: 'red'}}>Please Enter Age</Text> : null}
//       <TextInput
//         placeholder="Enter Email"
//         value={email}
//         onChangeText={text => setEmail(text)}
//         style={{fontSize: 20, borderWidth: 1}}
//       />
//       {emailError ? (
//         <Text style={{color: 'red'}}>Please Enter Email</Text>
//       ) : null}
//       <Button title="Save Data" onPress={saveData} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   main: {
//     flex: 1,
//     margin: 10,
//   },
// });

// export default App;

// *******************************************************************************************

// import React, {useEffect, useState} from 'react';
// import {View, Text, Button, StyleSheet, Modal, TextInput} from 'react-native';

// const App = () => {
//   const [data, setData] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [selectedUser, setSelectedUser] = useState(undefined);

//   const getData = async () => {
//     const url = 'http://10.0.2.2:3000/users';
//     let result = await fetch(url);
//     let answer = await result.json();
//     console.warn(answer);
//     if (answer) {
//       setData(answer);
//     }
//   };

//   const deleteUser = async(id: any) => {
//     const url = "http://10.0.2.2:3000/users";
//     let result = await fetch(`${url}/${id}`,{
//       method: "delete"
//     });
//     result = await result.json();
//     if(result){
//       console.warn("User Deleted!!");
//       getData();
//     }
//   }

//   const updateUser = (data: any) =>{
//     setShowModal(true);
//     setSelectedUser(data);
//   }

//   useEffect(() => {
//     getData();
//   }, []);

//   return (
//     <View style={styles.main}>
//       <View style={{flexDirection: 'row',
//     backgroundColor: 'skyblue',
//     justifyContent: 'space-around',
//     margin: 5,
//     padding: 5}}>
//         <View style={{flex: 1}}>
//           <Text style={{fontWeight:"bold", fontSize:18}}>Name</Text>
//         </View>
//         <View style={{flex: 1.5}}>
//           <Text style={{fontWeight:"bold", fontSize:18}}>Age</Text>
//         </View>
//         <View style={{flex: 2}}>
//           <Text style={{fontWeight:"bold", fontSize:18}}>Operations</Text>
//         </View>
//       </View>

//       {data.length
//         ? data.map((item: any) => (
//             <View style={styles.dataWrapper} key={item.id}>
//               <View style={{flex: 1}}>
//                 <Text style={styles.text}>{item.name}</Text>
//               </View>
//               <View style={{flex: 1}}>
//                 <Text style={styles.text}>{item.age}</Text>
//               </View>
//               {/* <View style={{flex:1}}><Text>{item.email}</Text></View> */}
//               <View style={{flex: 1, margin:3}}>
//                 <Button title="Delete" onPress={()=>deleteUser(item.id)} />
//               </View>
//               <View style={{flex: 1, margin:3}}>
//                 <Button title="Update" onPress={()=>updateUser(item)}/>
//               </View>
//             </View>
//           ))
//         : null}
//         <Modal
//         transparent={true}
//         visible={showModal}>
//           <UpdateModal selectedUser={selectedUser} setShowModal={setShowModal} getData = {getData}/>
//         </Modal>
//     </View>
//   );
// };

// const UpdateModal =(props: any)=>{
//   console.warn(props.selectedUser);

//   const [name, setName] = useState('');
//   const [age, setAge] = useState('');
//   const [email, setEmail] = useState('');

//   useEffect(()=>{
//     if(props.selectedUser){
//       setName(props.selectedUser.name);
//       setEmail(props.selectedUser.email);
//       setAge(props.selectedUser.age.toString());
//     }
//   },[props.selectedUser])

//   const UpdateUser =async ()=>{
//     console.warn(name, age, email, props.selectedUser.id);
//     const url = "http://10.0.2.2:3000/users";
//     let result= await fetch(`${url}/${props.selectedUser.id}`,{
//       method: "PUT",
//       headers:{
//         "Content-Type":"application/json"
//       },
//       body:JSON.stringify({name, age, email})
//     });
//     result = await result.json();
//     if(result){
//       console.warn("User Updated!!");
//       props.getData();
//       props.setShowModal(false);
//   }
//   }
//   return(<View style={styles.centeredView}>
//     <View style={styles.modalView}>
//       <TextInput style={styles.input} value={name} onChangeText={(text)=>setName(text)}/>
//       <TextInput style={styles.input} value={age}  onChangeText={(text)=>setAge(text)}/>
//       <TextInput style={styles.input} value={email} onChangeText={(text)=>setEmail(text)}/>
//       <View style={{marginBottom:10}}><Button title='Save' onPress={UpdateUser}/></View>
//       <View style={{}}><Button title='Close' onPress={() => props.setShowModal(false)} /></View>
//     </View>
//   </View>)
// }

// const styles = StyleSheet.create({
//   main: {
//     flex: 1,
//   },
//   dataWrapper: {
//     flexDirection: 'row',
//     backgroundColor: 'lightgrey',
//     justifyContent: 'space-around',
//     margin: 5,
//     padding: 5,
//   },
//   text:{
//     fontSize: 15
//   },
//   centeredView:{
//     flex:1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   modalView:{
//     backgroundColor: '#fff',
//     padding: 50,
//     margin: 20,
//     borderRadius: 10
//   },
//   input:{
//     fontSize:20,
//     borderWidth:1,
//     margin:3,
//     borderRadius:5,
//     width:250,
//     marginBottom:10
//   }

// });

// export default App;

// *******************************************************************************************

// Search Using API

// import React, {useState} from 'react';
// import {View, Text, Button, StyleSheet, TextInput} from 'react-native';

// const App = () => {
//   const [data, setData] = useState([]);

//   const searchUser = async (text: any) => {
//     const url = `http://10.0.2.2:3000/users?q=${text}`;
//     let response = await fetch(url);
//     let result = await response.json();
//     console.log(result);
//     if (result) {
//       setData(result);
//     }
    
    
    
//   };

//   return (
//     <View style={styles.main}>
//       <TextInput
//         style={{
//           fontSize: 20,
//           borderColor: 'skyblue',
//           borderWidth: 1,
//           margin: 5,
//         }}
//         placeholder="Search"
//         onChangeText={(text) => searchUser(text)}
//       />

      
//       {data.length ? data.map((item:any) => <View key={item.id || item.name || item.age}><Text>
//         {item.name}</Text></View>) : null}

//       {/* {data.length
//         ? data.map((item: any) => (
//             <View key={item.id}>
//               <Text>{item.name}</Text>
//             </View>
//           ))
//         : null} */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   main: {
//     flex: 1,
//   },
// });

// export default App;

//******************************************************************************************* */

// FIXED CODE USING GPT

// Why This Fix Works
// ✅ Data is fetched once → Prevents excessive API calls.
// ✅ Filtering happens locally → Faster & more efficient.
// ✅ Handles empty input properly → Shows all users when the input is cleared.

// Now, when you type in the search box, it will filter users locally instead of calling the API each time. 🚀


// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, StyleSheet } from 'react-native';

// const App = () => {
//   const [fullData, setFullData] = useState<any[]>([]); // Store all users
//   const [data, setData] = useState<any[]>([]); // Store filtered users
//   const [query, setQuery] = useState<string>(""); // Track input value

//   // 🔹 Fetch all users when component mounts
//   useEffect(() => {
//     const fetchUsers = async () => {
//       const url = `http://10.0.2.2:3000/users`;
//       try {
//         let response = await fetch(url);
//         let result = await response.json();
//         console.log("Fetched Data:", result);
//         if (result) {
//           setFullData(result); // Store the full list
//           setData(result); // Initially show all users
//         }
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };
//     fetchUsers();
//   }, []);

//   // 🔹 Filter users locally when query changes
//   useEffect(() => {
//     if (query.trim() === "") {
//       setData(fullData); // Reset to full list if search is empty
//     } else {
//       const filtered = fullData.filter((item) =>
//         item.name?.toLowerCase().includes(query.toLowerCase())
//       );
//       console.log("Filtered Data:", filtered);
//       setData(filtered);
//     }
//   }, [query, fullData]);

//   return (
//     <View style={styles.main}>
//       <TextInput
//         style={styles.input}
//         placeholder="Search"
//         value={query}
//         onChangeText={(text) => setQuery(text)}
//       />

//       {data.length ? (
//         data.map((item) => (
//           <View key={item.id || item.name}>
//             <Text>{item.name}</Text>
//           </View>
//         ))
//       ) : (
//         <Text>No results found</Text>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   main: { flex: 1, padding: 10 },
//   input: {
//     fontSize: 20,
//     borderColor: 'skyblue',
//     borderWidth: 1,
//     margin: 5,
//     padding: 8,
//   },
// });

// export default App;

import {Text, View} from 'react-native';

const Info = () => {
  const name = 'Abhishek Yadav';
  let age = 21;
  var email = 'abhi@gmail.com'; 
  

  return (<View style={{backgroundColor: 'yellow'}}>
    <Text style={{fontSize: 20}}> {name}</Text>
    <Text style={{fontSize: 20}}> {age}</Text>
    <Text style={{fontSize: 20}}> {email}</Text>
  </View>)
};




export default Info;
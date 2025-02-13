import {Text, View} from 'react-native';

const Info = () => {
  const name = 'Abhishek Yadav';
  let age = 21;
  var email = 'abhi@gmail.com'; 
  

  return (<View>
    <Text style={{fontSize: 30}}> {name}</Text>
    <Text style={{fontSize: 30}}> {age}</Text>
    <Text style={{fontSize: 30}}> {email}</Text>
  </View>)
};




export default Info;
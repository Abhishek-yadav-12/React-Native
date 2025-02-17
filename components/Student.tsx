import React, {Component} from "react";
import { Text, View } from "react-native";

interface StudentProps {
  name: string;
}

class Student extends Component<StudentProps> {

  render() {
    const name = "Abhishek Yadav";
    let age = 21;

    return (
      <View>
        <Text style={{fontSize: 20}}>Name: {this.props.name}</Text>
        <Text style={{fontSize: 20}}>Age: {age}</Text>
      </View>
    );
  }
}

export default Student;
import { StyleSheet } from "react-native";

const external = StyleSheet.create({
    textBox: {
        fontSize: 20,
        color: 'white',
        backgroundColor: 'skyblue'
    },
    container: {
        flex: 1,
        backgroundColor: 'lightgray',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      },
      grid: {
        color: 'white',
        backgroundColor: 'red',
        margin: 10,
        padding: 5,
        textAlign: 'center',
        textAlignVertical: 'center',
        height: 100,
        width: 100,
        fontSize: 25,
          }
});

export default external;
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect } from "react";

export default function Game() {
  const [num, setNum] = useState(0);

  const inputHandler =(event)=>{
      setNum(event.target.value);
  }

  const matchNumber = () =>{
    console.log(num)
  }

  useEffect(() => {
      matchNumber();
    }, [num]);

  return (
    <ScrollView>
      <View>
        <Text style={styles.title}>Welcome and enjoy the game</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          value={num}
          onChange={inputHandler}
          style={styles.input}
          keyboardType="numeric"
          maxLength={3}
          placeholder="Enter a number between 1 to 100"
        />
      </View>
      <View style={styles.touchable}>
        <TouchableOpacity onPress={matchNumber}>
          <Text style={styles.Play}>Play</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
    textAlign: "center",
    marginVertical: 40,
  },
  inputContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    fontSize: 20,
    fontWeight: "600",
    color: "#000000",
    marginVertical: 20,
    width: 300,
    borderRadius: 5,
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  Play: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
    textAlign: "center",
    marginVertical: 40,
    backgroundColor: "lightblue",
    height: 50,
    width: 250,
    borderRadius: 5,
    // padding: 10,
    textAlignVertical: "center",
  },
  touchable: {
    alignItems: "center",
    justifyContent: "center",
  },
});

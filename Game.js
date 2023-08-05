import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,

} from "react-native";
import { useState } from "react";

export default function Game() {
  const [guess, setGuess] = useState(0);
  const [attempts, setAttempts] = useState(0)
  const maxAttempts =3
  const min = 1;
  const max = 100;
  const randomInRange = Math.floor(Math.random() * (max - min + 1)) + min;


  const matchNumber = () =>{  
    const guessed = parseInt(guess)
    setAttempts(attempts + 1);
    if(guessed<1 || guessed>=100) {
      Alert.alert('Warning','Number must be between 0 and 100',[])
    }else if(guessed===randomInRange){
      Alert.alert('Congrats','You got it right')
      // setGuess(0)
    }else if (attempts === maxAttempts) {
      Alert.alert(`GAME OVER!`, `You've used all your attempts. The correct number was ${randomInRange}.`);
    } else {
      Alert.alert('Try again!', 'You have missed it.');
    }

  }

  return (
    <ScrollView>
      <View>
        <Text style={styles.title}>Welcome and enjoy the game</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          value={guess}
          onChangeText={(value) =>setGuess(value)}
          style={styles.input}
          keyboardType="numeric"
          maxLength={2}
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


import { View, Text,StyleSheet, Button, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import Game from './Game';

export default function Welcome() {
    const navigation = useNavigation();
    const loadGame = () => {
    navigation.navigate('Game');
    }
  return (
    <View style = {styles.body}>
      {/* <StatusBar style="auto" /> */}
          <View>
              <Text style={styles.bodyTitle}>Guessing Game</Text> 
          </View>
          <View style={styles.logo}>
            <Image source ={require('./assets/favicon.png')} />
          </View>  
          <View style={ styles.instructions}>
            <Text style={styles.instText}>In this game, you are required to input any number between 1 to 100 and if it mateches the one guessed by the computer you win. You have 3 attempts before the game ends.</Text>
          </View>
          <View style={styles.button}>
            <Button title='Get Started' onPress={loadGame}/>
          </View>
    </View>
  )
}

const styles = StyleSheet.create({
    body:{
      flex: 1,
      backgroundColor: 'plum',
      alignItems: 'center',
      // justifyContent: 'center'
      margin: 'auto',
    },
    bodyTitle:{
      fontSize: 30,
      fontWeight: 'bold',
      color: 'black',
      textAlign: 'center',
      margin: 30,
    },
    logo:{
      
    },
    instructions:{
        color: 'black',
        textAlign: 'center',
        justifyContent: 'center',
        margin: 20,
    },
    instText:{
      textAlign: 'justify',
      fontSize: 15,
    },
    button:{
      margin: 50,
      width: 300,
      // backgroundColor: 'lightblue',
      borderRadius: 10,
      padding: 10,
    }
  })
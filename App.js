
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Game from './Game';
import Welcome from './Welcome';


const Stack = createNativeStackNavigator();

export default function App(){
 
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Game" component={Game} options={{title:'Play Game'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}


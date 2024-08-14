import { StatusBar } from 'expo-status-bar';
import { useReducer } from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';

const reducer = (state: {counter: number;}, 
  action: {type: string;}) => {
  switch(action.type){
    case 'increment':
      return {
        counter: state.counter + 1
      }
    case 'decrement':
      return {
        counter: state.counter - 1
      }
    default:
      return state
  }
}

export default function App() {
  // estado | despachador de eventos | eventos | valor inicial
  const [state, dispatch] = useReducer(reducer, {counter: 0})

  const incrementCount = () => {
    dispatch({type: 'increment'})
  }

  const decrementCount = () => {
    dispatch({type: 'decrement'})
  }

  return (
    <View style={styles.container}>
      <Text style={styles.big}>{state.counter}</Text>

      <View style={styles.inline}>
        <Button title='REMOVER' onPress={decrementCount}></Button>
        <Button title='ADICIONAR' onPress={incrementCount}></Button>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  big: {
    fontSize: 40
  },
  inline: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '50%'
  }
});

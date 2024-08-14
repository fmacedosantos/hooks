import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);
  // useEffect, efeito colateral, monitora a vida da variável
  useEffect(() => {
    if(count == 0){
      Alert.alert("Carrinho", "Seu carrinho está vazio.")
    }
  }, [count])

  useEffect(() => {
    console.log("Não estou monitorando nada específico\nHouve atualização na tela")
  })

  const incrementCount = () => {
    setCount(prevState => prevState+1)
  }

  const decrementCount = () => {
    if (count > 0){
      setCount(prevState => prevState-1)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.big}>{count}</Text>

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

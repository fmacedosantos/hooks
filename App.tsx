import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.big}>0</Text>

      <View style={styles.inline}>
        <Button title='REMOVER'></Button>
        <Button title='ADICIONAR'></Button>
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

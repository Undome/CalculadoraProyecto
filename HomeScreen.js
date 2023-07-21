import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function HomeScreen(props) {
    const {navigation} = props;
    const goToCalculator = () =>{
        navigation.navigate("Calculator");
    }
  return (
    <View style={styles.container}>
      <Text>Proyecto final</Text>
      <Text>Comienza a calcular</Text>
      <Button onPress={goToCalculator} title="Ir a calculadora"></Button>
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
});

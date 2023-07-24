import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default function HomeScreen(props) {
    const {navigation} = props;
    const goToCalculator = () =>{
        navigation.navigate("Calculator");
    }
  return (
    <View style={styles.container}>
      <Image source = {require ('./assets/Tecmil.png')} />
      <Text>Proyecto final</Text>
      <Text>Comienza a calcular</Text>
      <Button onPress={goToCalculator} title="Ir a calculadora"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#22252D',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

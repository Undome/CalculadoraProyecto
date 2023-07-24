import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#22252D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    borderRadius: 10,
  },
  text: {
    fontSize: 30
  }
});

export default function HomeScreen(props) {
    const {navigation} = props;
    const goToCalculator = () =>{
        navigation.navigate("Calculator");
    }
  return (
    <View style={styles.container}>
      <Image source = {require ('./assets/Tecmil.png')} style={styles.image} />
      <Text style={styles.text}>Proyecto final</Text>
      <Text style={styles.text}>Comienza a calcular</Text>
      <Button onPress={goToCalculator} title="Ir a calculadora"></Button>
    </View>
  );
}

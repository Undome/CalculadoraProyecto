import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import HomeScreen from "./HomeScreen";
import CalculatorScreen from "./CalculatorScreen";

const Stack = createNativeStackNavigator();

export default function NavigationStack() {
  return (
      <Stack.Navigator initialRouteName = "Home">
        <Stack.Screen name ="Home" component={HomeScreen} />
        <Stack.Screen name ="Calculator" component={CalculatorScreen} />
      </Stack.Navigator>
  );
}

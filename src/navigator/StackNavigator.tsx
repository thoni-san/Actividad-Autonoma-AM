import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Pantalla1Screen } from '../screens/Pantalla1Screen';
import { Pantalla2Screen } from '../screens/Pantalla2Screen';
import { Pantalla3Screen } from '../screens/Pantalla3Screen';
import { Pantalla4Screen } from '../screens/Pantalla4Screen';
import { Pantalla5Screen } from '../screens/Pantalla5Screen';

export type RootStackParams = {
  Pantalla1: undefined;
  Pantalla2: undefined;
  Pantalla3: undefined;
  Pantalla4: undefined;
  Pantalla5: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Pantalla1"
      screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
        cardStyle: {
          backgroundColor: 'white',
        },
      }}
    >
      <Stack.Screen name="Pantalla1" options={{ title: 'Bienvenido' }} component={Pantalla1Screen} />
      <Stack.Screen name="Pantalla2" options={{ title: 'Imagen 1' }} component={Pantalla2Screen} />
      <Stack.Screen name="Pantalla3" options={{ title: 'Imagen 2' }} component={Pantalla3Screen} />
      <Stack.Screen name="Pantalla4" options={{ title: 'Mayor o Igual que' }} component={Pantalla4Screen} />
      <Stack.Screen name="Pantalla5" options={{ title: 'Menor o Igual que' }} component={Pantalla5Screen} />
    </Stack.Navigator>
  );
};
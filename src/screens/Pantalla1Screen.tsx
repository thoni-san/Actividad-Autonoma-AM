import React from 'react';
import { View, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/StackNavigator';
import { BotonPrincipal } from '../components/BotonPrincipal';

type Props = {
  navigation: StackNavigationProp<RootStackParams, 'Pantalla1'>;
};

export const Pantalla1Screen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <BotonPrincipal texto="Imagen 1" onPress={() => navigation.navigate('Pantalla2')} />
      <BotonPrincipal texto="Imagen 2" onPress={() => navigation.navigate('Pantalla3')} />
      <BotonPrincipal texto=">=" onPress={() => navigation.navigate('Pantalla4')} />
      <BotonPrincipal texto="<=" onPress={() => navigation.navigate('Pantalla5')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
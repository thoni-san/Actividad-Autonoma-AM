import React from 'react';
import { Text, Image, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { RootDrawerParams } from '../navigator/StacNavigator';
import { styles } from '../theme/appTheme';

type Props = DrawerScreenProps<RootDrawerParams, 'Pantalla1Screen'>;

export const Pantalla1Screen = ({ navigation }: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Bienvenidos</Text>
      <Text style={styles.subtitle}>^^</Text>
      <Image
        source={require('../img/logo2.png')}
        style={styles.image}
      />
      <TouchableOpacity
        style={localStyles.button}
        onPress={() => navigation.navigate('Pantalla2Screen')}
      >
        <Text style={localStyles.buttonText}>Acceder</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const localStyles = StyleSheet.create({
  button: {
    backgroundColor: '#ff6f61',
    paddingVertical: 18,
    paddingHorizontal: 50,
    borderRadius: 30,
    shadowColor: "#ff6f61",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

export const Pantalla3Screen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../img/img2.jpeg')} 
        style={styles.image}
      />
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
  image: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
  },
});
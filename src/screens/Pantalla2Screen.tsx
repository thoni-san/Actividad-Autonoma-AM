import React, { useState } from 'react';
import { Text, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';
import { InputNumeros } from '../components/InputNumeros';
import { styles } from '../theme/appTheme';

export const Pantalla2Screen = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [resultado, setResultado] = useState('');
  const [error, setError] = useState('');

  const handleDivision = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    setError('');
    setResultado('');

    if (isNaN(n1) || isNaN(n2)) {
      setError('!! Te falta un numero :( !!');
      return;
    }

    if (n2 === 0) {
      if (n1 === 0) {
        setResultado('INDETERMINACIÓN');
      } else {
        setResultado('!!! NO EXISTE DIVISIÓN PARA CERO !!!');
      }
    } else {
      const division = n1 / n2;
      setResultado(`Resultado: ${division.toFixed(2)}`);
    }
  };

  return (
    <SafeAreaView style={styles.formContainer}>
      <Text style={styles.title}>Calculadora</Text>
      
      <InputNumeros
        placeholder="Dividendo (ej: 10)"
        value={num1}
        onChangeText={setNum1}
      />
      
      <InputNumeros
        placeholder="Divisor (ej: 2)"
        value={num2}
        onChangeText={setNum2}
      />

      <TouchableOpacity style={localStyles.button} onPress={handleDivision}>
        <Text style={localStyles.buttonText}>Dividir</Text>
      </TouchableOpacity>

      {resultado ? <Text style={styles.resultadoTexto}>{resultado}</Text> : null}
      {error ? <Text style={styles.errorTexto}>{error}</Text> : null}
    </SafeAreaView>
  );
};

const localStyles = StyleSheet.create({
    button: {
        backgroundColor: '#17a2b8',
        paddingVertical: 18,
        borderRadius: 30,
        marginTop: 25,
        width: '95%',
        alignItems: 'center',
        shadowColor: "#17a2b8",
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
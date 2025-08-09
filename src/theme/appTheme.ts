import { StyleSheet } from "react-native";

export const colores = {
    primario: '#4a90e2',
    fondo: '#f7f9fc',    
    texto: '#333333', 
    blanco: '#ffffff',
    borde: '#cccccc',
    exito: '#28a745', 
};

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colores.fondo,
        padding: 20,
    },

    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: colores.texto,
        marginBottom: 24,
    },

    resultadoTexto: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colores.exito,
        marginTop: 20,
        textAlign: 'center',
    },

    image: {
        width: 250,
        height: 250,
        borderRadius: 15, 
        marginBottom: 20,
    },
});
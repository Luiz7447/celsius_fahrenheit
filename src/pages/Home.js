import React, {useState} from "react";

import  {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';

export default function Home (){

    let [temp1, setTemp1] = useState();
    let [resultado, setResultado] = useState();

    function ConverterTemperatura(){

let resultado = (9 * parseFloat(temp1) + 160) / 5;
setResultado(resultado);

alert("A tempera é de: " + resultado + " Fahrenheit");

    }

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>CONVERSOR DE TEMPERATURA</Text>

            <Text style={styles.subtitulo}>Insira a temperatura em Celsius</Text>

            <TextInput onChangeText={setTemp1} style={styles.campo} placeholder="Insira a temperatura em Celsius"/>

            <TouchableOpacity style={styles.botao} onPress={ConverterTemperatura}>
                <Text style={styles.botaoTexto}>Converter</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#E6E6FA',
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    titulo:{
        fontSize:26,
        color:'#000',
        fontWeight:'bold',
        marginBottom:40,
    },

    subtitulo:{
        fontSize:20,
        color:'#000',
        fontWeight:'bold',
        marginBottom:20,
    },

    campo:{
        backgroundColor: '#F8F8FF',
        fontSize:18,
        padding:8,
        marginTop:10,
        width:300,
        borderRadius:10
    },

    botao:{
        backgroundColor:'#D8BFD8',
        alignItems: "center",
        padding:15,
        borderRadius:7,
        marginTop:20,
        width:250
    },

    botaoTexto:{
        color: '#4B0082',
        fontSize:17,
        fontWeight: "700",
    }
});
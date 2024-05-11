/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Linha ({ nomeLinha }) {
    return <View style={styles.container}>
        <Text style={styles.texto}>{nomeLinha}</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
      height: 40,
      width: '100%',
      backgroundColor: '#c9c5c4',
    },
    texto: {
        fontSize: 18,
        color: '#9e9999',
        paddingHorizontal: 15,
        top: 8,
    }
})
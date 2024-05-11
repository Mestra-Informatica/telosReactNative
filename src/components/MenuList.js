/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ListItem } from '@rneui/themed';

export default function MenuList({ menuItem, nomeMenu }) {
    return (
        <ListItem bottomDivider onPress={() => console.log('Item selecionado:', menuItem)}>
            <ListItem.Content>
                <ListItem.Title style={styles.texto}>{nomeMenu}</ListItem.Title>
            </ListItem.Content>
        </ListItem>
    );
}

const styles = StyleSheet.create({
    texto: {
        fontSize: 15,
        color: '#9e9999',
    }
})
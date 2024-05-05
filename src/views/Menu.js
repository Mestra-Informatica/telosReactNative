/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Text, TouchableOpacity  } from 'react-native';
import { ListItem } from '@rneui/themed';
import menu from '../data/menu';

export default props => {
    const [isAccordionOpen, setIsAccordionOpen] = useState(false);

    function toggleAccordion() {
        setIsAccordionOpen(!isAccordionOpen);
    }

    function accordion() {
        return (
            <TouchableOpacity style={styles.container} onPress={toggleAccordion}>
                <Text style={styles.participante}>PARTICIPANTE</Text>
                <Text style={styles.nome}>ROBERTO LANDELL DE MOURA</Text>
            </TouchableOpacity>
        );
    }

    function getMenuItem({ item: menuItem }) {
        return (
            <ListItem bottomDivider onPress={() => props.navigation.navigate(menuItem.link)}>
                <ListItem.Content>
                    <ListItem.Title>{menuItem.name}</ListItem.Title>
                </ListItem.Content>
            </ListItem>
        );
    }

    return (
        <View>
            {accordion()}
            {isAccordionOpen &&
                <View style={styles.accordion}>
                    <View>
                        <Text style={styles.param}>PATROCINADORA</Text>
                        <Text style={styles.param}>MATRÍCULA</Text>
                        <Text style={styles.param}>PLANO</Text>
                        <Text style={styles.param}>SITUAÇÃO</Text>
                        <Text style={styles.param}>REGIME TRIBUTÁRIO</Text>
                    </View>

                    <View style={styles.accordionContainer}>
                        <Text style={styles.value}>TELOS</Text>
                        <Text style={styles.value}>0000000001</Text>
                        <Text style={styles.value}>PCV I- CNPB 1998006638</Text>
                        <Text style={styles.value}>ATIVO PCV I</Text>
                        <Text style={styles.value}>Tabela Regressiva Lei 11.053</Text>
                    </View>
                </View>
            }
            <FlatList
                keyExtractor={menuItem => menuItem.id.toString()}
                data={menu}
                renderItem={getMenuItem}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#1a85a9',
      width: '100%',
      height: 60,
      paddingTop: 10,
      paddingLeft: 15
    },
    participante: {
        color: '#004564'
    },
    nome: {
        color: '#fff',
        fontSize: 15
    },
    accordion: {
        backgroundColor: '#aeced9',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 18,
    },
    accordionContainer: {
        marginLeft: 30,
    },
    param: {
        color: '#8fadb8',
        fontWeight: 'bold',
    },
    value: {
        fontWeight: 'bold',
    }
})
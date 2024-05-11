/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Text, TouchableOpacity  } from 'react-native';
import Linha  from '../components/Linha';
import MenuList  from '../components/MenuList';

export default function Menu({ route }) {
    const { dadosUsuario } = route.params;

    const informacoesParticipante = dadosUsuario.informacoesParticipante;
    const nome = informacoesParticipante.length > 0 ? informacoesParticipante[0].nome : '';
    const patrocinadora = informacoesParticipante.length > 0 ? informacoesParticipante[0].patrocinadora : '';
    const matricula = informacoesParticipante.length > 0 ? informacoesParticipante[0].matricula : '';
    const plano = informacoesParticipante.length > 0 ? informacoesParticipante[0].plano : '';
    const situacao = informacoesParticipante.length > 0 ? informacoesParticipante[0].situacao : '';
    const regimetributario = informacoesParticipante.length > 0 ? informacoesParticipante[0].regimetributario : '';

    const [isAccordionOpen, setIsAccordionOpen] = useState(false);

    function toggleAccordion() {
        setIsAccordionOpen(!isAccordionOpen);
    }

    function accordion() {
        return (
            <TouchableOpacity style={styles.container} onPress={toggleAccordion}>
                <Text style={styles.participante}>PARTICIPANTE</Text>
                <Text style={styles.nome}>{nome}</Text>
            </TouchableOpacity>
        );
    }

    const dadosView = dadosUsuario.dadosView;
    const menuItems = Object.values(dadosView).map((menu, index) => {
        const menuEntries = Object.entries(menu);
        const menuItem = menuEntries.map(([id, nome]) => ({ id, nome }));
        return menuItem;
    });

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
                        <Text style={styles.value}>{patrocinadora}</Text>
                        <Text style={styles.value}>{matricula}</Text>
                        <Text style={styles.value}>{plano}</Text>
                        <Text style={styles.value}>{situacao}</Text>
                        <Text style={styles.value}>{regimetributario}</Text>
                    </View>
                </View>
            }

            <Linha nomeLinha={'Menu'}/>

            <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={menuItems.flat()}
            renderItem={({ item }) => <MenuList nomeMenu={item.nome} />}
            />
        </View>
    );
}

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
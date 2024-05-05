/* eslint-disable prettier/prettier */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../views/login';
import TermoDeUso from '../views/TermoDeUso';
import Menu from '../views/Menu';
import DadosCadastrais from '../views/DadosCadastrais';

const Stack = createStackNavigator();

export default props => (
    <Stack.Navigator initialRouteName='Login'>
    <Stack.Screen 
        name='Login' 
        component={Login} 
        options={{ headerShown: false }}/>
        
    <Stack.Screen 
        name='TermoDeUso' 
        component={TermoDeUso} 
        options={{ headerShown: true, headerTitle: 'Termos de Uso' }}/>

    <Stack.Screen 
        name='Menu' 
        component={Menu} 
        options={{ headerShown: true}}/>

    <Stack.Screen 
        name='DadosCadastrais' 
        component={DadosCadastrais} 
        options={{ headerShown: true, headerTitle: 'Dados Cadastrais'}}/>

    </Stack.Navigator>
)
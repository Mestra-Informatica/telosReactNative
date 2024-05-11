/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { ActivityIndicator, SafeAreaView, View, Image, Text, StyleSheet, TextInput, Switch, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import { Icon } from '@rneui/themed';

export default function Login({ navigation }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isEnabled, setIsEnabled] = useState(false);
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    const payload = {
      login: {
        u: "",
        s: ""
      },
      param: {
        cpf: cpf,
        sen: senha,
        acao: "logar"
      }
    };

    try {
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      };

      const response = await fetch('http://www.sysprev.com.br:8585/prevmobile-ws/rest/acesso/padrao', requestOptions);

      if (!response.ok) {
        throw new Error('Erro ao fazer requisição');
      }
      console.log(response)

      const data = await response.json();
      navigation.navigate('Menu', { dadosUsuario: data.result });
    } catch (error) {
      setError('CPF ou Senha inválidos.');
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  function termoDeUso(){
    navigation.navigate('TermoDeUso');
  }

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <View style={[styles.container, styles.center]}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <KeyboardAvoidingView style={styles.flex1} behavior={Platform.OS === 'ios' ? 'padding' : null}>
          <View style={styles.center}>
            <View>
              <Icon name='downcircleo' color='#517fa4' />
            </View>

            <Image style={styles.img} source={require('../img/logo.png')} />

            <Text style={styles.texto}>Preencha seus dados pessoais para entrar</Text>

            <TextInput style={styles.input} placeholder="Digite seu CPF" value={cpf} onChangeText={setCpf} keyboardType="numeric"/>

            <TextInput style={styles.input} placeholder="Digite sua senha" value={senha} onChangeText={setSenha} secureTextEntry={true} />

            <View style={styles.space}>
              <Text style={styles.textoSwitch}>Guardar Meu CPF</Text>
              <Switch
                trackColor={{ false: '#767577', true: '#80c9c1' }}
                thumbColor={isEnabled ? '#009787' : '#f4f3f4'}
                onValueChange={toggleSwitch}
                value={isEnabled}/>
            </View>

            {error ? <Text style={styles.textoError}>{error}</Text> : null}

            <TouchableOpacity onPress={handleLogin} style={styles.button}>
              <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>

            <View style={styles.footer}>
              <View style={styles.linha}/>
              <TouchableOpacity onPress={termoDeUso}>
                <Text style={styles.textoFooter}>Termo de Uso</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  flex1: {
    flex: 1,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  img: {
    marginTop: '20%',
    marginBottom: '15%',
  },
  texto: {
    fontSize: 15,
    marginBottom: 15,
    textAlign: 'center',
  },
  textoError: {
    top: 20,
    fontSize: 15,
    textAlign: 'center',
    color: 'red',
  },
  textoSwitch: {
    marginRight: '45%',
    fontSize: 15,
  },
  input: {
    height: 40,
    borderWidth: 0.2,
    borderColor: '#ccc',
    width: '90%',
  },
  space: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
  },
  footer: {
    marginTop: '40%',
    width: '100%',
    alignItems: 'center',
  },
  linha: {
    width: '100%',
    backgroundColor: '#ccc',
    height: 1,
    marginBottom: 10,
  },
  textoFooter: {
    color: '#ccc',
  },
  button: {
    backgroundColor: '#1c7ea1',
    color: 'white',
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
    top: '5%',
    borderRadius: 5,
    width: '90%',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  },
});

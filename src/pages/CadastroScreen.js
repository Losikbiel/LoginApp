import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

const CadastroScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    Alert.alert('Cadastro', 'Usuário cadastrado com sucesso!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome de usuário"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableHighlight title="Cadastrar" style={styles.cbutton} onPress={handleRegister}>
            <View style={styles.button}>

                  <Text style={styles.value}>
                    Cadastrar
                  </Text>

            </View>

      </TouchableHighlight>
    </View>
  );
};

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      alignItems: "center",
      justifyContent: 'center',
      backgroundColor: '#7E57C2',
    },
    title: {
      flexGrow: 0.09,
      fontSize: 36,
      fontWeight: 'bold',
      color: '#ECEFF1', 
      marginBottom: 20,
      textAlign: 'center',
    },
    input: {
      width: "300",
      borderWidth: 1,
      borderColor: '#4527A0', 
      borderRadius: 10,
      padding: 18,
      marginBottom: 20,
      backgroundColor: '#CFD8DC', 
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 3,
      elevation: 2,
    },
    cbutton: {
        marginTop: 20,

    },
    button: {
      width: 300,
      backgroundColor: '#B39DDB', 
      padding: 10,
      alignItems: 'center',
      
    },
    value: {
      color: '#ffffff',
      fontWeight: 'bold',
      fontSize: 18,
    },
  });

export default CadastroScreen;

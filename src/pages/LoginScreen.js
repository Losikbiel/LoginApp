import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, TouchableHighlight, Alert, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === 'admin@admin.com' && password === '123456') {
      navigation.navigate('Home');
    } else {
      Alert.alert('Erro', 'Usuário ou senha incorretos!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
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
      <TouchableHighlight title="Cadastrar" style={styles.lbutton} onPress={handleLogin}>
            <View style={styles.button}>

                  <Text style={styles.value}>
                    Entrar
                  </Text>

            </View>

      </TouchableHighlight>

      <TouchableOpacity onPress={() => Alert.alert('Esqueceu a senha?')}>
        <Text style={styles.link}>Recuperar Senha</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
        <Text style={styles.link}>Não tem uma conta? Cadastre-se</Text>
      </TouchableOpacity>
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
     
        fontSize: 36,
        fontWeight: 'bold',
        color: '#ECEFF1', 
        marginBottom: 60,
        textAlign: 'center',
    },
    input: {
        width: 300,
        borderWidth: 1,
        borderColor: '#4527A0', 
        borderRadius: 10,
        padding: 15,
        marginBottom: 15,
        backgroundColor: '#ffffff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 2,
    },
    link: {

        color: '#4fbdbd', 
        textAlign: 'center',
        marginVertical: 10,
        fontSize: 16,
        textDecorationLine: 'underline',
    },
    lbutton: {


    },
    button: {
    
      backgroundColor: '#B39DDB', 
      width: 300,
      padding: 15,
      alignItems: 'center',
    },
    value: {
      color: '#ffffff',
      fontWeight: 'bold',
      fontSize: 16,
    },
  });
  
export default LoginScreen;
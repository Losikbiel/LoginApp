import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AboutScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Sobre o App</Text>
    <Text style={styles.description}>
      Este é um aplicativo de exemplo, desenvolvido para demonstrar o uso do React Navigation, 
      incluindo a navegação entre diferentes telas, com foco em uma boa estrutura de código e 
      boas práticas de design.
    </Text>
    <Text style={styles.description}>
      A ideia é fornecer uma interface simples, porém funcional, para que os usuários possam 
      navegar entre várias telas, como perfil, configurações e informações sobre o app.
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7E57C2',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FAFAFA',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: '#ECEFF1',
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default AboutScreen;

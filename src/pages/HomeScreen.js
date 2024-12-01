import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Bem-vindo ao App!</Text>
    <Text style={styles.subtitle}>Explore as opções do menu lateral para começar.</Text>
    
    <View style={styles.infoContainer}>
      <Text style={styles.infoText}>Aqui você pode acessar suas configurações, ver o perfil e muito mais.</Text>
      <Text style={styles.infoText}>O que você deseja fazer hoje?</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#7E57C2',  
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FAFAFA',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#ECEFF1',
    textAlign: 'center',
    marginBottom: 20,
  },
  infoContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  infoText: {
    fontSize: 18,
    color: '#ECEFF1',
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default HomeScreen;

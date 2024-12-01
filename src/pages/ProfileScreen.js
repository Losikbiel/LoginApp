import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProfileScreen = () => (
  <View style={styles.container}>
    <Image
      source={{ uri: 'https://thumbs.dreamstime.com/b/homem-cinzento-do-placeholder-da-foto-pessoa-gen%C3%A9rica-silhueta-cinzenta-em-um-fundo-branco-144511705.jpg' }}  // Coloque o URL da sua foto aqui
      style={styles.profileImage}
    />
    <Text style={styles.title}>João Silva</Text>
    <Text style={styles.subtitle}>joao.silva@email.com</Text>
    <Text style={styles.bio}>
      Sou desenvolvedor mobile com experiência em React Native e Flutter. Adoro resolver problemas e criar soluções eficientes.
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7E57C2',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FAFAFA',
  },
  subtitle: {
    fontSize: 16,
    color: '#ECEFF1',
  },
  bio: {
    fontSize: 14,
    color: '#ECEFF1',
    textAlign: 'center',
    marginHorizontal: 20,
    marginTop: 10,
  },
});

export default ProfileScreen;

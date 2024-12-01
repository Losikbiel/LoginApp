import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const SettingsScreen = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const [isNotificationsEnabled, setIsNotificationsEnabled] = React.useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configurações</Text>

      <View style={styles.settingOption}>
        <Text style={styles.optionLabel}>Modo Escuro</Text>
        <Switch
          value={isDarkMode}
          onValueChange={(value) => setIsDarkMode(value)}
        />
      </View>

      <View style={styles.settingOption}>
        <Text style={styles.optionLabel}>Notificações</Text>
        <Switch
          value={isNotificationsEnabled}
          onValueChange={(value) => setIsNotificationsEnabled(value)}
        />
      </View>

      <View style={styles.settingOption}>
        <Text style={styles.optionLabel}>Idioma</Text>
        <Text style={styles.optionValue}>Português</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#7E57C2',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FAFAFA',
    textAlign: 'center',
    marginBottom: 20,
  },
  settingOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  optionLabel: {
    fontSize: 18,
    color: '#ECEFF1',
  },
  optionValue: {
    fontSize: 18,
    color: '#ECEFF1',
  },
});

export default SettingsScreen;

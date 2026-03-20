import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';

export default function App() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <View style={styles.container}>

      <View style={styles.container}>
        <Switch value={darkMode} onValueChange={setDarkMode} />
        <Text>{darkMode === true ? "Modo escuro" : "Modo claro"}</Text>
      </View>



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

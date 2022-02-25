import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Provider as QueryProvider } from 'urql';
import client from './api/urql';
import PokemonGenerator from './PokemonGenerator';

export default function App() {
  return (
    <QueryProvider value={client}>
      <View style={styles.container}>
        <PokemonGenerator />
        <StatusBar style="auto" />
      </View>
    </QueryProvider>
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

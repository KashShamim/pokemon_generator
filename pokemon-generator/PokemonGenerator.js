import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {
  Query, // component
  useQuery // hook
} from 'urql';
import getPokemons from './api/getPokemons';

const PokemonGenerator = () => {
  return (
    <View style={styles.container}>
      <Text>🤔</Text>
      <Text>
        Hmm... Needs more Pokemon
      </Text>
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

export default PokemonGenerator;

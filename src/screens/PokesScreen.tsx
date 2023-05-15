import { View, StyleSheet } from "react-native";
import React from "react";
import { useState, useEffect } from "react";
import { getPokemonsApi, getPokemonDetailsApi } from "../api/pokemonApi";
import PokeList from "../components/PokeList";
import type { Pokemons } from "../utils/types";

export default function PokesScreen() {
  const [pokemons, setPokemons] = useState<Pokemons>([]);
  const [nextUrl, setNextUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      await loadPokemons();
    })();
  }, []);

  const loadPokemons = async () => {
    try {
      setLoading(true);
      const response = await getPokemonsApi(nextUrl);
      setNextUrl(response.next);
      const pokemonsList = [];
      for await (let pokemon of response.results) {
        const pokemonDetails = await getPokemonDetailsApi(pokemon.url);
        pokemonsList.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          image: pokemonDetails.sprites.other["official-artwork"].front_default,
        });
      }
      setPokemons([...pokemons, ...pokemonsList]);
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <PokeList
        pokemons={pokemons}
        loadPokemons={loadPokemons}
        notFull={nextUrl}
        isLoading={loading}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 4,
    paddingTop: 4,
  },
});

import {
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Platform,
} from "react-native";
import React from "react";
import PokeCard from "./PokeCard";
import type { Pokemons } from "../utils/types";

type PokemonsListProps = {
  pokemons: Pokemons;
  loadPokemons?: () => void;
  notFull?: string | null;
  isLoading?: boolean;
};

export default function PokemonList({
  pokemons,
  loadPokemons,
  notFull,
  isLoading,
}: PokemonsListProps) {
  const loadMorePokemons = () => {
    loadPokemons?.();
  };
  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <PokeCard pokemon={item} />}
      onEndReached={!isLoading && notFull ? loadMorePokemons : null}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        isLoading && notFull ? (
          <ActivityIndicator
            size="large"
            style={styles.spinner}
            color="#BAD7E9"
          />
        ) : null
      }
    />
  );
}

const styles = StyleSheet.create({
  spinner: {
    marginBottom: Platform.OS === "android" ? 90 : 60,
    marginTop: 20,
  },
});

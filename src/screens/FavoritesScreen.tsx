import { SafeAreaView, StyleSheet, Platform } from "react-native";
import React from "react";
import PokeList from "../components/PokeList";
import { useAppSelector } from "../store/store";

export default function Favorites() {
  const favorites = useAppSelector((state) => state.favorites.favorites);

  return (
    <SafeAreaView style={styles.container}>
      <PokeList pokemons={favorites} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 20 : 10,
  },
});

import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { capitalize } from "lodash";
import type { Pokemon } from "../utils/types";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { PokeStackParamList } from "../utils/types";
import { getColorByPokeType } from "../utils/getColorByPokeType";

export default function PokemonCard({ pokemon }: { pokemon: Pokemon }) {
  const navigation =
    useNavigation<NativeStackNavigationProp<PokeStackParamList>>();
  const goToPokemon = () => {
    navigation.navigate("PokemonScreen", {
      id: pokemon.id,
      name: pokemon.name,
      image: pokemon.image,
      type: pokemon.type,
    });
  };

  const boxColor = getColorByPokeType(pokemon.type);
  const boxStyle = { backgroundColor: boxColor, ...styles.box };

  return (
    <Pressable onPress={goToPokemon} style={styles.mainContainer}>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={boxStyle}>
            <Text style={styles.pokeName}>{capitalize(pokemon.name)}</Text>
            <Image source={{ uri: pokemon.image }} style={styles.image} />
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginHorizontal: 4,
  },

  card: {
    flex: 1,
    height: 130,
  },
  spacing: {
    flex: 1,
    padding: 5,
  },
  box: {
    flex: 1,
    borderRadius: 15,
    padding: 10,
  },
  pokeName: {
    color: "#FCFFE7",
    fontWeight: "bold",
    fontSize: 15,
    paddingTop: 10,
  },
  image: {
    position: "absolute",
    bottom: 2,
    right: 18,
    width: 90,
    height: 90,
  },
});

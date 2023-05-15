import { View, StyleSheet, Image, SafeAreaView } from "react-native";
import React from "react";
import { getColorByPokeType } from "../utils/getColorByPokeType";
import type { Pokemon } from "../utils/types";

export default function Header({ image, type }: Pokemon) {
  const pokemonColor = getColorByPokeType(type);
  const bgStyle = [{ backgroundColor: pokemonColor, ...styles.bg }];

  return (
    <View>
      <View style={bgStyle} />
      <SafeAreaView style={styles.content}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: image }} style={styles.image} />
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  bg: {
    width: "100%",
    height: 400,
    position: "absolute",
    borderBottomEndRadius: 300,
    borderBottomLeftRadius: 300,
    transform: [{ scaleX: 2 }],
  },
  content: {
    marginHorizontal: 20,
    marginTop: 30,
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    top: 70,
  },
  image: {
    width: 250,
    height: 250,
  },
});

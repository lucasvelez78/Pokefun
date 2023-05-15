import { View, Text, StyleSheet, Platform } from "react-native";
import React from "react";
import type { PokemonDetailed } from "../utils/types";
import { capitalize, map } from "lodash";
import { getColorByPokeType } from "../utils/getColorByPokeType";

export default function Info({ name, types, stats }: PokemonDetailed) {
  const pokemonColor = getColorByPokeType(types[0].type.name);
  const typeStyle = [{ color: pokemonColor, ...styles.type }];
  const barStyle = (number: number) => {
    const color = number > 50 ? "#2B3467" : "#BAD7E9";
    return {
      width: `${number > 100 ? 75 : Math.floor(number * 0.75)}%`,
      backgroundColor: color,
      borderRadius: 20,
      height: 5,
    };
  };

  return (
    <View>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{capitalize(name)}</Text>
      </View>
      <View style={styles.typeContainer}>
        <Text style={typeStyle}>{capitalize(types[0].type.name)}</Text>
      </View>
      <View style={styles.statsContainer}>
        {map(stats, (item, index) => (
          <View key={index} style={styles.block}>
            <View style={styles.blockTitle}>
              <Text style={styles.stats}>{capitalize(item.stat.name)}</Text>
            </View>
            <View style={styles.blockPoints}>
              <Text style={styles.points}>{item.base_stat}</Text>
              <View style={barStyle(item.base_stat)}></View>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  nameContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    marginTop: 150,
    color: "#6B728E",
    fontSize: 40,
    fontWeight: "bold",
  },
  typeContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },
  type: {
    fontSize: 30,
    fontWeight: "bold",
  },
  statsContainer: {
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: Platform.OS === "android" ? 35 : 0,
  },
  block: {
    flexDirection: "row",
  },
  blockTitle: {
    width: "30%",
  },
  stats: {
    marginVertical: 4,
    color: "#6b6b6b",
    fontSize: 14,
  },
  blockPoints: {
    width: "50%",
    flexDirection: "row",
    alignItems: "center",
  },

  points: {
    color: "#222831",
    width: "15%",
    marginLeft: 20,
  },
});

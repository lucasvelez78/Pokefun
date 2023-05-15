import { ScrollView } from "react-native";
import React, { useState, useEffect, FC, useLayoutEffect } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { PokeStackParamList } from "../utils/types";
import { PokemonDetailed } from "../utils/types";
import { getPokemonDetailByIdApi } from "../api/pokemonApi";
import Header from "../components/PokeDetailHeader";
import Info from "../components/PokeDetailInfo";
import { useNavigation } from "@react-navigation/native";
import Favorite from "../components/FavoriteIcon";

type PokemonProps = NativeStackScreenProps<PokeStackParamList, "PokemonScreen">;

const Pokemon: FC<PokemonProps> = ({ route: { params } }) => {
  const [pokemon, setPokemon] = useState<PokemonDetailed>();

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Favorite
          id={pokemon?.id}
          name={pokemon?.name}
          type={pokemon?.types[0].type.name}
          image={pokemon?.sprites.other["official-artwork"].front_default}
        />
      ),
      headerLeft: () => (
        <Icon
          name="arrow-left"
          color="#fff"
          size={22}
          style={{ marginLeft: 20, marginTop: 20 }}
          onPress={navigation.goBack}
        />
      ),
    });
  }, [params, pokemon, navigation]);

  useEffect(() => {
    (async () => {
      try {
        const response = await getPokemonDetailByIdApi(params.id);
        setPokemon(response);
      } catch (error) {
        navigation.goBack();
      }
    })();
  }, [params]);

  if (!pokemon) return null;

  return (
    <ScrollView>
      <Header
        name={pokemon.name}
        id={pokemon.id}
        image={pokemon.sprites.other["official-artwork"].front_default}
        type={pokemon.types[0].type.name}
      />
      <Info
        name={pokemon.name}
        types={pokemon.types}
        stats={pokemon.stats}
        id={pokemon.id}
        sprites={pokemon.sprites}
      />
    </ScrollView>
  );
};

export default Pokemon;

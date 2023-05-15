import React, { Dispatch, SetStateAction } from "react";

export type Pokemon = {
  id: number | undefined;
  name: string | undefined;
  type: string | undefined;
  image: string | undefined;
};

export type Pokemons = Pokemon[];

export type PokemonColors = {
  normal: string;
  fighting: string;
  flying: string;
  poison: string;
  ground: string;
  rock: string;
  bug: string;
  ghost: string;
  steel: string;
  fire: string;
  water: string;
  grass: string;
  electric: string;
  psychic: string;
  ice: string;
  dragon: string;
  dark: string;
  fairy: string;
};

export type PokemonDetailed = {
  id: number | undefined;
  name: string | undefined;
  sprites: {
    other: {
      ["official-artwork"]: {
        front_default: string | undefined;
      };
    };
  };
  types: {
    type: {
      name: string | undefined;
    };
  }[];
  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
};

export type User = {
  userName: string;
  password: string;
};

export type UserDetails = {
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
};

export type PokeStackParamList = {
  Main: undefined;
  PokesScreen: undefined;
  FavoritesScreen: undefined;
  PokemonScreen: {
    id: number | undefined;
    name: string | undefined;
    image: string | undefined;
    type: string | undefined;
  };
};

export interface UserContextInterface {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
}

import { POKEMON_TYPE_COLORS } from "./constants";
import type { PokemonColors } from "./types";

const colors: PokemonColors = POKEMON_TYPE_COLORS;

export const getColorByPokeType = (type: string | undefined) =>
  colors[type?.toLowerCase() as keyof typeof colors];

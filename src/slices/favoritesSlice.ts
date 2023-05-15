import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store/store";
import type { Pokemon } from "../utils/types";
import { forIn } from "lodash";

export type FavoritesState = {
  favorites: Pokemon[];
};

const initialState: FavoritesState = {
  favorites: [],
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorite: (state, action: PayloadAction<Pokemon>) => {
      state.favorites.push({
        id: action.payload.id,
        name: action.payload.name,
        image: action.payload.image,
        type: action.payload.type,
      });
    },
    removeFromFavorites: (state, action: PayloadAction<Pokemon>) => {
      const indexToRemove = state.favorites.findIndex(
        (poke) => poke.id === action.payload.id
      );
      state.favorites.splice(indexToRemove, 1);
    },
    removeAllFavorites: (state) => {
      const iterations = state.favorites.length;
      for (let i = 0; i < iterations; i++) {
        state.favorites.pop();
      }
    },
  },
});

export const { addToFavorite, removeFromFavorites, removeAllFavorites } =
  favoritesSlice.actions;

export const selectFavorites = (state: RootState) => state.favorites;

export default favoritesSlice.reducer;

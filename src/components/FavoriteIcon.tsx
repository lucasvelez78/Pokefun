import React, { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/AntDesign";
import { useSelector } from "react-redux";
import { selectUser } from "../slices/userSlice";
import { useAppDispatch, useAppSelector } from "../store/store";
import { addToFavorite } from "../slices/favoritesSlice";
import { removeFromFavorites } from "../slices/favoritesSlice";
import type { Pokemon } from "../utils/types";

export default function Favorite({ id, name, type, image }: Pokemon) {
  const [isFavorite, setIsFavorite] = useState<boolean | undefined>(undefined);
  const [checkFavorite, setCheckFavorite] = useState<boolean>(false);
  const favorites = useAppSelector((state) => state.favorites.favorites);

  const user = useSelector(selectUser);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const pokeFav = favorites.find((pokemon) => pokemon.id === id);
    if (pokeFav) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }, [id, checkFavorite]);

  const onCheckFavorite = () => {
    setCheckFavorite((prev) => !prev);
  };

  const addToFavorites = () => {
    if (user) {
      try {
        dispatch(addToFavorite({ id, name, type, image }));
        onCheckFavorite();
      } catch (error) {
        throw error;
      }
    }
  };

  const removePokeFromFavorites = () => {
    if (user) {
      try {
        dispatch(removeFromFavorites({ id, name, type, image }));
        onCheckFavorite();
      } catch (error) {
        throw error;
      }
    }
  };

  return (
    <Icon
      name={isFavorite ? "heart" : "hearto"}
      color="#fff"
      size={22}
      style={{ marginRight: 20, marginTop: 20 }}
      onPress={isFavorite ? removePokeFromFavorites : addToFavorites}
    />
  );
}

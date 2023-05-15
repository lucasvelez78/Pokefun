import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useAppDispatch, useAppSelector } from "../store/store";
import { selectUser } from "../slices/userSlice";
import { removeAllFavorites } from "../slices/favoritesSlice";
import { logout } from "../slices/userSlice";

const UserPage = () => {
  const user = useAppSelector(selectUser);
  const dispatchUser = useAppDispatch();
  const dispatchFavorites = useAppDispatch();
  const favoritePokes = useAppSelector((state) => state.favorites.favorites);

  const handleLogout = () => {
    dispatchUser(logout());
    dispatchFavorites(removeAllFavorites());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome,</Text>
      <Text style={styles.name}>{user?.name}</Text>
      <Text style={styles.aka}>a.k.a</Text>
      <Text style={styles.nickname}>{user?.nickname}</Text>
      <View>
        <Text style={styles.favorites}>Favorite Pokes:</Text>
        <Text style={styles.list}>
          {favoritePokes?.map((poke) => poke.name).join(" • ")}
        </Text>
      </View>

      <View style={styles.logContainer}>
        <Pressable onPress={handleLogout}>
          <Text style={styles.logout}>Exit</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default UserPage;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
  },
  welcome: {
    fontSize: 60,
    fontWeight: "700",
    marginBottom: 0,
    color: "#BAD7E9",
  },
  name: {
    fontSize: 46,
    color: "#2B3467",
    marginBottom: -4,
  },
  aka: {
    fontSize: 28,
    fontWeight: "600",
    color: "#BAD7E9",
    marginBottom: -4,
  },
  nickname: {
    fontSize: 30,
    color: "#2B3467",
    marginBottom: 26,
  },
  favorites: {
    fontSize: 28,
    fontWeight: "600",
    color: "#BAD7E9",
    marginBottom: 2,
  },
  list: {
    fontSize: 20,
    color: "#2B3467",
  },
  logContainer: {
    marginTop: 50,
    alignItems: "center",
  },
  logout: {
    fontSize: 24,
    color: "#BAD7E9",
  },
});

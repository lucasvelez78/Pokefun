import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Pressable } from "react-native";
import { useAppDispatch } from "../store/store";
import { login } from "../slices/userSlice";

export default function WelcomeForm() {
  const [username, setUsername] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");
  const dispatch = useAppDispatch();

  const handleSubmit = () => {
    dispatch(
      login({
        name: username,
        nickname: nickname,
        loggedIn: true,
      })
    );
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Hello!</Text>
      <TextInput
        placeholder="Name"
        style={styles.input}
        autoCapitalize="none"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        placeholder="Nickname"
        style={styles.input}
        autoCapitalize="none"
        value={nickname}
        onChangeText={(text) => setNickname(text)}
      />

      <Pressable onPress={handleSubmit}>
        <Text style={styles.log}>Enter</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 48,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 30,
    color: "#BAD7E9",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "white",
    width: 220,
    borderColor: "white",
  },
  log: {
    fontSize: 24,
    color: "#BAD7E9",
    marginTop: 30,
  },
});

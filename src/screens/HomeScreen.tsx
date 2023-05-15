import { StyleSheet, Platform, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../slices/userSlice";
import WelcomeForm from "../components/WelcomeForm";
import UserPage from "../components/UserPage";

const HomeScreen = () => {
  const user = useSelector(selectUser);
  return (
    <View style={styles.container}>
      {user ? <UserPage /> : <WelcomeForm />}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 4,
    paddingTop: Platform.OS === "android" ? 120 : 240,
    backgroundColor: "#576CBC",
    height: "100%",
  },
  welcome: {
    fontSize: 46,
    fontWeight: "700",
    textAlign: "center",
    color: "#BAD7E9",
  },
});

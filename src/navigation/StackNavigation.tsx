import { Image } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import PokesScreen from "../screens/PokesScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import PokemonScreen from "../screens/PokemonScreen";
import Icon from "react-native-vector-icons/FontAwesome";
import type { PokeStackParamList } from "../utils/types";

const StackNavigator = () => {
  const Stack = createNativeStackNavigator<PokeStackParamList>();
  const Tab = createBottomTabNavigator();

  function BottomTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Icon name="user" size={26} color="#2B3467" />
              ) : (
                <Icon name="user-o" size={26} color="#2B3467" />
              ),
            tabBarLabel: "User",
            tabBarLabelStyle: { color: "#2B3467" },
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Pokes"
          component={PokesScreen}
          options={{
            tabBarIcon: () => renderPokeball(),
            tabBarLabel: "",
            tabBarLabelStyle: { color: "#003865" },
            headerShown: true,
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={FavoritesScreen}
          options={{
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Icon name="heart" size={26} color="#2B3467" />
              ) : (
                <Icon name="heart-o" size={26} color="#2B3467" />
              ),
            tabBarLabel: "Favorites",
            tabBarLabelStyle: { color: "#2B3467" },
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    );
  }

  function renderPokeball() {
    return (
      <Image
        source={require("../../assets/pokeball.png")}
        style={{
          width: 75,
          height: 75,
          top: -15,
        }}
      />
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FavoritesScreen"
          component={FavoritesScreen}
          options={{
            title: "",
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="PokemonScreen"
          component={PokemonScreen}
          options={{ title: "", headerTransparent: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

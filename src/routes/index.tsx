import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import { AuthStackNavigator } from "./AuthStackNavigator";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { NoAuthStackNavigator } from "./NoAuthStackNavigator";

export type StackParamList = {
  Perfil: undefined;
  Comecar: undefined;
  Cadastrar: undefined;
  Entrar: undefined;
  Splash: undefined;
  BottomTab: { screen: "Home" | "Descobrir" | "Perfil" };
  Detalhes: { id: string };
};

export function MainNavigator() {
  const { authenticatedUser } = useContext(AuthContext);

  return (
    <NavigationContainer theme={{ dark: true, colors: { ...DarkTheme.colors, background: "#15141F" } }}>
      {authenticatedUser?.email ? <AuthStackNavigator /> : <NoAuthStackNavigator />}
    </NavigationContainer>
  );
}

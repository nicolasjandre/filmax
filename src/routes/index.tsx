import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import { StackNavigator } from "./StackNavigator";

export function MainNavigator() {
  return (
    <NavigationContainer theme={{ dark: true, colors: { ...DarkTheme.colors, background: "#15141F" } }}>
      <StackNavigator />
    </NavigationContainer>
  );
}

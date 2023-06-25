import { NavigationContainer } from "@react-navigation/native";
import { StackNavigator } from "./StackNavigator";

export function MainNavigator() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

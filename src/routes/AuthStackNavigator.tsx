import { createStackNavigator } from "@react-navigation/stack";
import Detalhes from "../screens/Detalhes";
import { BottomTabNavigator } from "./BottomTabNavigator";
import { Splash } from "../screens/Splash";

export type StackAuthParamList = {
  Splash: undefined;
  BottomTab: { screen: "Home" | "Descobrir" | "Perfil" };
  Detalhes: { id: string };
};

const Stack = createStackNavigator<StackAuthParamList>();

export function AuthStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Detalhes" component={Detalhes} />
      <Stack.Screen name="BottomTab" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
}

import { createStackNavigator } from "@react-navigation/stack";
import { Cadastrar } from "../screens/Cadastrar";
import { Comecar } from "../screens/Comecar";
import Detalhes from "../screens/Detalhes";
import { Entrar } from "../screens/Entrar";
import { BottomTabNavigator } from "./BottomTabNavigator";
import { Splash } from "../screens/Splash";

export type StackParamList = {
  Comecar: undefined;
  Cadastrar: undefined;
  Entrar: undefined;
  Splash: undefined;
  BottomTab: { screen: "Home" | "Descobrir" | "Perfil" };
  Detalhes: { id: string };
};

const Stack = createStackNavigator<StackParamList>();

export function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Comecar" component={Comecar} />
      <Stack.Screen name="Cadastrar" component={Cadastrar} />
      <Stack.Screen name="Entrar" component={Entrar} />
      <Stack.Screen name="Detalhes" component={Detalhes} />
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="BottomTab" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
}

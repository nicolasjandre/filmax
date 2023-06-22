import { createStackNavigator } from "@react-navigation/stack";
import { BottomTabNavigator } from "./BottomTabNavigator";
import { Comecar } from "../screens/Comecar";
import { Cadastrar } from "../screens/Cadastrar";
import { Entrar } from "../screens/Entrar";
import { NavigationContainer } from "@react-navigation/native";

export type StackParamList = {
  Comecar: undefined;
  Cadastrar: undefined;
  Entrar: undefined;
  BottomTab: { screen: "Home" | "Descobrir" | "Perfil" };
};

const Stack = createStackNavigator<StackParamList>();

export function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Comecar" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Comecar" component={Comecar} />
        <Stack.Screen name="Cadastrar" component={Cadastrar} />
        <Stack.Screen name="Entrar" component={Entrar} />
        <Stack.Screen name="BottomTab" component={BottomTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

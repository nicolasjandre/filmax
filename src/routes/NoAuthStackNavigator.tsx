import { createStackNavigator } from "@react-navigation/stack";
import { Cadastrar } from "../screens/Cadastrar";
import { Comecar } from "../screens/Comecar";
import { Entrar } from "../screens/Entrar";
import { Splash } from "../screens/Splash";

export type StackNoAuthParamList = {
  Comecar: undefined;
  Cadastrar: undefined;
  Entrar: undefined;
  Splash: undefined;
};

const Stack = createStackNavigator<StackNoAuthParamList>();

export function NoAuthStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Comecar" component={Comecar} />
      <Stack.Screen name="Cadastrar" component={Cadastrar} />
      <Stack.Screen name="Entrar" component={Entrar} />
    </Stack.Navigator>
  );
}

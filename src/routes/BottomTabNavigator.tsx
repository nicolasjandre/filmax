import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Descobrir } from "../screens/Descobrir";
import { Home } from "../screens/Home";
import { Perfil } from "../screens/Perfil";

type TabParamList = {
  Home: undefined;
  Descobrir: undefined;
  Perfil: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

export function BottomTabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Descobrir" component={Descobrir} />
      <Tab.Screen name="Perfil" component={Perfil} />
    </Tab.Navigator>
  );
}
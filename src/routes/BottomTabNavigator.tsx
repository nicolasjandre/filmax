import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Descobrir } from "../screens/Descobrir";
import { Home } from "../screens/Home";
import { Perfil } from "../screens/Perfil";
import { PersonalizedIcon } from "../components/PlayButtonIcon";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

type TabParamList = {
  Home: undefined;
  Descobrir: undefined;
  Perfil: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

export function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 85,
          backgroundColor: "#15141F",
          borderTopColor: "#15141F",
        },
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <PersonalizedIcon
              heightAndWidth={48}
              children={<Entypo name="home" size={30} color={focused ? "#FF8F71" : "#505050"} />}
            />
          ),
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <PersonalizedIcon
              heightAndWidth={48}
              focused={focused}
              defaultBgColor="#404040"
              children={<AntDesign name="search1" size={24} color={focused ? "#FFFFFF" : "#707070"} />}
            />
          ),
        }}
        name="Descobrir"
        component={Descobrir}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <PersonalizedIcon
              heightAndWidth={48}
              children={<FontAwesome name="user" size={30} color={focused ? "#FF8F71" : "#505050"} />}
            />
          ),
        }}
        name="Perfil"
        component={Perfil}
      />
    </Tab.Navigator>
  );
}

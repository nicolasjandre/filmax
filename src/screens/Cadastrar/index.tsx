import { NavigationProp } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, Text, View } from "react-native";
import Input from "../../components/input";
import { StackParamList } from "../../routes/StackNavigator";
import { styles } from "./styles";




interface CadastrarProps {
  navigation: NavigationProp<StackParamList, "Cadastrar">;
}

export const Cadastrar = ({ navigation }: CadastrarProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Cadastrar Screen</Text>
      <Text onPress={() => navigation.navigate("Entrar")} style={styles.text}>
        Ir para screen Entrar
      </Text>
      <Text onPress={() => navigation.navigate("BottomTab", { screen: "Home" })} style={styles.text}>
        Ir para screen Home
      </Text>

    </View>
  );
};


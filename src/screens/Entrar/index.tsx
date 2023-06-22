import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { NavigationProp } from "@react-navigation/native";
import { StackParamList } from "../../routes";

interface EntrarProps {
  navigation: NavigationProp<StackParamList, "Entrar">;
}

export const Entrar = ({ navigation }: EntrarProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Entrar Screen</Text>
      <Text onPress={() => navigation.navigate("Cadastrar")} style={styles.text}>
        Voltar para screen Cadastrar
      </Text>
      <Text onPress={() => navigation.navigate("BottomTab", { screen: "Home" })} style={styles.text}>
        Ir para screen Home
      </Text>
    </View>
  );
};

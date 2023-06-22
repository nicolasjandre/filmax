import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { StackParamList } from "../../routes";
import { NavigationProp } from "@react-navigation/native";

interface ComecarProps {
  navigation: NavigationProp<StackParamList, "Comecar">;
}

export const Comecar = ({ navigation }: ComecarProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Comecar Screen</Text>

      <Text onPress={() => navigation.navigate("Cadastrar")} style={styles.text}>
        Ir para screen cadastrar
      </Text>
    </View>
  );
};

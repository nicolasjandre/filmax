import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { NavigationProp } from "@react-navigation/native";
import { StackNoAuthParamList } from "../../routes/NoAuthStackNavigator";

interface ComecarProps {
  navigation: NavigationProp<StackNoAuthParamList, "Comecar">;
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

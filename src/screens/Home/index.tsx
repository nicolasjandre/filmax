import { NavigationProp } from "@react-navigation/native";
import React from "react";
import { Button, Text, View } from "react-native";
import { StackParamList } from "../../routes";
import { styles } from "./styles";

interface HomeProps {
  navigation: NavigationProp<StackParamList, "Detalhes">;
}

export const Home = ({ navigation }: HomeProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Teste</Text>
      <Button
        title="Detalhes"
        onPress={() =>
          navigation.navigate("Detalhes", {
            id: "tt1375666",
          })
        }
      />
    </View>
  );
};

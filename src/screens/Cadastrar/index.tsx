import { NavigationProp } from "@react-navigation/native";
import React from "react";
import { Image, KeyboardAvoidingView, Text, TextInput, View, TouchableOpacity} from "react-native";
import { StackParamList } from "../../routes";
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
      <View>
        <Image source={require('../src/assets/logo/filMAX.png')} />
      </View>
    </View>
  );
};


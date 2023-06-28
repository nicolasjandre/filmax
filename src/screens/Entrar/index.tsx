import { Entypo, MaterialIcons } from "@expo/vector-icons";
import { NavigationProp } from "@react-navigation/native";
import React, { useState } from "react";
import { GestureResponderEvent, View } from "react-native";
import { Button } from "../../components/Button";
import { EntrarCadastrarFraseFinal } from "../../components/EntrarCadastrarFraseFinal";
import { Input } from "../../components/Input";
import { Logo } from "../../components/Logo";
import { PageTitle } from "../../components/PageTitle";
import { StackParamList } from "../../routes/StackNavigator";
import { styles } from "./styles";
import { login } from "../../services/authApi";

interface EntrarProps {
  navigation: NavigationProp<StackParamList, "Entrar">;
}

export const Cadastrar = ({ navigation }: EntrarProps) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const validarEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validarSenha = (senha: string) => {
    return senha.length >= 6;
  };

  const handleEntrar = async () => {
    const emailValido = validarEmail(email);
    const senhaValida = validarSenha(senha);

    if (emailValido && senhaValida) {
      try {
        const response = await login(email, senha);
      } catch (error) {
        console.log("Email ou senha Invalidos")
      }
    } else if (!emailValido) {
      console.log("Por favor digite um e-mail válido.");
    } else {
      console.log("A senha precisa ter ao menos 6 caracteres.");
    }
  };

  function handleNavigateCadastrar() {
    navigation.navigate("Cadastrar");
  }

  return (
    <View style={styles.container}>
      <Logo />

      <PageTitle title="Entrar" />

      <Input
        icon={<MaterialIcons name="email" size={26} color="#ffffff" />}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
      />

      <Input
        icon={<Entypo name="lock" size={26} color="#ffffff" />}
        placeholder="Senha"
        onChangeText={(text) => setSenha(text)}
        secureTextEntry
      />

      <Button title="Entrar" onPress={handleEntrar} />

      <EntrarCadastrarFraseFinal
        onPress={handleNavigateCadastrar}
        fraseInicial="Não possui uma conta?"
        textoBotao="Cadastrar"
      />
    </View>
  );
};

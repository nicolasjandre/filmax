import { Entypo, MaterialIcons } from "@expo/vector-icons";
import { NavigationProp } from "@react-navigation/native";
import React, { useState } from "react";
import { View } from "react-native";
import { Button } from "../../components/Button";
import { EntrarCadastrarFraseFinal } from "../../components/EntrarCadastrarFraseFinal";
import { Input } from "../../components/Input";
import { Logo } from "../../components/Logo";
import { PageTitle } from "../../components/PageTitle";
import { StackParamList } from "../../routes/StackNavigator";
import { cadastrar } from "../../services/authApi";
import { styles } from "./styles";

interface CadastrarProps {
  navigation: NavigationProp<StackParamList, "Cadastrar">;
}

export const Cadastrar = ({ navigation }: CadastrarProps) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const validarEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validarSenha = (senha: string) => {
    return senha.length >= 6;
  };

  const handleCadastrar = async () => {
    const emailValido = validarEmail(email);
    const senhaValida = validarSenha(senha);

    if (emailValido && senhaValida) {
      try {
        const response = await cadastrar(email, senha);
      } catch (error:any) {
        console.log(error?.message)
      }
    } else if (!emailValido) {
      console.log("Por favor digite um e-mail válido.");
    } else {
      console.log("A senha precisa ter ao menos 6 caracteres.");
    }
  };

  function handleNavigateEntrar() {
    navigation.navigate("Entrar");
  }

  return (
    <View style={styles.container}>
      <Logo />

      <PageTitle title="Crie Sua Conta" />

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

      <Button title="Cadastrar" onPress={handleCadastrar} />

      <EntrarCadastrarFraseFinal
        onPress={handleNavigateEntrar}
        fraseInicial="Já possui uma conta?"
        textoBotao="Entrar"
      />
    </View>
  );
};

import { NavigationProp } from "@react-navigation/native";
import React, { useState } from "react";
import { View } from "react-native";
import { styles } from "./styles";
import { StackParamList } from "../../routes/StackNavigator";
import { Button } from "../../components/Button";
import { EntrarCadastrarFraseFinal } from "../../components/EntrarCadastrarFraseFinal";
import { Input } from "../../components/Input";
import { Logo } from "../../components/Logo";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { PageTitle } from "../../components/PageTitle";

interface CadastrarProps {
  navigation: NavigationProp<StackParamList, "Cadastrar">;
}

export const Entrar = ({ navigation }: CadastrarProps) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const validarEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validarSenha = (senha: string) => {
    return senha.length > 6;
  };

  const handleEntrar = () => {
    navigation.navigate("BottomTab", { screen: "Home" });
    const emailValido = validarEmail(email);
    const senhaValida = validarSenha(senha);

    if (emailValido && senhaValida) {
      const dadosCadastro = {
        email: email,
        senha: senha,
      };

      // Chamar uma API para realizar o cadastro
      fetch("https://exemplo.com/api/cadastro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dadosCadastro),
      })
        .then((response) => response.json())
        .then((data) => {
          // Processar a resposta da API
          console.log("Cadastro realizado com sucesso!");
          console.log(data);
        })
        .catch((error) => {
          // Lidar com erros durante o cadastro
          console.error("Erro ao realizar o cadastro:", error);
        });
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

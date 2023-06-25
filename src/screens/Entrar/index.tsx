import { NavigationProp } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { StackParamList } from "../../routes";
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
    const senhaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return senhaRegex.test(senha);
  };

  const handleCadastrar = () => {
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
    } else {
      console.log("Email ou senha inválidos. Por favor, verifique os campos.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Entrar Screen</Text>
      <Text onPress={() => navigation.navigate("Entrar")} style={styles.text}>
        Ir para a tela Entrar
      </Text>
      <Text onPress={() => navigation.navigate("BottomTab", { screen: "Home" })} style={styles.text}>
        Ir para a tela Home
      </Text>

      <StatusBar backgroundColor="#0f0f0f" translucent={false} />
      <Image source={require("../../assets/images/logo/FilMAX.png")} />

      <View style={styles.conta}>
        <Text style={styles.conta}>Entrar </Text>
      </View>

      <TextInput placeholder="Email" style={styles.input} onChangeText={(text) => setEmail(text)} />
      <TextInput placeholder="Senha" style={styles.input} onChangeText={(text) => setSenha(text)} secureTextEntry />

      <TouchableOpacity style={styles.loginButton} onPress={handleCadastrar}>
        <Text style={styles.loginText}>Cadastrar</Text>
      </TouchableOpacity>

      <View style={styles.signUpContainer}>
        <Text style={styles.signUpText}>Não Possui Conta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Entrar")}>
          <Text style={styles.signUpButtom}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

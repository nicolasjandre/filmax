import { Entypo, MaterialIcons } from "@expo/vector-icons";
import { NavigationProp } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import { View } from "react-native";
import { Button } from "../../components/Button";
import { EntrarCadastrarFraseFinal } from "../../components/EntrarCadastrarFraseFinal";
import { Input } from "../../components/Input";
import { Logo } from "../../components/Logo";
import { PageTitle } from "../../components/PageTitle";
import { styles } from "./styles";
import { login } from "../../services/authApi";
import { StackParamList } from "../../routes";
import ToastManager, { Toast } from "toastify-react-native";
import { AuthContext } from "../../contexts/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface EntrarProps {
  navigation: NavigationProp<StackParamList, "Entrar">;
}

export const Entrar = ({ navigation }: EntrarProps) => {
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [entrando, setEntrando] = useState<boolean>(false);
  const { setAuthenticatedUser } = useContext(AuthContext);

  const validarEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validarSenha = (senha: string) => {
    return senha.length >= 6;
  };

  const handleEntrar = async () => {
    setEntrando(true);
    const emailValido = validarEmail(email);
    const senhaValida = validarSenha(senha);

    if (emailValido && senhaValida) {
      try {
        const response = await login(email, senha);

        const token = response?.data?.accessToken;

        setAuthenticatedUser(response?.data?.user);

        await AsyncStorage.setItem("filmax@token", token);

        navigation.navigate("BottomTab", { screen: "Home" });
      } catch (error: any) {
        Toast.error("Email ou senha inválidos");
      }
    } else if (!emailValido) {
      Toast.error("Por favor digite um e-mail válido.");
    } else {
      Toast.error("A senha precisa ter ao menos 6 caracteres.");
    }
    setEntrando(false);
  };

  function handleNavigateCadastrar() {
    navigation.navigate("Cadastrar");
  }

  return (
    <View style={styles.container}>
      <ToastManager width={350} height={80} />
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

      <Button disabled={entrando} title="Entrar" onPress={handleEntrar} />

      <EntrarCadastrarFraseFinal
        onPress={handleNavigateCadastrar}
        fraseInicial="Não possui uma conta?"
        textoBotao="Cadastrar"
      />
    </View>
  );
};

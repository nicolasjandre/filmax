import { Entypo, MaterialIcons } from "@expo/vector-icons";
import { NavigationProp } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import { View } from "react-native";
import { Button } from "../../components/Button";
import { EntrarCadastrarFraseFinal } from "../../components/EntrarCadastrarFraseFinal";
import { Input } from "../../components/Input";
import { Logo } from "../../components/Logo";
import { PageTitle } from "../../components/PageTitle";
import { cadastrar } from "../../services/authApi";
import { styles } from "./styles";
import { AuthContext } from "../../contexts/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ToastManager, { Toast } from "toastify-react-native";
import { StackParamList } from "../../routes";

interface CadastrarProps {
  navigation: NavigationProp<StackParamList, "Cadastrar">;
}

export const Cadastrar = ({ navigation }: CadastrarProps) => {
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [cadastrando, setCadastrando] = useState<boolean>(false);
  const { setAuthenticatedUser } = useContext(AuthContext);

  const validarEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validarSenha = (senha: string) => {
    return senha.length >= 6;
  };

  const handleCadastrar = async () => {
    setCadastrando(true);
    const emailValido = validarEmail(email);
    const senhaValida = validarSenha(senha);

    if (emailValido && senhaValida) {
      try {
        const response = await cadastrar(email, senha);
        const token = response?.data?.accessToken;

        setAuthenticatedUser(response?.data?.user);

        await AsyncStorage.setItem("filmax@token", token);

        navigation.navigate("BottomTab", { screen: "Home" });
      } catch (error: any) {
        Toast.error(error?.message);
      }
    } else if (!emailValido) {
      Toast.error("Por favor digite um e-mail válido.");
    } else {
      Toast.error("A senha precisa ter ao menos 6 caracteres.");
    }
    setCadastrando(false);
  };

  function handleNavigateEntrar() {
    navigation.navigate("Entrar");
  }

  return (
    <View style={styles.container}>
      <ToastManager width={350} height={80} />
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

      <Button disabled={cadastrando} title="Cadastrar" onPress={handleCadastrar} />

      <EntrarCadastrarFraseFinal
        onPress={handleNavigateEntrar}
        fraseInicial="Já possui uma conta?"
        textoBotao="Entrar"
      />
    </View>
  );
};

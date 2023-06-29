import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import React from "react";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Entypo } from "@expo/vector-icons";
import { PersonalizedIcon } from "../../components/PlayButtonIcon";
import { AvatarModal } from "../../components/AvatarModal";
import { User, atualizarUsuario } from "../../services/authApi";
import { AuthContext } from "../../contexts/AuthContext";
import { AntDesign } from "@expo/vector-icons";
import ToastManager, { Toast } from "toastify-react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationProp } from "@react-navigation/native";
import { StackParamList } from "../../routes";

type InformacoesPerfil = {
  nome: string;
  sobrenome: string;
  telefone: string;
  avatar: string;
};

interface PerfilProps {
  navigation: NavigationProp<StackParamList, "BottomTab">;
}

export const Perfil = ({ navigation }: PerfilProps) => {
  const [informacoesPerfil, setInformacoesPerfil] = React.useState<InformacoesPerfil>({} as InformacoesPerfil);
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
  const { authenticatedUser, setAuthenticatedUser } = React.useContext(AuthContext);

  const atualizarPerfil = async () => {
    await atualizarUsuario(authenticatedUser?.id, informacoesPerfil);

    setAuthenticatedUser({
      ...authenticatedUser,
      ...informacoesPerfil,
    });

    Toast.success("Perfil atualizado com sucesso!");
  };

  function handleSetNome(text: string) {
    setInformacoesPerfil((prev) => {
      return {
        ...prev,
        nome: text,
      };
    });
  }

  function handleSetSobrenome(text: string) {
    setInformacoesPerfil((prev) => {
      return {
        ...prev,
        sobrenome: text,
      };
    });
  }

  function handleSetTelefone(text: string) {
    setInformacoesPerfil((prev) => {
      return {
        ...prev,
        telefone: text,
      };
    });
  }

  function handleOpenModal() {
    setIsModalOpen(true);
  }

  async function handleLogout() {
    setAuthenticatedUser({} as User);
    await AsyncStorage.removeItem("filmax@token");
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleLogout} style={styles.logoutTouchableOpacity}>
        <Text style={styles.logoutText}>Sair</Text>
        <PersonalizedIcon heightAndWidth={36} children={<AntDesign name="logout" size={20} color="#ffffff" />} />
      </TouchableOpacity>
      <ToastManager width={350} />
      {isModalOpen ? <AvatarModal setInformacoesPerfil={setInformacoesPerfil} setIsModalOpen={setIsModalOpen} /> : null}
      <Text style={styles.text}>Meu Perfil</Text>

      <View>
        <TouchableOpacity onPress={handleOpenModal} style={styles.editarPerfilTouchable}>
          <PersonalizedIcon focused heightAndWidth={36} children={<Entypo name="pencil" size={24} color="#ffffff" />} />
        </TouchableOpacity>
        <ImageBackground
          source={{
            uri: informacoesPerfil?.avatar?.length > 0 ? informacoesPerfil?.avatar : authenticatedUser?.avatar,
          }}
          resizeMode="cover"
          style={styles.imagePerfil}
        />
      </View>

      <Input defaultValue={authenticatedUser?.nome} placeholder="Nome" onChangeText={handleSetNome} />

      <Input defaultValue={authenticatedUser?.sobrenome} placeholder="Sobrenome" onChangeText={handleSetSobrenome} />

      <Input
        defaultValue={authenticatedUser?.telefone}
        keyboardType="numeric"
        placeholder="Telefone"
        onChangeText={handleSetTelefone}
      />

      <Button onPress={atualizarPerfil} title="Salvar Perfil" />
    </View>
  );
};

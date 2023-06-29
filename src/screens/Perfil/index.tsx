import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import React from "react";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Entypo } from "@expo/vector-icons";
import { PersonalizedIcon } from "../../components/PlayButtonIcon";
import { AvatarModal } from "../../components/AvatarModal";
import { atualizarUsuario } from "../../services/authApi";
import { AuthContext } from "../../contexts/AuthContext";
import ToastManager, { Toast } from "toastify-react-native";

type InformacoesPerfil = {
  nome: string;
  sobrenome: string;
  telefone: string;
  avatar: string;
};

export const Perfil = () => {
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

  return (
    <View style={styles.container}>
      <ToastManager width={350} />
      {isModalOpen ? <AvatarModal setInformacoesPerfil={setInformacoesPerfil} setIsModalOpen={setIsModalOpen} /> : null}
      <Text style={styles.text}>Meu Perfil</Text>

      <View>
        <TouchableOpacity onPress={handleOpenModal} style={{ position: "absolute", right: 5, bottom: 40, zIndex: 1 }}>
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

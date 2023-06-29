import { View, Image, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { FlatList } from "react-native-gesture-handler";
import ToastManager, { Toast } from "toastify-react-native";

type InformacoesPerfil = {
  nome: string;
  sobrenome: string;
  telefone: string;
  avatar: string;
};

interface AvatarModalProps {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setInformacoesPerfil: React.Dispatch<React.SetStateAction<InformacoesPerfil>>;
}

const avatars: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

export const AvatarModal = ({ setIsModalOpen, setInformacoesPerfil }: AvatarModalProps) => {
  function handleClose() {
    setIsModalOpen(false);
  }

  function handleChangeAvatar(id: string) {
    setInformacoesPerfil((prev) => {
      return {
        ...prev,
        avatar: `https://randomuser.me/api/portraits/lego/${id}.jpg`,
      };
    });
    setIsModalOpen(false);

    Toast.info("Não esqueça de salvar o perfil :)");
  }

  return (
    <View style={styles.container}>
      <View style={styles.modalContent}>
        <Text style={styles.text}>Clique no avatar de sua escolha!</Text>
        <AntDesign name="close" size={32} color="red" style={styles.closeIcon} onPress={handleClose} />
        <View style={{ height: 150 }}>
          <FlatList
            ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
            data={avatars}
            keyExtractor={(item) => item}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleChangeAvatar(item)}>
                <Image
                  style={{ width: 150, height: 150, borderRadius: 100 }}
                  source={{ uri: `https://randomuser.me/api/portraits/lego/${item}.jpg` }}
                />
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </View>
  );
};

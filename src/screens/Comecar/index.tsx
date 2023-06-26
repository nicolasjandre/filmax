import { Text, View, ImageBackground } from "react-native";
import { styles } from "./styles";
import { NavigationProp } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StackParamList } from "../../routes/StackNavigator";

interface ComecarProps {
  navigation: NavigationProp<StackParamList, "Comecar">;
}

const Imagem = require('../../assets/images/começar/img.jpeg');

export const Comecar = ({ navigation }: ComecarProps) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={Imagem} resizeMode="cover" style={styles.image}>
        <Text style={styles.containerText}/>
        <Text style={styles.text1}>Conheça o Filmax</Text>
        <Text style={styles.text2}>O aplicativo de streaming favorito</Text>
        <Text style={styles.text3}>do século!</Text>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Perfil")}> 
        <Text style={styles.textButton}>Começar</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

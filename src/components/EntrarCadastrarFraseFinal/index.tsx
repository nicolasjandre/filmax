import { View, TouchableOpacity, Text, TouchableOpacityProps } from "react-native";
import { styles } from "./styles";

interface EntrarCadastrarFraseFinalProps extends TouchableOpacityProps {
  fraseInicial: string;
  textoBotao: string;
}

export const EntrarCadastrarFraseFinal = ({ fraseInicial, textoBotao, ...rest }: EntrarCadastrarFraseFinalProps) => {
  return (
    <View style={styles.signUpContainer}>
      <Text style={styles.signUpText}>{fraseInicial}</Text>
      <TouchableOpacity {...rest}>
        <Text style={styles.signUpButtom}>{textoBotao}</Text>
      </TouchableOpacity>
    </View>
  );
};

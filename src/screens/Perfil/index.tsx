import { Text, View } from "react-native"
import { styles } from './styles'
import { NavigationProp } from "@react-navigation/native";
import { StackParamList } from "../../routes";
import React from "react";
import { TextInput } from "react-native-gesture-handler";
interface ComecarProps {
    navigation: NavigationProp<StackParamList, "Perfil">;
  }

export const Perfil = ({ navigation }: ComecarProps) => {

    const [nome, setNome] = React.useState('');
    const [sobreNome, setSobreNome] = React.useState('');
    const [telefone, setTelefone] = React.useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Meu Perfil</Text>
            <TextInput
                style={styles.input}
                onChangeText={setNome}
                value={nome}
                placeholder="Nome"
                keyboardType="email-address"
            />
        </View>
    )
}
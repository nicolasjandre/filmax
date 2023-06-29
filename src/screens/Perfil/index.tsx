import { View, Text,ImageBackground, Image, TouchableOpacity} from "react-native"
import { styles } from './styles'
import React from "react";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

const icon = require('../../assets/images/perfil/icon2.png')

export const Perfil = () => {

    const [nome, setNome] = React.useState('');
    const [sobrenome, setSobrenome] = React.useState('');
    const [telefone, setTelefone] = React.useState('');

    const atualizarPerfil = () => {
        console.log('Perfil cadastrado:', {
          nome,
          sobrenome,
          telefone
        });
    };

    return (
        <View style={styles.container}> 
            <Text style={styles.text}>Meu Perfil</Text>
            <ImageBackground source={icon} resizeMode="cover" style={styles.imagePerfil}/>
            <Input
                placeholder="Nome"
                onChangeText={(text) => setNome(text)}
            />

            <Input
                placeholder="Sobrenome"
                onChangeText={(text) => setSobrenome(text)}
            />

            <Input
                placeholder="Telefone"
                onChangeText={(text) => setTelefone(text)}
            />
            <TouchableOpacity style={styles.button} onPress={atualizarPerfil}>
                <Text style={styles.textButton} >Salvar Perfil</Text>
            </TouchableOpacity>
        
        </View>
    )
}
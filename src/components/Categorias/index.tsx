import React from 'react-native';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';

export const Categorias = () => {
    const [categorias, setCategorias] = useState(["Fantasia", "Terror", "Ficção Científica", "Documentários", "Comédia", "Mistério", "Crime", "História", "Romance", "Aventura", "Animação", "Ação", "Drama"]);

    const [categoriaSelecionada, setCategoriaSelecionada] = useState('');

  const handleCategoriaPress = (categoria: string) => {
    setCategoriaSelecionada(categoria);
  };
  
    return (
      <View style={styles.catContainer}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categorias.map((categoria, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.catItem
            ]}
            onPress={() => handleCategoriaPress(categoria)}
          >
            
            <Text
              style={[
                styles.text,
                categoria === categoriaSelecionada && styles.selecionarCat,  
              ]}
            >
              {categoria}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};
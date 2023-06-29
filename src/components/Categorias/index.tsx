import React from 'react-native';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { ScrollView } from 'react-native-gesture-handler';

export type Categoria = {
  nome: string;
  apiParam: string;
}

const categorias: Categoria[] = [{nome: "Fantasia", apiParam: "fantasy"}, {nome: "Terror", apiParam: "horror"}, {nome: "Ficção Científica", apiParam: "sci-fi"}, {nome: "Documentários", apiParam: "documentary"}, {nome: "Comédia", apiParam: "comedy"}, {nome: "Mistério", apiParam: "mystery"}, {nome: "Crime", apiParam: "crime"}, {nome: "História", apiParam: "history"}, {nome: "Romance", apiParam: "romance"}, {nome: "Aventura", apiParam: "adventure"}, {nome: "Animação", apiParam: "animation"}, {nome: "Ação", apiParam: "action"}, {nome: "Drama", apiParam: "drama"}];

interface CategoriasProps {
  setGenres: Dispatch<SetStateAction<Categoria[]>>
  genres: Categoria[]
}

export const Categorias = ({setGenres, genres}: CategoriasProps) => {

  const handleCategoriaPress = (categoria: Categoria) => {
    let novasCategorias: Categoria[];
    const categoriaJaSelecionada = genres.filter(cat => cat.nome === categoria.nome);

    if (categoriaJaSelecionada.length > 0) {
      novasCategorias = genres.filter(cat => cat.nome !== categoria.nome);
    } else {
      novasCategorias = [...genres, categoria];
    }

    if (novasCategorias.length === 0) {
      novasCategorias = [{nome: "Fantasia", apiParam: "fantasy"}]
    }
    
    setGenres(novasCategorias);
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
                 genres.some(cat => cat.nome === categoria.nome) && styles.selecionarCat,  
              ]}
            >
              {categoria?.nome}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};
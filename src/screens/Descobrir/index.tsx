import React from "react";
import { View, TextInput } from "react-native";
import { styles } from "./styles";
import { Ionicons } from '@expo/vector-icons';

import { Header } from "../../components/Header";
import { Categorias } from "../../components/Categorias";
import { Cards } from "../../components/Cards"

export const Descobrir = () => {

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.inputContainer}>
      <Ionicons name="search" size={24} color="white" />
        <TextInput style={styles.input} placeholder="Search" placeholderTextColor={'#6E6D76'}
      />
      </View>
      <Categorias />
      
      <Cards />


    </View>
  );
  
};

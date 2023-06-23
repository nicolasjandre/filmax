import React from 'react';
import { TextInput, View } from 'react-native';
import { styles } from "./styles";

// import { Container } from './styles';

export const input = () => {
  return <View style={styles.container}>
        <TextInput style={styles.input}
        placeholderTextColor={'#f6f9fd'}
        secureTextEntry
        />
  </View>;
  
};

export default input;
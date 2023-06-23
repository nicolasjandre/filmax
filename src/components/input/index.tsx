import React from 'react';
import { TextInput, View } from 'react-native';
import { styles } from "./styles";

// import { Container } from './styles';

export const input = () => {
  return <View style={styles.container}>
        <TextInput style={styles.input}
        placeholderTextColor={'#070707'}
        secureTextEntry
        />
  </View>;
  
};

export default input;
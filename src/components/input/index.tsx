import React from 'react';
import { View, StyleSheet,TextInput, Image} from 'react-native';
import { styles } from "./styles";

// import { Container } from './styles';

export const input = () => {
  return <View style={styles.container}>
        <TextInput style={styles.input}
        placeholderTextColor={'#f6f9fd'}
        />
          <Image source={require('../src/assets/input/email.png')} />
  </View>;
  
};

export default input;
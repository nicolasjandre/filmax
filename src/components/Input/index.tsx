import React from "react";
import { TextInputProps, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { styles } from "./styles";

interface InputProps extends TextInputProps {
  icon?: React.ReactNode;
}

export const Input = ({ icon, ...rest }: InputProps) => {
  return (
    <View style={styles.container}>
      {icon ? icon : null}
      <TextInput placeholderTextColor="#b3b3b3" {...rest} style={styles.input} />
    </View>
  );
};

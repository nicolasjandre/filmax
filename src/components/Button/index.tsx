import React from "react";
import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";
import { styles } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export const Button = ({ title, ...rest }: ButtonProps) => {
  return (
    <TouchableOpacity {...rest} style={styles.loginButton}>
      <Text style={styles.loginText}>{title}</Text>
    </TouchableOpacity>
  );
};

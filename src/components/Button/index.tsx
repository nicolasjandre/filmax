import React from "react";
import { TouchableOpacity, Text, TouchableOpacityProps, ActivityIndicator } from "react-native";
import { styles } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  disabled?: boolean;
}

export const Button = ({ title, disabled, ...rest }: ButtonProps) => {
  return (
    <TouchableOpacity disabled={disabled} {...rest} style={disabled ? styles.loginButtonDisabled : styles.loginButton}>
      {disabled ? <ActivityIndicator /> : <Text style={styles.loginText}>{title}</Text>}
    </TouchableOpacity>
  );
};

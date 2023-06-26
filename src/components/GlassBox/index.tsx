import React from "react";
import { View, ViewProps, ViewStyle } from "react-native";
import { styles } from "./styles";

interface GlassBoxProps extends ViewProps {
  children: React.ReactNode;
  personalizedStyles?: ViewStyle;
}

export const GlassBox = ({ children, personalizedStyles }: GlassBoxProps) => {
  return <View style={[styles.container, personalizedStyles]}>{children}</View>;
};

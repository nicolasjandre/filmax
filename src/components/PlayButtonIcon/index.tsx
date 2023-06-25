import React from "react";
import { View } from "react-native";
import { styles } from "./styles";

interface PersonalizedIconProps {
  children: React.ReactNode;
  heightAndWidth: number;
  focused?: boolean;
  defaultBgColor?: string;
}
export const PersonalizedIcon = ({ children, heightAndWidth, focused, defaultBgColor }: PersonalizedIconProps) => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: focused ? "#FF8F71" : defaultBgColor ? defaultBgColor : "transparent",
          height: heightAndWidth,
          width: heightAndWidth,
        },
      ]}
    >
      {children}
    </View>
  );
};

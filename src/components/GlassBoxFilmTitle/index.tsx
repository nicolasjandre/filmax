import React from "react";
import { View, ViewProps, Text } from "react-native";
import { styles } from "./styles";
import { GlassBox } from "../GlassBox";

interface GlassBoxProps extends ViewProps {
  movieName: string;
}

export const GlassBoxFilmTitle = ({ movieName }: GlassBoxProps) => {
  return (
    <View style={styles.glassContainer}>
      <GlassBox>
        <View style={styles.textsContainer}>
          <Text numberOfLines={2} ellipsizeMode="tail" style={styles.filmeTitulo}>
            {movieName}
          </Text>
        </View>
      </GlassBox>
    </View>
  );
};

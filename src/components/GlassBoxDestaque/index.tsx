import React from "react";
import { View, ViewProps, Text } from "react-native";
import { styles } from "./styles";
import { GlassBox } from "../GlassBox";
import { PersonalizedIcon } from "../PlayButtonIcon";
import { AntDesign } from '@expo/vector-icons';

interface GlassBoxProps extends ViewProps {
  movieName: string;
}

export const GlassBoxDestaque = ({ movieName }: GlassBoxProps) => {
  return (
    <View style={styles.glassContainer}>
      <GlassBox>
        <PersonalizedIcon focused={true} heightAndWidth={30} children={<AntDesign name="caretright" size={14} color="#FFFFFF" />} />
        <View style={styles.textsContainer}>
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.filmeEmDestaque}>
            Filme em destaque
          </Text>
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.filmeTitulo}>
            {movieName}
          </Text>
        </View>
      </GlassBox>
    </View>
  );
};

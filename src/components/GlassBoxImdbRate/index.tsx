import React from "react";
import { View, ViewProps, Text } from "react-native";
import { styles } from "./styles";
import { Entypo } from "@expo/vector-icons";
import { GlassBox } from "../GlassBox";

interface GlassBoxProps extends ViewProps {
  rate: string;
}

export const GlassBoxImdbRate = ({ rate }: GlassBoxProps) => {
  return (
    <View style={styles.glassContainer}>
      <GlassBox personalizedStyles={{ flexDirection: "column", justifyContent: "center", alignItems: "flex-start" }}>
        <Text style={styles.imdbName}>IMDb</Text>
        <View style={{ flexDirection: "row" }}>
          <Entypo name="star" size={40} color="#fff220" />
          <View style={styles.textsContainer}>
            <Text numberOfLines={2} ellipsizeMode="tail" style={styles.imdbRate}>
              {rate}
            </Text>
          </View>
        </View>
      </GlassBox>
    </View>
  );
};

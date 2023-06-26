import React from "react";
import type { StyleProp, ViewStyle } from "react-native";
import { View, Image } from "react-native";
import { styles } from "./styles";

interface Props {
  style?: StyleProp<ViewStyle>;
  imgUrl: string;
}

export const CardPopularesImage: React.FC<Props> = ({ style, imgUrl }) => {
  return (
    <View style={[styles.container, style]}>
      <Image style={styles.image} source={{ uri: imgUrl }} />
    </View>
  );
};

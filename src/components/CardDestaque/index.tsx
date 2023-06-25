import React from "react";
import { View, Image } from "react-native";
import { GlassBoxDestaque } from "../GlassBoxDestaque";
import { styles } from "./styles";
import { Movie } from "../../services/api";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { NavigationProp } from "@react-navigation/native";
import { StackParamList } from "../../routes/StackNavigator";

interface CardDestaqueProps {
  movie: Movie;
  navigation: NavigationProp<StackParamList, "BottomTab">;
}

export const CardDestaque = ({ movie, navigation }: CardDestaqueProps) => {
  function handleNavigation() {
    navigation.navigate("Detalhes", { id: movie?.id });
  }

  return (
    <TouchableWithoutFeedback onPress={handleNavigation} style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: movie?.image,
        }}
      />
      <GlassBoxDestaque movieName={movie?.fullTitle} />
    </TouchableWithoutFeedback>
  );
};

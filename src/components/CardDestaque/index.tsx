import { NavigationProp } from "@react-navigation/native";
import React from "react";
import { Image } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { StackParamList } from "../../routes/StackNavigator";
import { Movie } from "../../services/imdbApi";
import { GlassBoxDestaque } from "../GlassBoxDestaque";
import { styles } from "./styles";

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

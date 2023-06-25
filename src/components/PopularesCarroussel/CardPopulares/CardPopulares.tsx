import React from "react";
import { View, type ViewProps, TouchableWithoutFeedback } from "react-native";
import type { AnimateProps } from "react-native-reanimated";
import Animated from "react-native-reanimated";

import { CardPopularesImage } from "../CardPopularesImage/CardPopularesImage";
import { Movie } from "../../../services/api";
import { GlassBoxFilmTitle } from "../../GlassBoxFilmTitle";
import { GlassBoxImdbRate } from "../../GlassBoxImdbRate";
import { styles } from "./styles";

interface Props extends AnimateProps<ViewProps> {
  index?: number;
  movie: Movie;
  handleNavigate: (movieId: string) => void;
}

export const CardPopulares: React.FC<Props> = (props) => {
  const { movie, handleNavigate, ...animatedViewProps } = props;
  return (
    <TouchableWithoutFeedback onPress={() => handleNavigate(movie?.id)}>
      <Animated.View style={styles.container} {...animatedViewProps}>
        <CardPopularesImage imgUrl={movie?.image} style={styles.cardPopularesImage} />
        <View style={styles.glassBoxFilmTitleContainer}>
          <GlassBoxFilmTitle movieName={movie?.title} />
        </View>
        <View style={styles.glassBoxImdbRateContainer}>
          <GlassBoxImdbRate movieName={movie?.imDbRating} />
        </View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

import React from "react";
import { TouchableWithoutFeedback, View, type ViewProps } from "react-native";
import type { AnimateProps } from "react-native-reanimated";
import Animated from "react-native-reanimated";

import { Movie } from "../../../services/imdbApi";
import { GlassBoxFilmTitle } from "../../GlassBoxFilmTitle";
import { GlassBoxImdbRate } from "../../GlassBoxImdbRate";
import { CardPopularesImage } from "../CardPopularesImage/CardPopularesImage";
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
          <GlassBoxImdbRate rate={movie?.imDbRating} />
        </View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

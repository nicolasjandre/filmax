import * as React from "react";
import { Text, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";

import { NavigationProp } from "@react-navigation/native";
import { window } from "../../constants/index";
import { StackParamList } from "../../routes/AuthStackNavigator";
import { Movie } from "../../services/imdbApi";
import { CardPopulares } from "./CardPopulares/CardPopulares";

const PAGE_WIDTH = window.width;

interface PopularesCarrousselProps {
  data: Movie[];
  navigation: NavigationProp<StackParamList, "BottomTab">;
}

export function PopularesCarroussel({ data, navigation }: PopularesCarrousselProps) {
  const baseOptions = {
    vertical: false,
    width: PAGE_WIDTH * 0.9,
    height: PAGE_WIDTH * 1.09,
  } as const;

  function handleNavigate(movieId: string) {
    navigation.navigate("Detalhes", { id: movieId });
  }
  return (
    <View style={{}}>
      <Text style={{ position: "absolute", top: -10, color: "#ffffff", fontSize: 30, paddingHorizontal: 30 }}>
        Populares
      </Text>
      <Carousel
        {...baseOptions}
        style={{
          width: PAGE_WIDTH,
        }}
        loop
        autoPlay
        autoPlayInterval={5000}
        mode="parallax"
        modeConfig={{
          parallaxScrollingOffset: 85,
        }}
        data={data}
        renderItem={({ item }) => <CardPopulares handleNavigate={handleNavigate} movie={item} />}
      />
    </View>
  );
}

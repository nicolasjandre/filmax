import { NavigationProp } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { CardDestaque } from "../../components/CardDestaque";
import { PopularesCarroussel } from "../../components/PopularesCarroussel";
import { StackParamList } from "../../routes/StackNavigator";
import { Movie, getTop250Movies } from "../../services/imdbApi";
import { styles } from "./styles";

interface HomeProps {
  navigation: NavigationProp<StackParamList, "BottomTab">;
}

export const Home = ({ navigation }: HomeProps) => {
  const [popularMovies, setPopularMovies] = useState<Movie[] | []>([]);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      const response = await getTop250Movies();

      setPopularMovies(response.data.items);
    };

    fetchPopularMovies();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>HOME HEADER</Text>

      <CardDestaque navigation={navigation} movie={popularMovies[0]} />
      <PopularesCarroussel navigation={navigation} data={popularMovies.slice(13, 18)} />
    </View>
  );
};

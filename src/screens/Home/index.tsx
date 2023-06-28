import { NavigationProp } from "@react-navigation/native";
import React, { useContext, useEffect, useState } from "react";

import { View } from "react-native";
import { CardDestaque } from "../../components/CardDestaque";
import { PopularesCarroussel } from "../../components/PopularesCarroussel";
import { Movie, getTop250Movies } from "../../services/imdbApi";
import { styles } from "./styles";
import { Header } from "../../components/Header";
import { AuthContext } from "../../contexts/AuthContext";
import ToastManager, { Toast } from "toastify-react-native";
import { StackAuthParamList } from "../../routes/AuthStackNavigator";

interface HomeProps {
  navigation: NavigationProp<StackAuthParamList, "BottomTab">;
}

export const Home = ({ navigation }: HomeProps) => {
  const [popularMovies, setPopularMovies] = useState<Movie[] | []>([]);
  const { authenticatedUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      const response = await getTop250Movies();

      setPopularMovies(response.data.items);
    };

    fetchPopularMovies();

    if (authenticatedUser) {
      Toast.success(`Bem vindo(a)!`);
    }
  }, []);

  return (
    <View style={styles.container}>
      <ToastManager />
      <Header />

      <CardDestaque navigation={navigation} movie={popularMovies[0]} />
      <PopularesCarroussel navigation={navigation} data={popularMovies.slice(1, 6)} />
    </View>
  );
};

import React, { useEffect, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";

import { Input } from "../../components/Input";
import { Header } from "../../components/Header";
import { Categoria, Categorias } from "../../components/Categorias";
import { Cards } from "../../components/Card";
import { NavigationProp } from "@react-navigation/native";
import { StackParamList } from "../../routes";
import { MovieSearchResult, getMovieBySearch } from "../../services/imdbApi";

interface DescobrirProps {
  navigation: NavigationProp<StackParamList, "BottomTab">;
}

export const Descobrir = ({ navigation }: DescobrirProps) => {
  const [titleSearch, setTitleSearch] = useState<string>("");
  const [genres, setGenres] = useState<Categoria[]>([{ nome: "Fantasia", apiParam: "fantasy" }]);
  const [searchedMovies, setSearchedMovies] = useState<MovieSearchResult[]>([] as MovieSearchResult[]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const genresApiParams = genres.map((gen) => gen.apiParam);
    const fetchSearchMovies = async () => {
      const response = await getMovieBySearch(titleSearch, genresApiParams);

      setSearchedMovies(response?.data?.results);
    };

    fetchSearchMovies();
  }, [genres, isSearching]);

  const handleSearchPress = () => {
    setIsSearching((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.searchContainer}>
        <Input placeholder="Pesquisar" onChangeText={setTitleSearch} />
        <View style={styles.icon}>
          <TouchableOpacity onPress={handleSearchPress}>
            <Ionicons name="search" size={28} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <Categorias genres={genres} setGenres={setGenres} />

      <Cards movies={searchedMovies} navigation={navigation} />
    </View>
  );
};

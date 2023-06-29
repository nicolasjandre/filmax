import React, { useState } from "react";
import { Text, Image, FlatList, Dimensions } from "react-native";
import { styles } from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { NavigationProp } from "@react-navigation/native";
import { StackParamList } from "../../routes";
import { MovieSearchResult } from "../../services/imdbApi";

interface Props {
  movies: MovieSearchResult[];
  navigation: NavigationProp<StackParamList, "BottomTab">;
}
 

const windowWidth = Dimensions.get("window").width;
const itemWidth = windowWidth / 2;

export const Cards: React.FC<Props> = ({ movies, navigation }) => {
  const [numColumns, setNumColumns] = useState(2);
  
  function handleNavigation(item: MovieSearchResult) {
    navigation.navigate("Detalhes", {id: item?.id})
  }


  const keyExtractor = (item: MovieSearchResult) => item.id;

  const renderItem = ({ item }: { item: MovieSearchResult }) => (
    <TouchableOpacity onPress={() => handleNavigation(item)} 
    style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.cardTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={movies}
      keyExtractor={keyExtractor}
      numColumns={numColumns}
      renderItem={renderItem}
      key={numColumns.toString()}
      showsVerticalScrollIndicator={false}
    />
  );
};

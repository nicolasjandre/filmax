import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { MovieData } from "../../services/imdbApi";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackAuthParamList } from "../../routes/AuthStackNavigator";

type DetalhesScreenNavigationProp = StackNavigationProp<StackAuthParamList, "Detalhes">;

interface DetalhesFilmeProps {
  data: MovieData;
  navigation: DetalhesScreenNavigationProp;
}

export const FilmesSimilares = ({ data, navigation }: DetalhesFilmeProps) => {
  return (
    <>
      <Text style={styles.similarTitleSection}>Similares</Text>
      <FlatList
        data={data.similars}
        keyExtractor={(item) => item.id}
        horizontal
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.setParams({ id: item.id });
            }}
          >
            <View>
              <Image source={{ uri: item.image }} style={styles.similarImage} />
              <Text style={styles.similarTitle}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </>
  );
};

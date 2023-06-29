import { View, Text } from "react-native";
import { styles } from "./styles";
import { MovieData } from "../../services/imdbApi";

interface DetalhesFilmeProps {
  data: MovieData;
}

export const DetalhesFilme = ({ data }: DetalhesFilmeProps) => {
  return (
    <>
      <View style={styles.detailContainer}>
        <Text style={styles.detailsText}>{data.runtimeMins} Minutes</Text>
        <Text style={styles.detailsText}>Rating: {data.imDbRating}</Text>
      </View>

      <View style={styles.detailsContainer}>
        <View style={styles.detailsRow}>
          <Text style={styles.subTitle}>Lançamento</Text>
          <Text style={styles.detailsText}>{data.releaseDate}</Text>
        </View>

        <View style={styles.detailsRow}>
          <Text style={styles.subTitle}>Gêneros</Text>

          <View style={styles.genreContainer}>
            {data.genreList.map((genre) => (
              <Text key={genre.key} style={styles.genreBadge}>
                {genre.value}
              </Text>
            ))}
          </View>
        </View>
      </View>
    </>
  );
};

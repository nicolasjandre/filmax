import { Text } from "react-native";
import { MovieData } from "../../services/imdbApi";
import { styles } from "./styles";

interface DetalhesFilmeProps {
  data: MovieData;
  showFullPlot: boolean;
  toggleShowFullPlot: () => void;
}

export const SinopseFilme = ({ data, showFullPlot, toggleShowFullPlot }: DetalhesFilmeProps) => {
  return (
    <>
      <Text style={styles.plotTitle}>Sinopse</Text>

      <Text style={styles.plotText}>
        {showFullPlot ? data.plot : `${data.plot.substring(0, 150)}...`}
        <Text style={styles.readMore} onPress={toggleShowFullPlot}>
          {showFullPlot ? "Ler menos" : "Ler mais"}
        </Text>
      </Text>
    </>
  );
};

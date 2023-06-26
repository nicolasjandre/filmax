import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StackParamList } from "../../routes/StackNavigator";
import { styles } from "./styles";

type DetalhesScreenRouteProp = RouteProp<StackParamList, "Detalhes">;
type DetalhesScreenNavigationProp = StackNavigationProp<
  StackParamList,
  "Detalhes"
>;

interface DetalhesProps {
  route: DetalhesScreenRouteProp;
  navigation: DetalhesScreenNavigationProp;
}

interface MovieData {
  id: string;
  title: string;
  originalTitle: string;
  fullTitle: string;
  type: string;
  year: string;
  image: string;
  releaseDate: string;
  runtimeMins: string;
  runtimeStr: string;
  plot: string;
  plotLocal: string;
  plotLocalIsRtl: boolean;
  awards: string;
  directors: string;
  directorList: {
    id: string;
    name: string;
  }[];
  writers: string;
  writerList: {
    id: string;
    name: string;
  }[];
  stars: string;
  starList: {
    id: string;
    name: string;
  }[];
  actorList: {
    id: string;
    image: string;
    name: string;
    asCharacter: string;
  }[];
  fullCast: any;
  genres: string;
  genreList: {
    key: string;
    value: string;
  }[];
  companies: string;
  companyList: {
    id: string;
    name: string;
  }[];
  countries: string;
  countryList: {
    key: string;
    value: string;
  }[];
  languages: string;
  languageList: {
    key: string;
    value: string;
  }[];
  contentRating: string;
  imDbRating: string;
  imDbRatingVotes: string;
  metacriticRating: string;
  ratings: any;
  wikipedia: any;
  posters: any;
  images: any;
  trailer: any;
  boxOffice: {
    budget: string;
    openingWeekendUSA: string;
    grossUSA: string;
    cumulativeWorldwideGross: string;
  };
  tagline: any;
  keywords: string;
  keywordList: string[];
  similars: {
    id: string;
    title: string;
    image: string;
    imDbRating: string;
  }[];
}

export default function Detalhes({ route, navigation }: DetalhesProps) {
  const { id } = route.params;
  const [data, setData] = useState<MovieData | null>();
  const [isFetching, setIsFetching] = useState<boolean>(false);

  //TODO: MELHORAR DEPOIS
  const authAPI = "k_vw4r7z6k";

  useEffect(() => {
    setIsFetching(true);
    fetch(`https://imdb-api.com/en/API/Title/${authAPI}/${id}`)
      .then((response) => response.json())
      .then((responseData) => {
        setData(responseData);
        setIsFetching(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsFetching(false);
      });
  }, [id]);

  if (isFetching) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="black" />
        <Text style={styles.text}>Carregando...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {data && (
        <View>
          <Image source={{ uri: data.image }} style={styles.image} />
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.text}>{data.runtimeMins} Minutes</Text>
          <Text style={styles.text}>Rating: {data.imDbRating}</Text>
          <Text style={styles.text}>Lançamento: {data.releaseDate}</Text>
          <Text style={styles.text}>Gênero: {data.genres}</Text>
          <Text style={styles.text}>
            Sinopse: {data.plot.substring(0, 50)}... Ver mais
          </Text>
          <Text style={styles.text}>Similares</Text>
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
                  <Image
                    source={{ uri: item.image }}
                    style={styles.similarImage}
                  />
                  <Text style={styles.similarTitle}>{item.title}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
}

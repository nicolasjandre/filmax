import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { StackParamList } from "../../routes/AuthStackNavigator";
import { getMovieById } from "../../services/imdbApi";
import { styles } from "./styles";

import backButtom from "../../assets/images/icons-details-page/backpageicon.png";
import playButtonImage from "../../assets/images/icons-details-page/playicon.png";

type DetalhesScreenRouteProp = RouteProp<StackParamList, "Detalhes">;
type DetalhesScreenNavigationProp = StackNavigationProp<StackParamList, "Detalhes">;

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
  errorMessage: string | null;
}

export default function Detalhes({ route, navigation }: DetalhesProps) {
  const { id } = route.params;
  const [data, setData] = useState<MovieData | null>();
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [showFullPlot, setShowFullPlot] = useState<boolean>(false);

  useEffect(() => {
    setIsFetching(true);
    getMovieById(id)
      .then((response) => {
        setData(response.data);
        setIsFetching(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsFetching(false);
      });
  }, [id]);

  const toggleShowFullPlot = () => {
    setShowFullPlot(!showFullPlot);
  };

  if (isFetching) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="white" />
        <Text style={styles.text}>Carregando...</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      {data && data.errorMessage === "" ? (
        <View>
          <View style={styles.imageContainer}>
            <Image source={{ uri: data.image }} style={styles.image} />
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => {
                console.log("Botão de voltar pressionado");
                navigation.goBack();
              }}
            >
              <Image source={backButtom} style={styles.backButtonImage} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.playButton}>
              <Image source={playButtonImage} style={styles.playButtonImage} />
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            <Text style={styles.title}>{data.title}</Text>
            <View style={styles.titleContainer}>
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
            <Text style={styles.plotTitle}>Sinopse</Text>
            <Text style={styles.plotText}>
              {showFullPlot ? data.plot : `${data.plot.substring(0, 150)}...`}
              <Text style={styles.readMore} onPress={toggleShowFullPlot}>
                {showFullPlot ? "Ler menos" : "Ler mais"}
              </Text>
            </Text>
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
          </View>
        </View>
      ) : (
        <Text style={styles.text}>{data?.errorMessage}</Text>
      )}
    </ScrollView>
  );
}

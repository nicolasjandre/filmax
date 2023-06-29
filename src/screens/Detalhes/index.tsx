import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Image, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { StackAuthParamList } from "../../routes/AuthStackNavigator";
import { MovieData, getMovieById } from "../../services/imdbApi";
import { styles } from "./styles";

import { DetalhesFilme } from "../../components/DetalhesFilme";
import { FilmesSimilares } from "../../components/FilmesSimilares";
import { SinopseFilme } from "../../components/SinopseFilme";
import { BackButton } from "../../components/BackButton";

type DetalhesScreenRouteProp = RouteProp<StackAuthParamList, "Detalhes">;
type DetalhesScreenNavigationProp = StackNavigationProp<StackAuthParamList, "Detalhes">;

interface DetalhesProps {
  route: DetalhesScreenRouteProp;
  navigation: DetalhesScreenNavigationProp;
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

  function handleNavigateBack() {
    navigation.goBack();
  }

  return (
    <ScrollView>
      {data && data.errorMessage === "" ? (
        <>
          <BackButton handleNavigateBack={handleNavigateBack} />
          <Image source={{ uri: data.image }} style={styles.image} />

          <View style={styles.filmeInformationContainer}>
            <Text style={styles.title}>{data.title}</Text>

            <DetalhesFilme data={data} />

            <SinopseFilme showFullPlot={showFullPlot} data={data} toggleShowFullPlot={toggleShowFullPlot} />

            <FilmesSimilares navigation={navigation} data={data} />
          </View>
        </>
      ) : (
        <Text style={styles.text}>{data?.errorMessage}</Text>
      )}
    </ScrollView>
  );
}

import axios, { AxiosResponse } from "axios";

export type Movie = {
  id: string;
  rank: string;
  title: string;
  fullTitle: string;
  year: string;
  image: string;
  crew: string;
  imDbRating: string;
  imDbRatingCount: string;
};

interface PopularMovies {
  items: Movie[];
}

const API_KEY = "k_mfd6clit";

const api = axios.create({
  baseURL: "https://imdb-api.com/",
});

export function getTop250Movies(): Promise<AxiosResponse<PopularMovies, any>> {
  return api.get(`/API/Top250Movies/${API_KEY}`);
}

import axios, { AxiosResponse } from "axios";

export type MovieData = {
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

const API_KEY = "k_h89gtckp";

const api = axios.create({
  baseURL: "https://imdb-api.com/",
});

export function getTop250Movies(): Promise<AxiosResponse<PopularMovies, any>> {
  return api.get(`/API/MostPopularMovies/${API_KEY}`);
}

export function getMovieById(
  id: string
): Promise<AxiosResponse<MovieData, any>> {
  return api.get(`API/Title/${API_KEY}/${id}`);
}

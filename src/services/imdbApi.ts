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
};

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

export type MovieSearchResult = {
  id: string;
  image: string;
  title: string;
  description: string;
  runtimeStr: string;
  genres: string;
  genreList: [
    {
      key: string;
      value: string;
    }
  ];
  contentRating: string;
  imDbRating: string;
  imDbRatingVotes: string;
  metacriticRating: string;
  plot: string;
  stars: string;
  starList: [
    {
      id: string;
      name: string;
    }
  ];
};

export type MovieSearch = {
  queryString: string;
  results: MovieSearchResult[];
};

const API_KEY = "k_c7wnhiri";

const api = axios.create({
  baseURL: "https://imdb-api.com/",
});

export function getTop250Movies(): Promise<AxiosResponse<PopularMovies, any>> {
  return api.get(`/API/MostPopularMovies/${API_KEY}`);
}

export function getMovieById(id: string): Promise<AxiosResponse<MovieData, any>> {
  return api.get(`API/Title/${API_KEY}/${id}`);
}

export function getMovieBySearch(title: string, genres: string[]): Promise<AxiosResponse<MovieSearch, any>> {
  return api.get(`/API/AdvancedSearch/${API_KEY}`, {
    params: {
      title,
      genres: genres.length > 0 ? genres.toString() : "fantasy",
    },
  });
}

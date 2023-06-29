import axios, { AxiosResponse } from "axios";

export type PopularMoviesResult = {
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
  ]
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
  ]
}

export type MovieSearch = {
  queryString: string;
  results: MovieSearchResult[]
}

interface PopularMovies {
  items: PopularMoviesResult[];
}

const API_KEY = "k_9q1dtdm9";

const api = axios.create({
  baseURL: "https://imdb-api.com/",
});

export function getTop250Movies(): Promise<AxiosResponse<PopularMovies, any>> {
  return api.get(`/API/MostPopularMovies/${API_KEY}`);
}

export function getMovieBySearch(title: string, genres: string[]): Promise<AxiosResponse<MovieSearch, any>> {
  return api.get(`/API/AdvancedSearch/${API_KEY}`, {
    params: {
      title,
      genres: genres.length > 0 ? genres.toString() : "fantasy"
    }
  });
}

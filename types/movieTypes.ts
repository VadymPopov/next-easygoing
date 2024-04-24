export interface Movie {
  title: string;
  poster_path: string;
}

export interface MovieDetailsType {
  backdrop_path: string;
  genres: { id: number; name: string }[];
  overview: string;
  poster_path: string;
  release_date: string;
  tagline: string;
  vote_average: number;
  vote_count: number;
  production_countries: { iso_3166_1: string }[];
  runtime: number;
  title: string;
}

export interface Genre {
  id: number;
  name: string;
}

export interface MovieState {
  topRatedPage: {
    movie: Movie | {};
    movieDetails: MovieDetailsType | {};
    trailerKey: string;
  };
  oraclePage: {
    movie: Movie | {};
    movieDetails: MovieDetailsType | {};
    trailerKey: string;
    totalPages: number | null;
    selectedGenres: string;
    selectedYear: string;
  };
  randomPage: number;
  randomIdx: number;
  genres: Genre[];
  isLoading: boolean;
  error: string | null;
}

export interface FetchInitialMovieArgs {
  query: string;
  year: string;
  type: string;
  locale: string;
}

export interface FetchMoviesByGenreAndYearArgs {
  genres: string;
  year: string;
  page: string;
  locale: string;
}

export interface fetchTopRatedMoviesArgs {
  randomPage: string;
  locale: string;
}

export interface FetchMovieDetailsByIdArgs {
  id: string;
  type: string;
  locale: string;
}

export interface FetchMovieTrailerByIdArgs {
  id: string;
  type: string;
  locale: string;
}

export interface FetchTotalPagesByGenreAndYearArgs {
  genres: string;
  year: string;
  locale: string;
}

import { RootState } from "./store";
export const selectIsLoading = (state: RootState) => state.movies.isLoading;
export const selectOptions = (state: RootState) => state.options;
export const selectRandomIdx = (state: RootState) => state.random.randomIdx;
export const selectRandomNumber = (state: RootState) =>
  state.random.randomNumber;
export const selectIsDisabled = (state: RootState) => state.random.isDisabled;

export const selectOracleMovie = (state: RootState) =>
  state.movies.oraclePage.movie;
export const selectTopRatedMovie = (state: RootState) =>
  state.movies.topRatedPage.movie;
export const selectOracleMovieDetails = (state: RootState) =>
  state.movies.oraclePage.movieDetails;
export const selectTopRatedMovieDetails = (state: RootState) =>
  state.movies.topRatedPage.movieDetails;
export const selectAllGenres = (state: RootState) => state.movies.genres;
export const selectTotalPages = (state: RootState) =>
  state.movies.oraclePage.totalPages;
export const selectYear = (state: RootState) =>
  state.movies.oraclePage.selectedYear;
export const selectGenres = (state: RootState) =>
  state.movies.oraclePage.selectedGenres;
export const selectRandomPage = (state: RootState) => state.movies.randomPage;
export const selectOracleTrailerKey = (state: RootState) =>
  state.movies.oraclePage.trailerKey;
export const selectTopRatedTrailerKey = (state: RootState) =>
  state.movies.topRatedPage.trailerKey;

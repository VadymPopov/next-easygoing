import { RootState } from "./store";
export const selectOptions = (state: RootState) => state.options;
export const selectRandomIdx = (state: RootState) => state.random.randomIdx;
export const selectRandomNumber = (state: RootState) =>
  state.random.randomNumber;
export const selectIsDisabled = (state: RootState) => state.random.isDisabled;
export const selectMovie = (state: RootState) => state.movies.movie;
export const selectMovieDetails = (state: RootState) =>
  state.movies.movieDetails;
export const selectAllGenres = (state: RootState) => state.movies.genres;
export const selectTotalPages = (state: RootState) => state.movies.totalPages;
export const selectYear = (state: RootState) => state.movies.selectedYear;
export const selectGenres = (state: RootState) => state.movies.selectedGenres;
export const selectRandomPage = (state: RootState) => state.movies.randomPage;
export const selectTrailerKey = (state: RootState) => state.movies.trailerKey;

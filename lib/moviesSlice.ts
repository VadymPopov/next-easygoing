import { getRandomNumber } from "@/helpers/random";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  getGenres,
  fetchInitialMovie,
  fetchMoviesByGenreAndYear,
  fetchTotalPagesByGenreAndYear,
  fetchMovieDetailsById,
  getMovieTrailerById,
  fetchTopRatedMovies,
} from "./operations";

const initialYear = new Date().getFullYear().toString();

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    moviesArray: [],
    movie: {},
    movieDetails: {},
    trailerKey: "",
    totalPages: null,
    randomPage: 1,
    genres: [],
    selectedGenres: "",
    selectedYear: initialYear,
    isLoading: false,
    error: null,
  },
  reducers: {
    addSelectedGenres(state, action: PayloadAction<string>) {
      state.selectedGenres = action.payload;
    },
    addSelectedYear(state, action: PayloadAction<string>) {
      state.selectedYear = action.payload;
    },
    updateRandomPage(state, action: PayloadAction<number>) {
      state.randomPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getGenres.pending, handlePending)
      .addCase(getGenres.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.genres = action.payload;
      })
      .addCase(getGenres.rejected, handleRejected)
      .addCase(fetchInitialMovie.pending, handlePending)
      .addCase(fetchInitialMovie.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.movie = action.payload;
      })
      .addCase(fetchInitialMovie.rejected, handleRejected)
      .addCase(fetchTotalPagesByGenreAndYear.pending, handlePending)
      .addCase(fetchTotalPagesByGenreAndYear.fulfilled, (state, action) => {
        const randomPage = getRandomNumber(
          action.payload > 500 ? 500 : action.payload
        );
        state.isLoading = false;
        state.error = null;
        state.totalPages = action.payload > 500 ? 500 : action.payload;
        state.randomPage = randomPage;
      })
      .addCase(fetchTotalPagesByGenreAndYear.rejected, handleRejected)
      .addCase(fetchMoviesByGenreAndYear.pending, handlePending)
      .addCase(fetchMoviesByGenreAndYear.fulfilled, (state, action) => {
        const randomIdx = getRandomNumber(20);
        state.isLoading = false;
        state.error = null;
        state.moviesArray = action.payload;
        state.movie = action.payload[randomIdx];
      })
      .addCase(fetchMoviesByGenreAndYear.rejected, handleRejected)
      .addCase(fetchMovieDetailsById.pending, handlePending)
      .addCase(fetchMovieDetailsById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.movieDetails = action.payload;
      })
      .addCase(fetchMovieDetailsById.rejected, handleRejected)
      .addCase(getMovieTrailerById.pending, handlePending)
      .addCase(getMovieTrailerById.fulfilled, (state, action) => {
        const trailer = action.payload.find((e) => e.type === "Trailer");
        state.isLoading = false;
        state.error = null;
        state.trailerKey = trailer && trailer.key;
      })
      .addCase(getMovieTrailerById.rejected, handleRejected)
      .addCase(fetchTopRatedMovies.pending, handlePending)
      .addCase(fetchTopRatedMovies.fulfilled, (state, action) => {
        const randomIdx = getRandomNumber(20);
        state.isLoading = false;
        state.error = null;
        // state.moviesArray = action.payload;
        state.movie = action.payload[randomIdx];
      })
      .addCase(fetchTopRatedMovies.rejected, handleRejected);
  },
});

export const { addSelectedGenres, addSelectedYear, updateRandomPage } =
  moviesSlice.actions;
export const moviesReducer = moviesSlice.reducer;

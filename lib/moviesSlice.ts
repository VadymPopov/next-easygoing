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
    topRatedPage: {
      movie: {},
      movieDetails: {},
      trailerKey: "",
    },
    oraclePage: {
      movie: {},
      movieDetails: {},
      trailerKey: "",
      totalPages: null,
      selectedGenres: "",
      selectedYear: initialYear,
    },
    randomPage: 1,
    randomIdx: 1,
    genres: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    addSelectedGenres(state, action: PayloadAction<string>) {
      state.oraclePage.selectedGenres = action.payload;
    },
    addSelectedYear(state, action: PayloadAction<string>) {
      state.oraclePage.selectedYear = action.payload;
    },
    updateRandomPage(state, action: PayloadAction<number>) {
      state.randomPage = action.payload;
    },
    updateRandomIdx(state, action: PayloadAction<number>) {
      state.randomIdx = action.payload;
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
        if (action.payload.type === "oracle") {
          state.oraclePage.movie = action.payload.response;
        } else {
          state.topRatedPage.movie = action.payload.response;
        }
      })
      .addCase(fetchInitialMovie.rejected, handleRejected)
      .addCase(fetchTotalPagesByGenreAndYear.pending, handlePending)
      .addCase(fetchTotalPagesByGenreAndYear.fulfilled, (state, action) => {
        const randomPage = getRandomNumber(
          action.payload > 500 ? 500 : action.payload
        );
        state.isLoading = false;
        state.error = null;
        state.oraclePage.totalPages =
          action.payload > 500 ? 500 : action.payload;
        state.randomPage = randomPage;
      })
      .addCase(fetchTotalPagesByGenreAndYear.rejected, handleRejected)
      .addCase(fetchMoviesByGenreAndYear.pending, handlePending)
      .addCase(fetchMoviesByGenreAndYear.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.oraclePage.movie = action.payload[state.randomIdx];
      })
      .addCase(fetchMoviesByGenreAndYear.rejected, handleRejected)
      .addCase(fetchMovieDetailsById.pending, handlePending)
      .addCase(fetchMovieDetailsById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        if (action.payload.type === "oracle") {
          state.oraclePage.movieDetails = action.payload.response;
        } else {
          state.topRatedPage.movieDetails = action.payload.response;
        }
      })
      .addCase(fetchMovieDetailsById.rejected, handleRejected)
      .addCase(getMovieTrailerById.pending, handlePending)
      .addCase(getMovieTrailerById.fulfilled, (state, action) => {
        const trailer = action.payload.response.find(
          (e) => e.type === "Trailer"
        );
        state.isLoading = false;
        state.error = null;
        if (action.payload.type === "oracle") {
          state.oraclePage.trailerKey = trailer ? trailer.key : "";
        } else {
          state.topRatedPage.trailerKey = trailer ? trailer.key : "";
        }
      })
      .addCase(getMovieTrailerById.rejected, handleRejected)
      .addCase(fetchTopRatedMovies.pending, handlePending)
      .addCase(fetchTopRatedMovies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.topRatedPage.movie = action.payload[state.randomIdx];
      })
      .addCase(fetchTopRatedMovies.rejected, handleRejected);
  },
});

export const {
  addSelectedGenres,
  addSelectedYear,
  updateRandomPage,
  updateRandomIdx,
} = moviesSlice.actions;
export const moviesReducer = moviesSlice.reducer;

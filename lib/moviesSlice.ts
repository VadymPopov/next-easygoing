import { getRandomNumber } from "@/helpers/random";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  fetchGenres,
  fetchInitialMovie,
  fetchMoviesByGenreAndYear,
  fetchTotalPagesByGenreAndYear,
  fetchMovieDetailsById,
  fetchMovieTrailerById,
  fetchTopRatedMovies,
} from "./operations";
import { MovieState } from "@/types/movieTypes";

const initialYear: string = new Date().getFullYear().toString();

const initialState: MovieState = {
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
};

const handlePending = (state: MovieState) => {
  state.isLoading = true;
};

const handleRejected = (
  state: MovieState,
  action: PayloadAction<string | undefined>
) => {
  state.isLoading = false;
  state.error = action.payload as string | null;
};

const moviesSlice = createSlice({
  name: "movies",
  initialState: initialState,
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
      .addCase(fetchGenres.pending, handlePending)
      .addCase(fetchGenres.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.genres = action.payload;
      })
      .addCase(fetchGenres.rejected, handleRejected)
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
      .addCase(fetchMovieTrailerById.pending, handlePending)
      .addCase(fetchMovieTrailerById.fulfilled, (state, action) => {
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
      .addCase(fetchMovieTrailerById.rejected, handleRejected)
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

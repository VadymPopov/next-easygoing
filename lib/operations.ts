import { getRandomNumber } from "@/helpers/random";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ODE5NWY1M2NmOWE2YWNiYjBkZDIzYTQxZTVjYTAyMyIsInN1YiI6IjY2MTU4ODY4OTgyZjc0MDE3ZTYxNjE5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.q0JgkjPr6RtXtJ4jvJjilrDb8nxuWLth3WFEv1hpiDM";
axios.defaults.baseURL = "https://api.themoviedb.org/3";

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${KEY}`,
    "Content-Type": "application/json",
  },
});

export const getGenres = createAsyncThunk(
  "movies/getGenres",
  async (_, thunkAPI) => {
    try {
      const response = await axiosInstance.get("/genre/movie/list");
      return response.data.genres;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchInitialMovie = createAsyncThunk(
  "movies/initialMovie",
  async (_, thunkAPI) => {
    try {
      const response = await axiosInstance.get(
        "/search/movie?query=The%20Matrix&year=1999"
      );
      return response.data.results[0];
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchMoviesByGenreAndYear = createAsyncThunk(
  "movies/moviesByGenreAndYear",
  async (data: { genres: string; year: string; page: string }, thunkAPI) => {
    const { genres, year, page } = data;
    const queryStr = genres
      ? `/discover/movie?with_genres=${genres}&year=${year}&page=${page}&language=en-US`
      : `/discover/movie?year=${year}&page=${page}&language=en-US`;
    try {
      const response = await axiosInstance.get(queryStr);
      return response.data.results;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchTopRatedMovies = createAsyncThunk(
  "movies/topRatedMovies",
  async (randomPage, thunkAPI) => {
    const queryStr = `/movie/top_rated?&page=${randomPage}&language=en-US`;
    try {
      const response = await axiosInstance.get(queryStr);
      return response.data.results;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchMovieDetailsById = createAsyncThunk(
  "movies/movieDetailsById",
  async (id, thunkAPI) => {
    try {
      const response = await axiosInstance.get(`/movie/${id}?language=en-US`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getMovieTrailerById = createAsyncThunk(
  "movies/movieTrailerById",
  async (id, thunkAPI) => {
    try {
      const response = await axiosInstance.get(
        `/movie/${id}/videos?language=en-US`
      );
      return response.data.results;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchTotalPagesByGenreAndYear = createAsyncThunk(
  "movies/totalPagesByGenreAndYear",
  async ({ genres, year }, thunkAPI) => {
    console.log(genres);
    const queryStr = genres
      ? `/discover/movie?with_genres=${genres}&year=${year}&language=en-US`
      : `/discover/movie?year=${year}&language=en-US`;
    try {
      const response = await axiosInstance.get(queryStr);
      return response.data.total_pages;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

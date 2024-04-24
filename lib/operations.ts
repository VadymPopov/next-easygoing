import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

import {
  FetchInitialMovieArgs,
  FetchMovieDetailsByIdArgs,
  FetchMovieTrailerByIdArgs,
  FetchMoviesByGenreAndYearArgs,
  FetchTotalPagesByGenreAndYearArgs,
  Genre,
  Movie,
  MovieDetailsType,
  fetchTopRatedMoviesArgs,
} from "@/types/movieTypes";

const KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ODE5NWY1M2NmOWE2YWNiYjBkZDIzYTQxZTVjYTAyMyIsInN1YiI6IjY2MTU4ODY4OTgyZjc0MDE3ZTYxNjE5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.q0JgkjPr6RtXtJ4jvJjilrDb8nxuWLth3WFEv1hpiDM";

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${KEY}`,
    "Content-Type": "application/json",
  },
});

export const fetchGenres = createAsyncThunk<
  Genre[],
  string,
  {
    rejectValue: string;
  }
>("movies/fetchGenres", async (locale, thunkAPI) => {
  try {
    const response = await axiosInstance.get(
      `/genre/movie/list?language=${locale}`
    );
    return response.data.genres;
  } catch (e) {
    const error = e as AxiosError;
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const fetchInitialMovie = createAsyncThunk<
  { response: Movie; type: string },
  FetchInitialMovieArgs,
  {
    rejectValue: string;
  }
>("movies/initialMovie", async ({ query, year, type, locale }, thunkAPI) => {
  try {
    const response = await axiosInstance.get(
      `/search/movie?query=${query}&year=${year}&language=${locale}`
    );
    return { response: response.data.results[0], type };
  } catch (e) {
    const error = e as AxiosError;
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const fetchMoviesByGenreAndYear = createAsyncThunk<
  Movie[],
  FetchMoviesByGenreAndYearArgs,
  {
    rejectValue: string;
  }
>(
  "movies/moviesByGenreAndYear",
  async ({ genres, year, page, locale }, thunkAPI) => {
    const queryStr = genres
      ? `/discover/movie?with_genres=${genres}&year=${year}&page=${page}&language=${locale}`
      : `/discover/movie?year=${year}&page=${page}&language=${locale}`;
    try {
      const response = await axiosInstance.get(queryStr);
      return response.data.results;
    } catch (e) {
      const error = e as AxiosError;
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchTopRatedMovies = createAsyncThunk<
  Movie[],
  fetchTopRatedMoviesArgs,
  {
    rejectValue: string;
  }
>("movies/topRatedMovies", async ({ randomPage, locale }, thunkAPI) => {
  const queryStr = `/movie/top_rated?&page=${randomPage}&language=${locale}`;
  try {
    const response = await axiosInstance.get(queryStr);
    return response.data.results;
  } catch (e) {
    const error = e as AxiosError;
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const fetchMovieDetailsById = createAsyncThunk<
  { response: MovieDetailsType; type: string },
  FetchMovieDetailsByIdArgs,
  {
    rejectValue: string;
  }
>("movies/movieDetailsById", async ({ id, type, locale }, thunkAPI) => {
  try {
    const response = await axiosInstance.get(`/movie/${id}?language=${locale}`);
    return { response: response.data, type };
  } catch (e) {
    const error = e as AxiosError;
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const fetchMovieTrailerById = createAsyncThunk<
  { response: { type: string; key: string }[]; type: string },
  FetchMovieTrailerByIdArgs,
  {
    rejectValue: string;
  }
>("movies/movieTrailerById", async ({ id, type, locale }, thunkAPI) => {
  try {
    const response = await axiosInstance.get(
      `/movie/${id}/videos?language=${locale}`
    );
    return { response: response.data.results, type };
  } catch (e) {
    const error = e as AxiosError;
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const fetchTotalPagesByGenreAndYear = createAsyncThunk<
  number,
  FetchTotalPagesByGenreAndYearArgs,
  {
    rejectValue: string;
  }
>(
  "movies/totalPagesByGenreAndYear",
  async ({ genres, year, locale }, thunkAPI) => {
    const queryStr = genres
      ? `/discover/movie?with_genres=${genres}&year=${year}&language=${locale}`
      : `/discover/movie?year=${year}&language=${locale}`;
    try {
      const response = await axiosInstance.get(queryStr);
      return response.data.total_pages;
    } catch (e) {
      const error = e as AxiosError;
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

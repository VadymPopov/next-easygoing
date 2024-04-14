"use client";
import React, { useEffect } from "react";
import MovieForm from "@/app/components/movie-form";
import MovieCard from "@/app/components/movie-card";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import {
  fetchInitialMovie,
  fetchMovieDetailsById,
  getMovieTrailerById,
} from "@/lib/operations";
import { selectOracleMovie } from "@/lib/selectors";

export default function Page() {
  const dispatch = useAppDispatch();
  const movie = useAppSelector(selectOracleMovie);

  const { title, poster_path } = movie || {};

  useEffect(() => {
    if (movie && Object.keys(movie).length === 0) {
      dispatch(
        fetchInitialMovie({ query: "The Matrix", year: "1999", type: "oracle" })
      );
    }
  }, [dispatch, movie]);

  useEffect(() => {
    if (movie && movie.id) {
      dispatch(fetchMovieDetailsById({ id: movie.id, type: "oracle" }));
      dispatch(getMovieTrailerById({ id: movie.id, type: "oracle" }));
    }
  }, [dispatch, movie]);

  return (
    <>
      <MovieForm />
      <MovieCard title={title} poster={poster_path} type='oracle' />
    </>
  );
}

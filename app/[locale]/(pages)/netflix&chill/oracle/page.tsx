"use client";
import React, { useEffect } from "react";
import MovieForm from "@/app/components/movie-form";
import MovieCard from "@/app/components/movie-card";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { useLocale } from "next-intl";
import {
  fetchInitialMovie,
  fetchMovieDetailsById,
  fetchMovieTrailerById,
} from "@/lib/operations";
import { selectOracleMovie } from "@/lib/selectors";

export default function Page() {
  const dispatch = useAppDispatch();
  const movie = useAppSelector(selectOracleMovie);
  const locale = useLocale();

  const { title, poster_path } = movie || {};

  useEffect(() => {
    if (movie && Object.keys(movie).length === 0) {
      dispatch(
        fetchInitialMovie({
          query: "The Matrix",
          year: "1999",
          type: "oracle",
          locale,
        })
      );
    }
  }, [dispatch, movie, locale]);

  useEffect(() => {
    if (movie && movie.id) {
      dispatch(fetchMovieDetailsById({ id: movie.id, type: "oracle", locale }));
      dispatch(fetchMovieTrailerById({ id: movie.id, type: "oracle", locale }));
    }
  }, [dispatch, movie, locale]);

  return (
    <>
      <MovieForm />
      <MovieCard title={title} poster={poster_path} type='oracle' />
    </>
  );
}

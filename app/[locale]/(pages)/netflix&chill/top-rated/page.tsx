"use client";
import TopRatedForm from "@/app/components/top-rated-form";
import MovieCard from "@/app/components/movie-card";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useLocale } from "next-intl";
import { selectTopRatedMovie } from "@/lib/selectors";
import {
  fetchInitialMovie,
  fetchMovieDetailsById,
  fetchMovieTrailerById,
} from "@/lib/operations";
import { useEffect } from "react";
import localStorage from "redux-persist/es/storage";

export default function Page() {
  const dispatch = useAppDispatch();
  const movie = useAppSelector(selectTopRatedMovie);
  const locale = useLocale();

  const { title, poster_path } = movie || {};

  useEffect(() => {
    if (movie && Object.keys(movie).length === 0) {
      dispatch(
        fetchInitialMovie({
          query: "The Matrix Reloaded",
          year: "2003",
          type: "top-rated",
          locale,
        })
      );
    }
  }, [dispatch, movie, locale]);

  useEffect(() => {
    if (movie.id) {
      dispatch(
        fetchMovieDetailsById({ id: movie.id, type: "top-rated", locale })
      );
      dispatch(
        fetchMovieTrailerById({ id: movie.id, type: "top-rated", locale })
      );
    }
  }, [dispatch, movie, locale]);

  return (
    <>
      <TopRatedForm />
      <MovieCard title={title} poster={poster_path} type='top-rated' />
    </>
  );
}

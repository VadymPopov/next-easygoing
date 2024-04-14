"use client";
import TopRatedForm from "@/app/components/top-rated-form";
import MovieCard from "@/app/components/movie-card";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { selectTopRatedMovie } from "@/lib/selectors";
import {
  fetchInitialMovie,
  fetchMovieDetailsById,
  getMovieTrailerById,
} from "@/lib/operations";
import { useEffect } from "react";

export default function Page() {
  const dispatch = useAppDispatch();
  const movie = useAppSelector(selectTopRatedMovie);

  const { title, poster_path } = movie || {};

  useEffect(() => {
    if (movie && Object.keys(movie).length === 0) {
      dispatch(
        fetchInitialMovie({
          query: "The Matrix Reloaded",
          year: "2003",
          type: "top-rated",
        })
      );
    }
  }, [dispatch, movie]);

  useEffect(() => {
    if (movie.id) {
      dispatch(fetchMovieDetailsById({ id: movie.id, type: "top-rated" }));
      dispatch(getMovieTrailerById({ id: movie.id, type: "top-rated" }));
    }
  }, [dispatch, movie]);

  return (
    <>
      <TopRatedForm />
      <MovieCard title={title} poster={poster_path} type='top-rated' />
    </>
  );
}

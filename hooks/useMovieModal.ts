import { useEffect, useState } from "react";
import { useDisclosure } from "@nextui-org/react";
import { useAppSelector } from "@/lib/hooks";
import {
  selectOracleMovieDetails,
  selectOracleTrailerKey,
  selectTopRatedMovieDetails,
  selectTopRatedTrailerKey,
} from "@/lib/selectors";

type MovieDetailsType = {
  backdrop_path: string;
  genres: Array<{ id: string; name: string }>;
  overview: string;
  poster_path: string;
  release_date: string;
  tagline: string;
  vote_average: number;
  vote_count: number;
  production_countries: Array<{ iso_3166_1: string }>;
  runtime: number;
  title: string;
};

export function useMovieModal(type: "oracle" | "top-rated") {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const oracleTrailerKey = useAppSelector(selectOracleTrailerKey);
  const topRatedTrailerKey = useAppSelector(selectTopRatedTrailerKey);
  const oracleMovieDetails = useAppSelector(selectOracleMovieDetails);
  const topRatedMovieDetails = useAppSelector(selectTopRatedMovieDetails);
  const [trailerKey, setTrailerKey] = useState<string | null>(null);
  const [movieDetails, setMovieDetails] = useState<MovieDetailsType | null>(
    null
  );

  useEffect(() => {
    const setTrailerAndDetails = (
      trailer: string | null,
      details: MovieDetailsType | null
    ) => {
      setTrailerKey(trailer);
      setMovieDetails(details);
    };

    if (type === "oracle") {
      setTrailerAndDetails(oracleTrailerKey, oracleMovieDetails);
    } else {
      setTrailerAndDetails(topRatedTrailerKey, topRatedMovieDetails);
    }
  }, [
    oracleMovieDetails,
    oracleTrailerKey,
    topRatedMovieDetails,
    topRatedTrailerKey,
    type,
  ]);

  return {
    isOpen,
    onOpen,
    onOpenChange,
    trailerKey,
    movieDetails,
  };
}

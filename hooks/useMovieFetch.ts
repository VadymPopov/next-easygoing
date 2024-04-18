import { ChangeEvent, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  selectGenres,
  selectYear,
  selectRandomPage,
  selectTotalPages,
} from "@/lib/selectors";
import {
  addSelectedGenres,
  addSelectedYear,
  updateRandomIdx,
  updateRandomPage,
} from "@/lib/moviesSlice";
import {
  fetchTotalPagesByGenreAndYear,
  fetchMoviesByGenreAndYear,
} from "@/lib/operations";
import { getRandomNumber } from "@/helpers/random";
import { Selection } from "@nextui-org/react";

export function useMovieFetch(year: string, values: Selection) {
  const selectedGenres = useAppSelector(selectGenres);
  const selectedYear = useAppSelector(selectYear);
  const randomPage = useAppSelector(selectRandomPage);
  const totalPages = useAppSelector(selectTotalPages);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const data = {
      genres: selectedGenres,
      year: selectedYear,
      page: randomPage,
    };

    dispatch(fetchMoviesByGenreAndYear(data));
  }, [dispatch, selectedGenres, randomPage, selectedYear]);

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const genres = Array.from(values).join(",");
    dispatch(updateRandomIdx(getRandomNumber(20)));

    if (genres !== selectedGenres || year !== selectedYear) {
      dispatch(addSelectedGenres(genres));
      dispatch(addSelectedYear(year));
      dispatch(fetchTotalPagesByGenreAndYear({ genres, year }));
    }

    if (totalPages) {
      dispatch(updateRandomPage(getRandomNumber(totalPages)));
    }
  };

  return { handleSubmit };
}

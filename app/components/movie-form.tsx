"use client";
import { useState, useEffect, ChangeEvent, useMemo } from "react";
import {
  Button,
  Input,
  Select,
  SelectItem,
  Selection,
} from "@nextui-org/react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  selectAllGenres,
  selectGenres,
  selectYear,
  selectTotalPages,
  selectRandomPage,
  selectIsLoading,
} from "@/lib/selectors";
import {
  addSelectedGenres,
  addSelectedYear,
  updateRandomIdx,
  updateRandomPage,
} from "@/lib/moviesSlice";
import {
  getGenres,
  fetchTotalPagesByGenreAndYear,
  fetchMoviesByGenreAndYear,
} from "@/lib/operations";
import { getRandomNumber } from "@/helpers/random";

type Genre = {
  id: number;
  name: string;
};

export default function MovieForm() {
  const selectedGenres = useAppSelector(selectGenres);
  const selectedYear = useAppSelector(selectYear);
  const genresArray = useAppSelector(selectAllGenres);
  const totalPages = useAppSelector(selectTotalPages);
  const randomPage = useAppSelector(selectRandomPage);
  const isLoading = useAppSelector(selectIsLoading);
  const [values, setValues] = useState<Selection>(new Set([]));
  const [year, setYear] = useState(new Date().getFullYear().toString());
  const dispatch = useAppDispatch();

  useMemo(() => {
    if (genresArray.length === 0) {
      dispatch(getGenres());
    }
  }, [dispatch, genresArray]);

  useEffect(() => {
    const data: {
      genres: string;
      year: string;
      page: string;
    } = {
      genres: selectedGenres,
      year: selectedYear,
      page: randomPage,
    };

    dispatch(fetchMoviesByGenreAndYear(data));
  }, [dispatch, selectedGenres, randomPage, selectedYear]);

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
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

  const handleValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    const year = event.target.value;
    setYear(year);
  };

  return (
    <>
      <form
        className='flex items-center justify-center gap-4 mb-6'
        onSubmit={handleSubmit}>
        <Select
          label='Select the genre'
          name='genres'
          selectionMode='multiple'
          className='max-w-xs'
          variant='underlined'
          selectedKeys={values}
          labelPlacement='outside'
          onSelectionChange={setValues}>
          {genresArray.map((genre: Genre) => (
            <SelectItem key={genre.id} value={genre.id}>
              {genre.name}
            </SelectItem>
          ))}
        </Select>
        <Input
          className=''
          type='number'
          name='year'
          step={1}
          min={1888}
          max={new Date().getFullYear().toString()}
          label='Enter the year'
          labelPlacement='outside'
          variant='underlined'
          onChange={handleValueChange}
          value={year}
        />
        <Button
          type='submit'
          radius='full'
          size='md'
          variant='ghost'
          color='primary'
          isDisabled={isLoading}>
          Ask the Oracle
        </Button>
      </form>
    </>
  );
}

"use client";
import { useState, useEffect, ChangeEvent, FormEvent } from "react";
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
} from "@/lib/selectors";
import {
  addSelectedGenres,
  addSelectedYear,
  updateRandomPage,
} from "@/lib/moviesSlice";
import toast from "react-hot-toast";
import MatrixDigitalRain from "./matrix-rain";
import { getInitialMovie } from "@/helpers/movies";
import { getGenres, fetchTotalPagesByGenreAndYear } from "@/lib/operations";
import { getRandomNumber } from "@/helpers/random";

type Genre = {
  id: number;
  name: string;
};

export default function MovieForm() {
  const selectedGenres = useAppSelector(selectGenres);
  const selectedYear = useAppSelector(selectYear);
  const generesArray = useAppSelector(selectAllGenres);
  const totalPages = useAppSelector(selectTotalPages);
  const [values, setValues] = useState<Selection>(new Set([]));
  const [year, setYear] = useState(new Date().getFullYear().toString());
  const [isInvalid, setIsInvalid] = useState(false);
  const [shouldUnmount, setShouldUnmount] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const dispatch = useAppDispatch();

  console.log(totalPages);

  useEffect(() => {
    if (generesArray.length <= 0) {
      dispatch(getGenres());
    }
  }, [dispatch, generesArray]);

  const showToastWithDelay = (
    message: string,
    delay: number,
    duration: number
  ) => {
    setTimeout(() => {
      toast(message, {
        duration: duration,
        position: "top-center",
      });
    }, delay);
  };

  useEffect(() => {
    if (shouldUnmount) {
      const timer = setTimeout(() => {
        setShouldUnmount(false);
      }, 5000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [shouldUnmount]);

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const genres = Array.from(values).join(",");

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
          {generesArray.map((genre: Genre) => (
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
          isInvalid={isInvalid}
          errorMessage={isInvalid && "That's not serious"}
          onChange={handleValueChange}
          value={year}
        />
        <Button
          type='submit'
          radius='full'
          size='md'
          variant='ghost'
          color='primary'
          isDisabled={isDisabled}>
          Ask the Oracle
        </Button>
      </form>
      {/* {randomNumber !== null && shouldUnmount && (
        <>
          <MatrixDigitalRain />
          <p className='animate-pulse z-50 text-white text-4xl fixed top-0 left-0 w-full h-full flex items-center justify-center'>
            {randomNumber}
          </p>
        </>
      )} */}
    </>
  );
}

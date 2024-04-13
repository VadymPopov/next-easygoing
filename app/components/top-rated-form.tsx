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

export default function TopRatedForm() {
  const [isInvalid, setIsInvalid] = useState(false);
  const [shouldUnmount, setShouldUnmount] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const dispatch = useAppDispatch();

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
    dispatch(updateRandomPage(getRandomNumber(200)));
  };

  return (
    <>
      <form
        className='flex items-center justify-center gap-4 mb-6'
        onSubmit={handleSubmit}>
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

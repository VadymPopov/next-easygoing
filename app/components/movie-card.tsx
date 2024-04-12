"use client";
import React, { useEffect } from "react";
import {
  Card,
  CardFooter,
  CardHeader,
  Image,
  Button,
  CardBody,
} from "@nextui-org/react";
import MovieModal from "./modal";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { fetchInitialMovie, fetchMoviesByGenreAndYear } from "@/lib/operations";
import {
  selectGenres,
  selectMovie,
  selectRandomPage,
  selectYear,
} from "@/lib/selectors";

export default function MovieCard() {
  const dispatch = useAppDispatch();
  const year = useAppSelector(selectYear);
  const genres = useAppSelector(selectGenres);
  const movie = useAppSelector(selectMovie);
  const randomPage = useAppSelector(selectRandomPage);

  const { title, vote_average, overview, poster_path, id } = movie || {};

  useEffect(() => {
    if (randomPage && year) {
      const data: { genres: string; year: string; page: string } = {
        genres: genres,
        year: year,
        page: randomPage.toString(),
      };
      dispatch(fetchMoviesByGenreAndYear(data));
    }
  }, [dispatch, genres, randomPage, year]);

  useEffect(() => {
    if (movie && Object.keys(movie).length === 0) {
      dispatch(fetchInitialMovie());
    }
  }, [dispatch, movie]);

  return (
    <>
      <Card isFooterBlurred radius='lg' className='border-none'>
        <CardHeader className='pb-0 pt-2 px-4 flex-col items-start'>
          <p className='text-tiny uppercase font-bold'>Daily Mix</p>
          <small className='text-default-500'>12 Tracks</small>
          <h4 className='font-bold text-large'>{overview}</h4>
        </CardHeader>
        <CardBody className='overflow-visible py-2'>
          <Image
            alt='Woman listing to music'
            className='object-cover'
            height={600}
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            width={200}
          />
        </CardBody>
        <CardFooter className='justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10'>
          <p className='text-tiny text-white/80'>{title}</p>
          <Button
            className='text-tiny text-white bg-black/20'
            variant='flat'
            color='default'
            radius='lg'
            size='sm'>
            {vote_average}
          </Button>
        </CardFooter>
      </Card>
      <MovieModal />
    </>
  );
}

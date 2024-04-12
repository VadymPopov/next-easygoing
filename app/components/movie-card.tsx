"use client";
import React, { useEffect } from "react";
import { Card, CardFooter, Image, CardBody } from "@nextui-org/react";
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

  const { title, poster_path } = movie || {};

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
      <Card isFooterBlurred radius='lg' className='border-none max-w-96 m-auto'>
        <CardBody className='overflow-visible p-0'>
          <Image
            alt={title}
            className='object-cover max-w-96'
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                : "/fallback-img.jpg"
            }
            isZoomed
          />
        </CardBody>
        <CardFooter className='justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10'>
          <p className='text-tiny text-white/80 uppercase'>{title}</p>
          <MovieModal />
        </CardFooter>
      </Card>
    </>
  );
}

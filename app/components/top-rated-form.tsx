"use client";
import { ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useLocale } from "next-intl";
import { fetchTopRatedMovies } from "@/lib/operations";
import { getRandomNumber } from "@/helpers/random";
import AskButton from "./ask-button";
import { selectIsLoading } from "@/lib/selectors";

export default function TopRatedForm() {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectIsLoading);
  const locale = useLocale();

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(
      fetchTopRatedMovies({
        randomPage: getRandomNumber(200).toString(),
        locale,
      })
    );
  };

  return (
    <>
      <form
        className='flex items-center justify-center gap-4 mb-6'
        onSubmit={handleSubmit}>
        <AskButton type='submit' isDisabled={isLoading} />
      </form>
    </>
  );
}

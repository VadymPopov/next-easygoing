import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { selectAllGenres } from "@/lib/selectors";
import { fetchGenres } from "@/lib/operations";
import { useLocale } from "next-intl";

export function useGenreSelection() {
  const dispatch = useAppDispatch();
  const genresArray = useAppSelector(selectAllGenres);
  const locale = useLocale();

  useEffect(() => {
    dispatch(fetchGenres(locale));
  }, [dispatch, locale]);

  return { genresArray };
}

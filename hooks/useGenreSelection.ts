import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { selectAllGenres } from "@/lib/selectors";
import { fetchGenres } from "@/lib/operations";

export function useGenreSelection() {
  const dispatch = useAppDispatch();
  const genresArray = useAppSelector(selectAllGenres);

  useEffect(() => {
    if (genresArray.length === 0) {
      dispatch(fetchGenres());
    }
  }, [dispatch, genresArray]);

  return { genresArray };
}

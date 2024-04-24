"use client";
import { useState } from "react";
import { Input, Select, SelectItem, Selection } from "@nextui-org/react";
import { useAppSelector } from "@/lib/hooks";
import { selectIsLoading } from "@/lib/selectors";
import { useTranslations } from "next-intl";

import AskButton from "./ask-button";
import { useGenreSelection } from "@/hooks/useGenreSelection";
import { useYearSelection } from "@/hooks/useYearSelection";
import { useMovieFetch } from "@/hooks/useMovieFetch";

interface Genre {
  id: number;
  name: string;
}

export default function MovieForm() {
  const { genresArray } = useGenreSelection();
  const { year, handleChange } = useYearSelection();
  const isLoading = useAppSelector(selectIsLoading);
  const [values, setValues] = useState<Selection>(new Set<number>([]));
  const { handleSubmit } = useMovieFetch(year, values);
  const t = useTranslations("MovieForm");

  return (
    <>
      <form className='mb-6' onSubmit={handleSubmit}>
        <div className='flex md:flex-row flex-col items-center justify-center gap-4 mb-6'>
          <Select
            label={t("labelOne")}
            name='genres'
            selectionMode='multiple'
            className='max-w-md min-w-xs'
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
            className='md:max-w-44 max-w-md'
            type='number'
            name='year'
            step={1}
            min={1888}
            max={new Date().getFullYear().toString()}
            label={t("labelTwo")}
            labelPlacement='outside'
            variant='underlined'
            onChange={handleChange}
            value={year}
          />
        </div>

        <AskButton type='submit' isDisabled={isLoading} />
      </form>
    </>
  );
}

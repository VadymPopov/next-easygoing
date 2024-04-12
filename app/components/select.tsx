"use client";
import { Select, SelectItem, Selection } from "@nextui-org/react";
import { useState } from "react";

export type Genre = {
  id: number;
  name: string;
};

export default function SelectGenre({ genres }: { genres: Genre[] }) {
  const [values, setValues] = useState<Selection>(new Set([]));

  return (
    <>
      <Select
        label='Select the genre'
        name='genres'
        selectionMode='multiple'
        className='max-w-xs'
        variant='underlined'
        selectedKeys={values}
        labelPlacement='outside'
        onSelectionChange={setValues}>
        {genres.map((genre) => (
          <SelectItem key={genre.id} value={genre.id}>
            {genre.name}
          </SelectItem>
        ))}
      </Select>
      <p className='text-small text-default-500'>
        Selected: {Array.from(values).join(", ")}
      </p>
    </>
  );
}

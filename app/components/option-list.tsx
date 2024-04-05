"use client";
import { Option } from "./option";
import { getOptions, getRandomIdx } from "@/lib/selectors";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { Button } from "@nextui-org/react";
import { GiPill } from "react-icons/gi";
import { getRandomNumber } from "@/helpers/random";
import { addIdx, deleteIdx } from "@/lib/randomSlice";

export type OptionsType = {
  text: string;
  id: string;
};

export function OptionList() {
  const dispatch = useAppDispatch();
  const options = useAppSelector(getOptions);
  const randomIndex = useAppSelector(getRandomIdx);

  const handleBtnClick = () => {
    if (randomIndex !== null) {
      console.log("I cant go further");
      return;
    }
    const generatedIdx = getRandomNumber(options.length) - 1;
    dispatch(addIdx(generatedIdx));
  };

  return (
    <>
      <ul className=''>
        {options.length > 0 && (
          <p className='text-lg flex items-center justify-end gap-4 mb-6 font-semibold'>
            Options to choose from{" "}
            <span className='text-2xl'>{options.length}</span>
          </p>
        )}
        {options.map((option: OptionsType, idx: number) => (
          <li className='pb-4' key={option.id}>
            <Option option={option} idx={idx} />
          </li>
        ))}
      </ul>
      {options.length >= 2 && (
        <Button
          size='lg'
          variant='ghost'
          className='text-lg flex items-center justify-center m-auto gap-4 mb-6 font-semibold'
          onClick={handleBtnClick}>
          Ask the Oracle{" "}
          <GiPill className='animate-spin h-10 w-10 text-current' />
        </Button>
      )}
    </>
  );
}

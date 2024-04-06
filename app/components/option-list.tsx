"use client";
import { Option } from "./option";
import { getOptions, getRandomIdx } from "@/lib/selectors";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { Button, Link } from "@nextui-org/react";
import { GiPill } from "react-icons/gi";
import { getRandomNumber } from "@/helpers/random";
import { addIdx } from "@/lib/randomSlice";
import MatrixDigitalRain from "@/app/components/matrix-rain";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export type OptionsType = {
  text: string;
  id: string;
};

export function OptionList() {
  const [shouldUnmount, setShouldUnmount] = useState(false);
  const dispatch = useAppDispatch();
  const options = useAppSelector(getOptions);
  const randomIndex = useAppSelector(getRandomIdx);

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

  const handleBtnClick = () => {
    if (randomIndex !== null) {
      showToastWithDelay("the Oracle sees you", 300, 3000);
      showToastWithDelay(
        "You are really think that you can cheat?!",
        1000,
        3500
      );
      showToastWithDelay("I know you better then this", 1400, 3000);
      showToastWithDelay(
        "Change the list if you want one more try...",
        1800,
        5000
      );
      showToastWithDelay("Dont upset me anymore", 2000, 3500);
      return;
    }
    const generatedIdx = getRandomNumber(options.length) - 1;
    dispatch(addIdx(generatedIdx));
    setShouldUnmount(true);
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
      {options[randomIndex] && shouldUnmount && (
        <>
          <MatrixDigitalRain />
          <p className='animate-pulse z-50 text-white text-4xl fixed top-0 left-0 w-full h-full flex items-center justify-center'>
            {options[randomIndex]?.text}
          </p>
        </>
      )}
    </>
  );
}

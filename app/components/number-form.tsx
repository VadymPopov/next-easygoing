"use client";
import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { Button, Input } from "@nextui-org/react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { addNumber, deleteNumber } from "@/lib/randomSlice";
import { selectRandomNumber } from "@/lib/selectors";
import toast from "react-hot-toast";
import { getRandomIntInclusive } from "@/helpers/random";
import MatrixDigitalRain from "./matrix-rain";
import AskButton from "./ask-button";

export default function NumberForm() {
  const [minValue, setMinValue] = useState("0");
  const [maxValue, setMaxValue] = useState("0");
  const [isInvalid, setIsInvalid] = useState(false);
  const [shouldUnmount, setShouldUnmount] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const dispatch = useAppDispatch();
  const randomNumber = useAppSelector(selectRandomNumber);

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
    const form = event.target as HTMLFormElement;
    const minNumberInput = form.elements.namedItem(
      "minNumber"
    ) as HTMLInputElement;
    const maxNumberInput = form.elements.namedItem(
      "maxNumber"
    ) as HTMLInputElement;

    const minNumber = parseInt(minNumberInput.value, 10);
    const maxNumber = parseInt(maxNumberInput.value, 10);

    if (minNumber >= maxNumber) {
      return setIsInvalid(true);
    } else {
      setIsInvalid(false);
    }

    if (randomNumber !== null) {
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
      showToastWithDelay("I am watching you", 2200, 3200);
      setIsDisabled(true);
      return;
    }

    const generatedNumber = getRandomIntInclusive(minNumber, maxNumber);
    dispatch(addNumber(generatedNumber));
    setShouldUnmount(true);
  };

  const handleValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    if (name === "minNumber") {
      setMinValue(value);
    } else {
      setMaxValue(value);
    }

    if (randomNumber !== null) {
      dispatch(deleteNumber());
    }

    setIsDisabled(false);
  };

  return (
    <>
      <form className='mb-6' onSubmit={handleSubmit}>
        <div className='flex flex-column items-center justify-center gap-4 mb-6'>
          <Input
            className=''
            type='number'
            name='minNumber'
            step={1}
            min={0}
            label='Enter minimum value'
            labelPlacement='outside'
            variant='underlined'
            isInvalid={isInvalid}
            errorMessage={isInvalid && "That's not serious"}
            onChange={handleValueChange}
            value={minValue}
          />
          <Input
            className=''
            type='number'
            name='maxNumber'
            step={1}
            min={0}
            label='Enter maximum value'
            labelPlacement='outside'
            variant='underlined'
            isInvalid={isInvalid}
            errorMessage={
              isInvalid && "That's not serious, max value is the maximum"
            }
            onChange={handleValueChange}
            value={maxValue}
          />
        </div>
        <AskButton isDisabled={isDisabled} type='submit' />
      </form>
      {randomNumber !== null && shouldUnmount && (
        <>
          <MatrixDigitalRain />
          <p className='animate-pulse z-50 text-white text-4xl fixed top-0 left-0 w-full h-full flex items-center justify-center'>
            {randomNumber}
          </p>
        </>
      )}
    </>
  );
}

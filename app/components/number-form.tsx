"use client";
import { useState, useEffect } from "react";
import AskButton from "./ask-button";
import OracleResponse from "./oracle-response";
import { Input } from "@nextui-org/react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { addNumber, deleteNumber } from "@/lib/randomSlice";
import { selectRandomNumber } from "@/lib/selectors";
import { getRandomIntInclusive } from "@/helpers/random";
import { showToast } from "@/helpers/toast";
import useNumberForm from "@/hooks/useNumberForm";

export default function NumberForm() {
  const [shouldUnmount, setShouldUnmount] = useState<boolean>(false);
  const [showRandomNumber, setShowRandomNumber] = useState<boolean>(false);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  const randomNumber = useAppSelector(selectRandomNumber);
  const dispatch = useAppDispatch();

  const { values, errors, handleChange, handleSubmit } = useNumberForm({
    onSubmit: (minValue, maxValue) => {
      if (randomNumber !== null) {
        showToast("Are you serious???", 300, 3000);
        showToast("Again?!", 1000, 3500);
        showToast("I know you better then this", 1400, 3000);
        showToast("Change the numbers if you want one more try...", 1800, 5000);
        showToast("Be smarter next time", 2000, 3500);
        showToast("I am always watching you", 2200, 3200);
        setIsDisabled(true);
        return;
      }

      const generatedNumber = getRandomIntInclusive(minValue, maxValue);
      dispatch(addNumber(generatedNumber));
      setShouldUnmount(true);
      setShowRandomNumber(false);
    },
    onChange: () => {
      if (randomNumber !== null) {
        dispatch(deleteNumber());
      }

      setIsDisabled(false);
    },
  });

  useEffect(() => {
    if (shouldUnmount) {
      const timer = setTimeout(() => {
        setShouldUnmount(false);
      }, 5000);
      const timerNumber = setTimeout(() => {
        setShowRandomNumber(true);
      }, 1000);

      return () => {
        clearTimeout(timer);
        clearTimeout(timerNumber);
      };
    }
  }, [shouldUnmount]);

  return (
    <>
      <form className='mb-6' onSubmit={handleSubmit}>
        <div className='flex flex-col md:flex-row items-center justify-center gap-4 mb-6'>
          <Input
            type='number'
            name='minValue'
            step={1}
            min={0}
            label='Enter minimum value'
            labelPlacement='outside'
            variant='underlined'
            isInvalid={!!errors.minValue}
            errorMessage={errors.minValue}
            onChange={handleChange}
            value={values.minValue}
          />
          <Input
            type='number'
            name='maxValue'
            step={1}
            min={0}
            label='Enter maximum value'
            labelPlacement='outside'
            variant='underlined'
            isInvalid={!!errors.maxValue}
            errorMessage={errors.maxValue}
            onChange={handleChange}
            value={values.maxValue}
          />
        </div>
        <AskButton isDisabled={isDisabled} type='submit' />
      </form>
      {randomNumber !== null && shouldUnmount && (
        <OracleResponse
          content={randomNumber}
          showContent={showRandomNumber}
          fontSize='text-6xl'
        />
      )}
    </>
  );
}

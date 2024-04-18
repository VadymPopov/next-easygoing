"use client";
import Option from "./option";
import AskButton from "./ask-button";
import OracleResponse from "./oracle-response";
import {
  selectIsDisabled,
  selectOptions,
  selectRandomIdx,
} from "@/lib/selectors";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { getRandomNumber } from "@/helpers/random";
import { addIdx, toggleIsDisabled } from "@/lib/randomSlice";
import { useEffect, useState } from "react";
import { showToast } from "@/helpers/toast";

export type OptionsType = {
  text: string;
  id: string;
};

export function OptionList() {
  const [shouldUnmount, setShouldUnmount] = useState(false);
  const [showRandomOption, setShowRandomOption] = useState(false);
  const dispatch = useAppDispatch();
  const options = useAppSelector(selectOptions);
  const randomIndex = useAppSelector(selectRandomIdx);
  const isDisabled = useAppSelector(selectIsDisabled);

  useEffect(() => {
    if (shouldUnmount) {
      const timer = setTimeout(() => {
        setShouldUnmount(false);
      }, 5000);
      const timerOption = setTimeout(() => {
        setShowRandomOption(true);
      }, 1000);

      return () => {
        clearTimeout(timer);
        clearTimeout(timerOption);
      };
    }
  }, [shouldUnmount]);

  const handleBtnClick = () => {
    if (randomIndex !== null) {
      showToast("the Oracle sees you", 300, 3000);
      showToast("You are really think that you can cheat?!", 1000, 3500);
      showToast("I know you better then this", 1400, 3000);
      showToast("Change the list if you want one more try...", 1800, 5000);
      showToast("Dont upset me anymore", 2000, 3500);
      showToast("I am watching you", 2200, 3200);
      dispatch(toggleIsDisabled(true));
      return;
    }
    const generatedIdx = getRandomNumber(options.length) - 1;
    dispatch(addIdx(generatedIdx));
    setShouldUnmount(true);
    setShowRandomOption(false);
  };

  return (
    <>
      <ul className='mb-6'>
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
        <AskButton
          type='button'
          isDisabled={isDisabled}
          onClick={handleBtnClick}
        />
      )}
      {options[randomIndex] && shouldUnmount && (
        <OracleResponse
          content={options[randomIndex]?.text}
          showContent={showRandomOption}
          fontSize='text-6xl'
        />
      )}
    </>
  );
}

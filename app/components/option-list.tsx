"use client";
import { Option } from "./option";
import { getOptions } from "@/lib/selectors";
import { useAppSelector } from "@/lib/hooks";

export type OptionsType = {
  text: string;
  id: string;
};

export function OptionList() {
  const options = useAppSelector(getOptions);

  return (
    <ul className=''>
      {options.map((option: OptionsType, idx: number) => (
        <li className='pb-4 flex' key={option.id}>
          <Option option={option} idx={idx} />
        </li>
      ))}
    </ul>
  );
}

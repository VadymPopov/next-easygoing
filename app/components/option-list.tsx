"use client";
import { Option } from "./option";

export function OptionList() {
  const options = ["halo", "world", "yoy-yo"];
  return (
    <ul className=''>
      {options.map((option) => (
        <li className='pb-4' key={option}>
          <Option option={option} />
        </li>
      ))}
    </ul>
  );
}

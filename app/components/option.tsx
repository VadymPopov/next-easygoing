"use client";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { deleteOption } from "@/lib/optionsSlice";
import { OptionsType } from "./option-list";
import { FaTrash } from "react-icons/fa";
import { deleteIdx, toggleIsDisabled } from "@/lib/randomSlice";
import { selectRandomIdx } from "@/lib/selectors";

export function Option({ option, idx }: { option: OptionsType; idx: number }) {
  const dispatch = useAppDispatch();
  const randomIndex = useAppSelector(selectRandomIdx);

  const handleDelete = () => {
    if (randomIndex !== null) {
      dispatch(deleteIdx());
      dispatch(toggleIsDisabled(false));
    }

    dispatch(deleteOption(option.id));
  };

  return (
    <div className='flex items-center justify-between'>
      <p className='text-lg'>{`${idx + 1}. ${option.text}`}</p>
      <button onClick={handleDelete}>
        <FaTrash className='fill-red-600' size={24} />
      </button>
    </div>
  );
}

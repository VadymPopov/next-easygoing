"use client";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { deleteOption } from "@/lib/optionsSlice";
import { OptionsType } from "./option-list";
import { FaTrash } from "react-icons/fa";
import { deleteIdx, toggleIsDisabled } from "@/lib/randomSlice";
import { selectRandomIdx } from "@/lib/selectors";

export default function Option({
  option,
  idx,
}: {
  option: OptionsType;
  idx: number;
}) {
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
      <span className='text-lg break-words flex-grow-1 mr-2 max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl'>{`${
        idx + 1
      }. ${option.text}`}</span>
      <button onClick={handleDelete}>
        <FaTrash className='fill-red-600' size={24} />
      </button>
    </div>
  );
}

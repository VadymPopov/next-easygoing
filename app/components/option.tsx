"use client";
import { MdClose } from "react-icons/md";

export function Option({ option }) {
  const handleDelete = () => {};
  return (
    <div className='flex items-center justify-between'>
      <p className='text-lg'>{option}</p>
      <button className='' onClick={handleDelete}>
        <MdClose size={24} />
      </button>
    </div>
  );
}

"use client";
import React from "react";
import { Button } from "@nextui-org/react";
import { GiPill } from "react-icons/gi";

type AskButtonProps = {
  isDisabled: boolean;
  onClick?: () => void;
  type: "button" | "submit" | "reset" | undefined;
};

export default function AskButton({
  isDisabled,
  onClick,
  type,
}: AskButtonProps) {
  return (
    <Button
      size='lg'
      type={type}
      variant='ghost'
      className='text-lg flex items-center justify-center m-auto gap-4 mb-6 font-semibold'
      isDisabled={isDisabled}
      onClick={onClick}>
      Ask the Oracle <GiPill className='animate-spin h-10 w-10 text-current' />
    </Button>
  );
}

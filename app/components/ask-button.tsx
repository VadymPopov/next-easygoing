"use client";
import React from "react";
import { Button } from "@nextui-org/react";
import { useTranslations } from "next-intl";

interface AskButtonProps {
  isDisabled: boolean;
  onClick?: () => void;
  type: "button" | "submit" | "reset" | undefined;
}

export default function AskButton({
  isDisabled,
  onClick,
  type,
}: AskButtonProps) {
  const t = useTranslations("AskButton");
  return (
    <Button
      size='lg'
      type={type}
      variant='ghost'
      className='text-lg flex items-center justify-center m-auto gap-4 mb-6 font-semibold'
      isDisabled={isDisabled}
      onClick={onClick}
      color='success'>
      {t("button")}
    </Button>
  );
}

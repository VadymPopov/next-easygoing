"use client";
import { Button, Input } from "@nextui-org/react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { addOption } from "@/lib/optionsSlice";
import { deleteIdx, toggleIsDisabled } from "@/lib/randomSlice";
import { selectOptions, selectRandomIdx } from "@/lib/selectors";
import { useOptionForm } from "@/hooks/useOptionsForm";
import { useTranslations } from "next-intl";

export function OptionForm() {
  const { value, isInvalid, handleChange, handleSubmit, setIsInvalid } =
    useOptionForm({
      onSubmit: () => {
        if (randomIndex !== null) {
          dispatch(deleteIdx());
          dispatch(toggleIsDisabled(false));
        }

        dispatch(addOption(value.trim()));
      },
    });

  const dispatch = useAppDispatch();
  const randomIndex = useAppSelector(selectRandomIdx);
  const options = useAppSelector(selectOptions);
  const t = useTranslations("OptionForm");

  return (
    <form
      className='flex flex-col md:flex-row items-center justify-center gap-4 mb-6'
      onSubmit={handleSubmit(options)}>
      <Input
        className='md:mr-6 md:mb-0 mb-6'
        type='text'
        name='text'
        label={t("label")}
        labelPlacement='outside'
        variant='underlined'
        isClearable
        isInvalid={isInvalid}
        onClear={() => setIsInvalid(false)}
        errorMessage={isInvalid && t("errorMessage")}
        onValueChange={handleChange}
        value={value}
      />
      <Button
        type='submit'
        radius='full'
        size='md'
        variant='ghost'
        color='primary'
        className='px-10'
        isDisabled={isInvalid}>
        {t("button")}
      </Button>
    </form>
  );
}

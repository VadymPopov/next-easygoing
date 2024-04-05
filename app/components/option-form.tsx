"use client";
import { useState } from "react";
import { Button, Input } from "@nextui-org/react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { addOption } from "@/lib/optionsSlice";
import { deleteIdx } from "@/lib/randomSlice";
import { getRandomIdx } from "@/lib/selectors";

export function OptionForm() {
  const [value, setValue] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);
  const dispatch = useAppDispatch();
  const randomIndex = useAppSelector(getRandomIdx);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    if (form.elements.text.value === "") {
      return setIsInvalid(true);
    } else {
      setIsInvalid(false);
    }

    if (randomIndex !== null) {
      dispatch(deleteIdx());
    }

    dispatch(addOption(form.elements.text.value));
    form.reset();
  };

  return (
    <form
      className='flex items-center justify-center gap-4 mb-6'
      onSubmit={handleSubmit}>
      <Input
        className=''
        type='text'
        name='text'
        label='Enter your option'
        labelPlacement='outside'
        variant='underlined'
        isClearable
        isInvalid={isInvalid}
        errorMessage={isInvalid && "That's not serious, write something"}
        onValueChange={setValue}
        value={value}
      />
      <Button
        type='submit'
        radius='full'
        size='md'
        variant='ghost'
        color='primary'>
        Add task
      </Button>
    </form>
  );
}

"use client";
import { useState } from "react";
import { Button, Input } from "@nextui-org/react";
import { GiPill } from "react-icons/gi";

export function OptionForm() {
  const [value, setValue] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    if (form.elements.text.value === "") {
      setIsInvalid(true);
    } else {
      setIsInvalid(false);
    }
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
      />
      <Button
        type='submit'
        radius='full'
        size='md'
        variant='ghost'
        color='primary'
        isLoading
        spinner={<GiPill className='animate-spin h-10 w-10 text-current' />}>
        Add task
      </Button>
    </form>
  );
}

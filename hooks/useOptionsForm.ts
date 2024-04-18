import { useState } from "react";

interface useOptionFormProps {
  onSubmit: () => void;
}

export function useOptionForm({ onSubmit }: useOptionFormProps) {
  const [value, setValue] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);

  const handleChange = (value: string) => {
    setValue(value);
    setIsInvalid(false);
  };

  const handleSubmit =
    (options: { text: string; id: string }[]) =>
    (event: React.ChangeEvent<HTMLFormElement>) => {
      event.preventDefault();
      const form = event.target as HTMLFormElement;
      const inputValue = value.trim();

      const isExisting = options.some(
        (option: { text: string; id: string }) =>
          option.text.toLowerCase().trim() === inputValue.toLowerCase()
      );

      if (!inputValue || isExisting) {
        setIsInvalid(true);
        return;
      }

      onSubmit();

      setIsInvalid(false);
      setValue("");
      form.reset();
    };

  return {
    value,
    isInvalid,
    handleChange,
    handleSubmit,
    setIsInvalid,
  };
}

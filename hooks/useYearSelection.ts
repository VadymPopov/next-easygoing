import { useState, ChangeEvent } from "react";

export function useYearSelection() {
  const [year, setYear] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const year = event.target.value;
    setYear(year);
  };

  return { year, handleChange };
}

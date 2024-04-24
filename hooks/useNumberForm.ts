import { useState } from "react";
import { useTranslations } from "next-intl";

interface FormValues {
  minValue: string;
  maxValue: string;
}

interface FormErrors {
  minValue: string | null;
  maxValue: string | null;
}

interface UseNumberFormProps {
  onSubmit: (minValue: number, maxValue: number) => void;
  onChange: () => void;
}

const useNumberForm = ({ onSubmit, onChange }: UseNumberFormProps) => {
  const [values, setValues] = useState<FormValues>({
    minValue: "",
    maxValue: "",
  });
  const t = useTranslations("NumberForm");

  const [errors, setErrors] = useState<FormErrors>({
    minValue: null,
    maxValue: null,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
    setErrors({ minValue: null, maxValue: null });
    onChange();
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const minNumber = parseInt(values.minValue, 10);
    const maxNumber = parseInt(values.maxValue, 10);

    if (minNumber >= maxNumber || isNaN(minNumber) || isNaN(maxNumber)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        minValue: t("errorMin"),
        maxValue: t("errorMax"),
      }));
      return;
    }

    onSubmit(minNumber, maxNumber);
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  };
};

export default useNumberForm;

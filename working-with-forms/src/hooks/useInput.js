import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const valueInputBlurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  const valueInputClasses = hasError ? "form-control invalid" : "form-control";

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    valueInputClasses,
    valueChangeHandler,
    valueInputBlurHandler,
    reset,
  };
};

export default useInput;

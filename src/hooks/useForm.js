import { useState } from "react";

export const useForm = (initialState = {}) => {
  const [formState, setFormState] = useState(initialState);

  const resetForm = () => {
    setFormState(initialState);
  };

  const handleInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value
    });
  };
  return [formState, handleInputChange, resetForm];
};

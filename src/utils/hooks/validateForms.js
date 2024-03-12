import { useState } from "react";

/* export function useForm() {
  const [values, setValues] = useState({});

  const handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    setValues({ ...values, [name]: value });
  };

  return { values, handleChange, setValues };
}
 */

//хук управления формой и валидации формы
export function useFormWithValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    setValues({ ...values, [name]: value }); //обработчик полей
    setErrors({ ...errors, [name]: target.validationMessage }); //обработчик ошибок
    setIsValid(target.closest("form").checkValidity()); //проверка на валидность

    return 
  };

  /* //сбрасывает форму, ошибки
  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  ); */

  return { values, handleChange, errors, isValid };
}

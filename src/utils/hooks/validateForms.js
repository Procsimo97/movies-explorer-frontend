import { useState } from "react";

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


  return { values, handleChange, errors, isValid };
}

import { useState } from "react";
import AuthForm from "../AuthForm/AuthForm";
import { useFormWithValidation } from "../../utils/hooks/validateForms";

function Register({ onRegister }) {

    const { values, handleChange, errors, isValid } = useFormWithValidation();

    const [formValue, setFormValue] = useState({
        name: '',
        email: '',
        password: ''
    })

    const handleSubmit = (evt) => {
        evt.preventDefault();
        onRegister(formValue);
        console.log(formValue);
    }

    const handleChangeValues = (data) => {
        setFormValue(data);
    }

    return (
        <AuthForm title={"Добро пожаловать!"}
            button={"Зарегистрироваться"}
            text={"Уже зарегистрированы?"}
            link={"/signin"}
            linkName={"Войти"}
            onChange={handleChangeValues}
            onSubmit={handleSubmit} 
            nameValue={values}
            >

            <label className="auth-form__label" htmlFor="name">Имя</label>
            <input className="auth-form__input"
                id="name"
                name="name"
                type="text"
                required 
                onChange={handleChange}
                value={values.name || ''}/>
                <span className="auth-form__input-error">{errors.name}</span>

        </AuthForm>


    )
}

export default Register;
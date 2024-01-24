import { useState } from "react";
import AuthForm from "../AuthForm/AuthForm";

function Register({ onRegister }) {
    const [formValue, setFormValue] = useState({
        name: '',
        email: '',
        password: ''
    })

    const handleChange = (evt) => {
        const {name, value} = evt.target;
        setFormValue({
            ...formValue,
            [name] : value
        });
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        onRegister(formValue);
      }

    return (
        <AuthForm title={"Добро пожаловать!"}
            button={"Зарегистрироваться"}
            text={"Уже зарегистрированы?"}
            link={"/signin"}
            linkName={"Войти"}
            onChange={handleChange}
            onSubmit={handleSubmit} 
            value={formValue}
            >

            <label className="auth-form__label" htmlFor="name">Имя</label>
            <input className="auth-form__input"
                id="name"
                name="name"
                type="text"
                required 
                onChange={handleChange}
                value={formValue.name || ''}/>

        </AuthForm>


    )
}

export default Register;
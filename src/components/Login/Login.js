import { useState } from "react";
import AuthForm from "../AuthForm/AuthForm";

function Login({ onLogin }) {

    const [formValue, setFormValue] = useState({
        email: '',
        password: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin(formValue);

    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValue({
            ...formValue,
            [name]: value
        });
    }

    return (
        <AuthForm title={"Рады видеть!"}
            button={"Войти"}
            text={"Ещё не зарегистрированы?"}
            link={"/signup"}
            linkName={"Регистрация"}
            margin={"margin"}
            onSubmit={handleSubmit}
            onChange={handleChange}
            value={formValue}
            />
    )
}

export default Login;
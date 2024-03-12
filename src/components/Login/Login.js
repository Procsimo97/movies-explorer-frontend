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

    const handleChangeValues = (data) => {
        setFormValue(data);
    }

    return (
        <AuthForm title={"Рады видеть!"}
            button={"Войти"}
            text={"Ещё не зарегистрированы?"}
            link={"/signup"}
            linkName={"Регистрация"}
            margin={"margin"}
            onSubmit={handleSubmit}
            onChange={handleChangeValues}
            values={formValue}
            />
    )
}

export default Login;
import AuthForm from "../AuthForm/AuthForm";

function Register() {
    return (
        <AuthForm title={"Добро пожаловать!"}
            button={"Зарегистрироваться"}
            text={"Уже зарегистрированы?"}
            link={"/signin"}
            linkName={"Войти"} >


            <label className="auth-form__label" htmlFor="name">Имя</label>
            <input className="auth-form__input"
                id="name"
                name="name"
                type="text"
                required />

        </AuthForm>


    )
}

export default Register;
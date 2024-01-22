import AuthForm from "../AuthForm/AuthForm";

function Login() {
    return(
        <AuthForm title={"Рады видеть!"}
            button={"Войти"}
            text={"Ещё не зарегистрированы?"}
            link={"/signup"}
            linkName={"Регистрация"}
            margin={"margin"} />
    )
}

export default Login;
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

export default function AuthForm(props) {
    return (
        <section className="auth">
            <div className="auth-form">
                <img className="auth-form__logo" alt="лого" src={logo} />
                <h1 className="auth-form__title">{props.title}</h1>
                <form className="auth-form__form">
                    <fieldset className="auth-form__fields">
                        {props.children}
                        <label className="auth-form__label" htmlFor="email">E-mail</label>
                        <input className="auth-form__input"
                            id="email"
                            name="email"
                            type="emal"
                            required
                        />
                        <label className="auth-form__label" htmlFor="password">Пароль</label>
                        <input className="auth-form__input"
                            id="password"
                            name="password"
                            type="password"
                            required
                        />
                    </fieldset>
                    <button type="submit" className={`form__btn ${props.margin}`}>{props.button}</button>
                    <p className="auth-form__text">{props.text}
                        <Link to={props.link} className="link auth-form__link">{props.linkName}</Link>
                    </p>
                </form>
            </div>
        </section>
    )
}
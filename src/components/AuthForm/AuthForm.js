import logo from "../../images/logo.svg";
import { Link, NavLink } from "react-router-dom";

export default function AuthForm(props) {

    return (
        <main className="main">
            <section className="auth">
                <div className="auth-form">
                    <NavLink to='/' className="auth-form__nav">
                        <img className="auth-form__logo" alt="лого" src={logo} />
                    </NavLink>
                    <h1 className="auth-form__title">{props.title}</h1>
                    <form className="auth-form__form" onSubmit={props.onSubmit}>
                        <fieldset className="auth-form__fields">
                            {props.children}
                            <label className="auth-form__label" htmlFor="email">E-mail</label>
                            <input className="auth-form__input"
                                id="email"
                                name="email"
                                type="emal"
                                required
                                onChange={props.onChange}
                                value={props.value.email || ''}
                            />
                            <label className="auth-form__label" htmlFor="password">Пароль</label>
                            <input className="auth-form__input"
                                id="password"
                                name="password"
                                type="password"
                                required
                                onChange={props.onChange}
                                value={props.value.password || ''}
                            />
                        </fieldset>
                        <button type="submit" className={`form-btn ${props.margin}`}>{props.button}</button>
                        <p className="auth-form__text">{props.text}
                            <Link to={props.link} className="link auth-form__link">{props.linkName}</Link>
                        </p>
                    </form>
                </div>
            </section>
        </main>
    )
}
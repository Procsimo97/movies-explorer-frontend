import logo from "../../images/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { useFormWithValidation } from "../../utils/hooks/validateForms";
import { useEffect } from "react";

export default function AuthForm(props) {

    const { values, handleChange, errors, isValid } = useFormWithValidation();
    const conditionValidity = (!isValid);

    useEffect(() => {
        if(props.nameValue) {
            const name = props.nameValue.name;
            const formValues = {name, ...values};
            props.onChange(formValues);
        } else {
            props.onChange(values);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [values, props.nameValue]);

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
                                type="email"
                                required
                                onChange={handleChange}
                                value={values.email || ''}
                            />
                            <span className="auth-form__input-error">{errors.email}</span>
                            <label className="auth-form__label" htmlFor="password">Пароль</label>
                            <input className="auth-form__input"
                                id="password"
                                name="password"
                                type="password"
                                required
                                minLength="6"
                                onChange={handleChange}
                                value={values.password || ''}
                            />
                            <span className="auth-form__input-error">{errors.password}</span>
                        </fieldset>
                        <button type="submit"
                            className={conditionValidity ? `form-btn ${props.margin} form-btn_disabled` : `form-btn ${props.margin}`}
                            disabled={conditionValidity ? true : false}>{props.button}</button>

                        <p className="auth-form__text">{props.text}
                            <Link to={props.link} className="link auth-form__link">{props.linkName}</Link>
                        </p>
                    </form>
                </div>
            </section>
        </main>
    )
}
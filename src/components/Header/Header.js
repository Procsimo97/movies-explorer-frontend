import { Link, NavLink } from "react-router-dom";
import logo from "../../images/logo.svg";

export default function Header() {
    return (
        <header className="header">
            <NavLink to='/' className="header__nav">
                <img className="header__logo" src={logo} alt="лого" />
            </NavLink>
            <div className="header__links">
                <Link to='/signup' className="link header__link" >Регистрация</Link >
                <Link to='/signin' className="link header__link header__link_black" >Войти</Link >
            </div>
        </header>
    )
}


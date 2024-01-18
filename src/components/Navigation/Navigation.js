import { Link, NavLink } from "react-router-dom";

export default function Navigation(props) {
    return (
        <section className={`navigation ${props.burgerClass}`}>
            <nav className={`navigation__links ${props.burgerClass}`}>
                {props.children}
                <NavLink className={`link navigation__link ${props.linksClass}`} to="/movies">Фильмы</NavLink>
                <NavLink className={`link navigation__link ${props.linksClass}`} to="/saved-movies">Сохранённые фильмы</NavLink>
            </nav>
            <div className="navigation__profile">
                <Link className={`link profile__link ${props.linksClass}`} to="/profile" >Аккаунт</Link>
                <div className={`profile__icon ${props.classIcon}`} />
            </div>
        </section>
    )
}
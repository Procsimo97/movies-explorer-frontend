import { Link, NavLink } from "react-router-dom";

export default function Navigation(props) {

    return (
        <section className={`navigation ${props.burgerClass}`}>
            <nav className={`navigation__links ${props.burgerClass}`}>
                {props.children}
                <NavLink className={({isActive}) =>`link navigation__link ${props.linksClass} ${(isActive ? 'navigation__link_active' : '')}`} to="/movies" onClick={props.onClose}>Фильмы</NavLink>
                <NavLink className={({isActive}) =>`link navigation__link ${props.linksClass} ${(isActive ? 'navigation__link_active' : '')}`} to="/saved-movies" onClick={props.onClose}>Сохранённые фильмы</NavLink>
            </nav>
            <div className="navigation-profile">
                <Link className={`link navigation-profile__link ${props.linksClass}`} to="/profile" onClick={props.onClose}>Аккаунт</Link>
                <div className={`navigation-profile__icon ${props.classIcon}`} />
            </div>
        </section>
    )
}

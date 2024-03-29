import { Link, NavLink } from "react-router-dom";
import logo from "../../images/logo.svg";
import Navigation from "../Navigation/Navigation";
import { useResize } from "../../utils/windowSize";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

export default function Header(props) {
    const isMobaileWidth = useResize() <= 778;

    return (
        <header className={`header ${props.class}`}>
            <NavLink to='/' className="header__nav">
                <img className="header__logo" src={logo} alt="лого" />
            </NavLink>

            {props.isLogged ? (isMobaileWidth ?
                (<>
                    <button className="button burger-menu__button" type="button" onClick={props.onBurgerOpen} />
                    <BurgerMenu onClose={props.onClose} isOpen={props.isBurgerOpen}/>
                </>
                ) :
                (<Navigation classIcon={props.classIcon} />)
            ) : (
                <nav className="header__links">
                    <Link to='/signup' className="link header__link" >Регистрация</Link >
                    <Link to='/signin' className="link header__link header__link_black" >Войти</Link >
                </nav>
            )
            }
        </header>

    )
}


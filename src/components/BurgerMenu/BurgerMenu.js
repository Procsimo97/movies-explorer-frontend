import Navigation from "../Navigation/Navigation";
import { NavLink } from "react-router-dom";

export default function BurgerMenu(props) {
    return (
        <div className={`burger-container ${props.isOpen ? "burger_opened" : ""}`}>
            <div className="burger-menu">
                <button className="button burger-menu__btn-exit" onClick={props.onClose}/>
                <nav className="burger-menu__nav">
                    <Navigation burgerClass={"burger_nav"}
                                linksClass={"burger_links"}
                                onClose={props.onClose} >
                        <NavLink className="link navigation__link burger_links" to="/" onClick={props.onClose}>Главная</NavLink>
                    </Navigation>
                </nav>
            </div>
        </div>
    )
}
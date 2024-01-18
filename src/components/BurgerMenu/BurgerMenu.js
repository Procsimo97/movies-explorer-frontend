import Navigation from "../Navigation/Navigation";
import { NavLink } from "react-router-dom";

export default function BurgerMenu(props) {
    return (
        <div className={`burger-container ${props.isOpen ? "burger_opened" : ""}`}>
            <div className="burger-menu">
                <button className="button burger-menu__btn-exit" onClick={props.onClose}/>
                <nav className="burger-menu__nav">
                    <Navigation burgerClass={"burger_nav"}
                                linksClass={"burger_links"} >
                        <NavLink className="link navigation__link burger_links" to="/">Главная</NavLink>
                    </Navigation>
                </nav>
            </div>
        </div>
    )
}
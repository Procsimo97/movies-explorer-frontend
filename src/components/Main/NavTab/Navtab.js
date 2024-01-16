import { Link } from "react-router-dom";

export default function Navtab() {
    return(
        <nav className="navtab">
            <div className="navtab__container">
                <Link className="navtab__link" >О проекте</Link>
                <Link className="navtab__link" >Технологии</Link>
                <Link className="navtab__link" >Студент</Link>
            </div>
        </nav>
    )
}
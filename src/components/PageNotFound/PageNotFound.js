import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function PageNotFound() {
    const navigate = useNavigate();
    const goBackHistiry = () => {
        navigate(-1);
    }

    return (
        <div className="not-found">
            <h1 className="not-found__title">404</h1>
            <p className="not-found__text">Страница не найдена</p>
            <Link className="not-found__link" to={goBackHistiry}>Назад</Link>
        </div>

    )
}
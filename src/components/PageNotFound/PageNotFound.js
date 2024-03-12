import { useNavigate } from "react-router-dom";

export default function PageNotFound() {
    const navigate = useNavigate();
    const goBackHistiry = () => {
        navigate(-1);
    }

    return (
        <main className="main">
            <div className="not-found">
                <h1 className="not-found__title">404</h1>
                <p className="not-found__text">Страница не найдена</p>
                <button className="button not-found__button" onClick={goBackHistiry}>Назад</button>
            </div>
        </main>
    )
}
import cover from "../../../images/film-cover.jpg"

export default function MoviesCard() {
    return(
        <div className="films">
            <article className="films__box">
                <button type="button" className="films__save">Сохранить</button>
                <img className="films__cover" src={cover} alt="обложка фильма" />
                <div className="films__info">
                    <h2 className="films__name">Бег это свобода</h2>
                    <p className="films__duration">1ч 17м</p>
                </div>
            </article>
        </div>
    )
}
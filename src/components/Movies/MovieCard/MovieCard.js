import { useState } from "react";
import cover from "../../../images/film-cover.jpg"

export default function MoviesCard() {

    /*заглушка для применения стилей*/
    const [isSaved, setIsSaved] = useState(false);
    

    function saveCard() {
        if(isSaved) {
            setIsSaved(false);
        } else {
            setIsSaved(true);
        }
    }

    const cardSaveButtonClassName = (
        `films__save ${isSaved ? 'saved' : ''}`
    );

    const cardTitleButton = (
        `${isSaved ? '' : 'Сохранить'}`
    );
    
    return(
        <div className="films">
            <article className="films__box">
                <button type="button" className={`link ${cardSaveButtonClassName}`} onClick={saveCard}>{cardTitleButton}</button>
                <img className="films__cover" src={cover} alt="обложка фильма" />
                <div className="films__info">
                    <h2 className="films__name">Бег это свобода</h2>
                    <p className="films__duration">1ч 17м</p>
                </div>
            </article>
        </div>
    )
} 
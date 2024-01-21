import { useState } from "react";
import cover from "../../../images/film-cover.jpg"

export default function MoviesCard(props) {

   /*временная заглушка для заполнения карточки фильма*/
    const cardFilm = {
        name: "Бег это свобода",
        duration: "1ч 17м",
    };

    const [isSaved, setIsSaved] = useState(false);
    

    function saveCard() {
        if(isSaved) {
            setIsSaved(false);
        } else {
            setIsSaved(true);
        }
    }

    /*заглушка*/
    function removeCard() {
        console.log("delete card");
    }

    const cardSaveButtonClassName = (
        `${isSaved ? 'saved' : ''}`
    );

    const cardTitleButton = (
        `${isSaved ? '' : 'Сохранить'}`
    );

    return(
        <div className="films">
            <article className="films__box">
                <button type="button" className={`link ${cardSaveButtonClassName} films__save ${props.btnClass} `}
                                      onClick={props.typeIcon === 'save' ? saveCard : removeCard}>
                                     { props.typeIcon === 'save' ? cardTitleButton : ''}
                </button>

                <img className="films__cover" src={cover} alt={`обложка фильма ${cardFilm.name}`} />
                <div className="films__info">
                    <h2 className="films__name">{cardFilm.name}</h2>
                    <p className="films__duration">{cardFilm.duration}</p>
                </div>
            </article>
        </div>
    )
} 
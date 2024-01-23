import { useState } from "react";

export default function MoviesCard(props) {

    const [isSaved, setIsSaved] = useState(false);
    
    function saveCard() {
        if(isSaved) {
            setIsSaved(false);
        } else {
            setIsSaved(true);
        }
    }

    //перевод минуты в часы
    function getTimeFromMins(mins) {
        let hours = Math.trunc(mins/60);
        let minutes = mins % 60;
        return hours + 'ч ' + minutes + 'м';
    }
    const duration = getTimeFromMins(props.movie.duration);

    /*заглушка*/
    function removeCard(props) {
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

                <img className="films__cover" src={`https://api.nomoreparties.co/${props.movie.image.url}`} alt={`обложка фильма ${props.movie.nameRU}`} />
                <div className="films__info">
                    <h2 className="films__name">{props.movie.nameRU}</h2>
                    <p className="films__duration">{duration}</p>
                </div>
            </article>
        </div>
    )
} 
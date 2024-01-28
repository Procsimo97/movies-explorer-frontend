export default function MoviesCard({movie, isSaved, onRemove, onSave, typeIcon, btnClass}) {

    //перевод минуты в часы
    function getTimeFromMins(mins) {
        let hours = Math.trunc(mins/60);
        let minutes = mins % 60;
        return hours + 'ч ' + minutes + 'м';
    }
    const duration = getTimeFromMins(movie.duration);
    
    function removeCard() {
        onRemove(movie)
    }

    function saveMovieCard() {
        if(!isSaved) {
            onSave(movie);
        }else {
            removeCard();
        }
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
                <button type="button" className={`link ${cardSaveButtonClassName} films__save ${btnClass} `}
                                      onClick={typeIcon === 'save' ? saveMovieCard : removeCard}>
                                     { typeIcon === 'save' ? cardTitleButton : ''}
                </button>

                <img className="films__cover" src={typeIcon === 'save' 
                                                ? `https://api.nomoreparties.co/${movie.image.url}`
                                                : movie.image}
                                                 alt={`обложка фильма ${movie.nameRU}`} />
                <div className="films__info">
                    <h2 className="films__name">{movie.nameRU}</h2>
                    <p className="films__duration">{duration}</p>
                </div>
            </article>
        </div>
    )
} 
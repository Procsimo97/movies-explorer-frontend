import MoviesCard from "../MovieCard/MovieCard";
import { useResize } from "../../../utils/windowSize";
import { useEffect, useState } from "react";

const moviesCardListConfig = {
    desktop : {
        arrayLength: 12,
        addCards: 3,
    },
    tablet: {
        arrayLength: 8,
        addCards: 2,
    },
    mobile:  {
        arrayLength: 5,
        addCards: 2,
    }
}

function displayCardCongig(currentWidth) {
    let movieListConfig;
    if(currentWidth >= 1160) {
        return movieListConfig = moviesCardListConfig.desktop;
    }
    if(currentWidth >= 728) {
        return movieListConfig = moviesCardListConfig.tablet;
    }
    return movieListConfig = moviesCardListConfig.mobile;
}   


export default function MoviesCardList(props) {

    const movieList = props.movies;
    const currentWidth = useResize();
    const [ movieArray, setMovieArray] = useState([]);
    const listParams = displayCardCongig(currentWidth);

    //изначальная длина массива
    let lengthArray = listParams.arrayLength;
    
    //определяет максимальную длину массива и выводит карточки
    useEffect(() => {
        movieArray.length = lengthArray;
       setMovieArray(movieList.slice(0, movieArray.length));
    }, [props.movies, listParams])

    //определеяет сколько карточек добавить в зависимости от ширины экрана
    function displayMore() {
        lengthArray =+ listParams.addCards;
        return setMovieArray(movieList.slice(0, movieArray.length + listParams.addCards));
    }

    return (
        

       <section className="movies-container">
            <ul className="movies__list">
            {movieArray.map((movie) => {
                                    return (
                                        <MoviesCard key={movie.id}
                                                    movie={movie}
                                                    btnClass={'films__save'}
                                                    typeIcon={'save'}
                                                    onSave={props.onSave}
                                    />)
                                   })}

            </ul>
            <button className="button movies__btn-more" type="button" onClick={displayMore}>Ещё</button>
        </section>
    )
}
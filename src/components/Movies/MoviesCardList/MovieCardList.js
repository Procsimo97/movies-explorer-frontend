import MoviesCard from "../MovieCard/MovieCard";
import { useResize } from "../../../utils/windowSize";
import { useEffect, useState } from "react";

const moviesCardListConfig = {
    desktop: {
        arrayLength: 12,
        addCards: 3,
    },
    tablet: {
        arrayLength: 8,
        addCards: 2,
    },
    mobile: {
        arrayLength: 5,
        addCards: 2,
    }
}

function displayCardCongig(currentWidth) {
    let movieListConfig;
    if (currentWidth >= 1160) {
        return movieListConfig = moviesCardListConfig.desktop;
    }
    if (currentWidth >= 728) {
        return movieListConfig = moviesCardListConfig.tablet;
    }
    return movieListConfig = moviesCardListConfig.mobile;
}

export default function MoviesCardList(props) {

    const currentWidth = useResize();
    //полученные фильмы
    const [movieArray, setMovieArray] = useState(() => {
        const movieList = localStorage.getItem(props.localStorageItems);
        return movieList ? JSON.parse(movieList) : props.movies;
    });

    //максимально выводимый массив
    const [arr, maxArr] = useState([]);
    //параметр, зависящий от ширины экрана
    const listParams = displayCardCongig(currentWidth);
    //доступная длина массива
    let lengthArray = listParams.arrayLength;

    // cравнение сохраненных фильмов - получение сохраненных карточек
    function getSavedMovieCard(arr, movie) {
        return arr.find((item) => {
            return item.movieId === (movie.id || movie.movieId);
        });
    }

    //определяет макс. длинну массива
    function setMovieArrayLength(movies) {
        (movies.length > lengthArray)
            ? setMovieArray(movies.slice(0, lengthArray))
            : setMovieArray(movies);
        maxArr(movies);
    }

    //определеяет сколько карточек добавить в зависимости от ширины экрана
    function displayMore() {
        lengthArray = + listParams.addCards;
        return setMovieArray(arr.slice(0, movieArray.length + listParams.addCards));
    }

    //показывает запросы
    function showQuery(movies) {
        setMovieArrayLength(movies);
    }

    //показыввает короткие фильмы
    function shortFilm(movies) {
        setMovieArrayLength(props.toggleShortMovies(movies))
    }

    //выводит запрос (фильмы)
    useEffect(() => {
        showQuery(props.query);
        if (props.isShortMovie) {
            shortFilm(props.query);
        }
    }, [props.query, props.isShortMovie])

    //выводит короткометражки
    useEffect(() => {
        shortFilm(arr);
    }, [props.isShortMovie])


    //сброс состояни массива при переходе на вкладку.
    useEffect(() => {
        setMovieArrayLength(props.movies);
    }, [props.localStorageItems, props.movies])

    return (
        <section className="movies-container">
            <ul className="movies__list">
                {movieArray.map((movie) => {
                    return (
                        <MoviesCard key={movie._id || movie.id}
                            movie={movie}
                            typeIcon={props.typeIcon}
                            onSave={props.onSave}
                            onRemove={props.onRemove}
                            btnClass={props.btnClass}
                            isSaved={getSavedMovieCard(props.savedMovies, movie)}
                        />)
                })}

            </ul>
            {arr.length > movieArray.length && (<button className="button movies__btn-more" type="button" onClick={displayMore}>Ещё</button>)}

        </section>
    )
}
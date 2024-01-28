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

    const movieList = props.movies;
    const currentWidth = useResize();
    //полученные фильмы
    const [movieArray, setMovieArray] = useState(() => {
        const movies = localStorage.getItem('films');
        return movies ? JSON.parse(movies) : [];
    });
    //параметр, зависящий от ширины экрана
    const listParams = displayCardCongig(currentWidth);

    //изначальная длина массива
    let lengthArray = listParams.arrayLength;

    // cравнение сохраненных фильмов - получение сохраненных карточек
    function getSavedMovieCard(arr, movie) {
        return arr.find((item) => {
            return item.movieId === (movie.id || movie.movieId);
        });
    }

    //определяет максимальную длину массива и выводит карточки
        useEffect(() => {
            movieArray.length = lengthArray;
            setMovieArray(movieList.slice(0, movieArray.length));
        }, [props.movies, listParams])
    
    //определеяет сколько карточек добавить в зависимости от ширины экрана
    function displayMore() {
        lengthArray = + listParams.addCards;
        return setMovieArray(movieList.slice(0, movieArray.length + listParams.addCards));
    }

    function showQuery(movies) {
       setMovieArray(movies);
    }

    //показыввает короткие фильмы
    function shortFilm(movies) {
        let newArr = movies.filter((movie) => movie.duration < 40);
        if(props.query) {
            newArr = props.query.filter((movie) => movie.duration < 40);
        }
        setMovieArray(newArr);
    }

    //выводит запрос (фильмы)
    useEffect(() => {
        showQuery(props.query);
        if (props.isShortMovie) {
            shortFilm(movieArray);
        }
        
    }, [props.query, props.isShortMovie])

    localStorage.setItem('films', JSON.stringify(movieArray));

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
            {/* movieArray.length > lengthArray && */ (<button className="button movies__btn-more" type="button" onClick={displayMore}>Ещё</button>)}

        </section>
    )
}
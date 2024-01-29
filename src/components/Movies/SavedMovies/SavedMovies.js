import MoviesCardList from "../MoviesCardList/MovieCardList";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../../Footer/Footer";
import { useEffect, useState } from "react";
import Preloader from "../../Preloader/Preloader";

export default function SavedMovies(props) {

    //валидное поле поиска
    const [isSearchValid, setIsSearchValid] = useState(true);
    const filterShort = useState(false);
    const [isShortMovie, setIsShortMovie] = useState(false);

    //поля запроса
    const [inputValue, setInputValue] = useState(() => {
        const query = localStorage.getItem('inputSavedFilmsValue');
        return query ? query : '';
    });

    //функция изменения знаения поля поиска
    function handleChange(e) {
        if (!e.target.value) {
            setIsSearchValid(false);
        } else {
            setIsSearchValid(true);
        }
        setInputValue(e.target.value);
    }
    //фильтр на короткометр
    useEffect(() => {
        if (filterShort[0]) {
            setIsShortMovie(true);
        } else {
            setIsShortMovie(false);
        }
    }, [filterShort]);

    useEffect(() => {
        localStorage.setItem('inputSavedFilmsValue', inputValue);
    }, [inputValue])

    //сохранение фильмов в локальное хранилище
    useEffect(() => {
        localStorage.setItem('saved-movies', JSON.stringify(props.movies));
    }, [props.movies])

    function isPreloaderActive() {
        if(props.isSearching) return <Preloader/>
    }

    return (
        <main className="main">
            <div className="main">
                <div className=" movies">
                    <SearchForm movies={props.movies}
                        filterFunc={props.onFilter}
                        shortFilterState={filterShort}
                        isSearchValid={isSearchValid}
                        handleChange={handleChange}
                        inputValue={inputValue}
                    />
                    {isPreloaderActive()}
                    <MoviesCardList btnClass={'remove-btn'}
                        typeIcon={'remove'}
                        movies={props.movies}
                        savedMovies={props.movies}
                        onRemove={props.onRemove}
                        query={props.query}
                        isShortMovie={isShortMovie}
                        isfilterShortFilm={filterShort}
                        localStorageItems={'saved-movies'}
                    />
                </div>
            </div>
            <Footer />
        </main>
    )
};


import MoviesCardList from "../MoviesCardList/MovieCardList";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../../Footer/Footer";
import { useEffect, useState } from "react";

export default function SavedMovies(props) {

    const [query, setQuery] = useState('');
    //валидное поле поиска
    const [isSearchValid, setIsSearchValid] = useState(true);
    const filterShort = useState(false);
    const [isShortMovie, setIsShortMovie] = useState(false);

    //поля запроса
    const [inputValue, setInputValue] = useState(() => {
        const query = localStorage.getItem('inputSavedFilmsValue');
        return query ? query : '';
    });

    function handleFilerMovies(e) {
        e.preventDefault();
        const inputSearch = e.target.search_movie.value;
        setQuery(props.onFilter(inputSearch, props.movies));
        return query;
    }

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

    return (
        <main className="main">
            <div className="main">
                <div className=" movies">
                    <SearchForm filterFunc={handleFilerMovies}
                        movies={props.movies}
                        shortFilterState={filterShort}
                        isSearchValid={isSearchValid}
                        handleChange={handleChange}
                        inputValue={inputValue}
                    />
                    <MoviesCardList btnClass={'remove-btn'}
                        typeIcon={'remove'}
                        movies={props.movies}
                        savedMovies={props.movies}
                        onRemove={props.onRemove}
                        query={query}
                        isShortMovie={isShortMovie}
                    />
                </div>
            </div>
            <Footer />
        </main>
    )
};


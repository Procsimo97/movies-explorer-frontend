import MoviesCardList from "./MoviesCardList/MovieCardList";
import SearchForm from "./SearchForm/SearchForm";
import Footer from "../Footer/Footer"
import { useState, useEffect } from "react";
import Preloader from "../Preloader/Preloader";

function Movies({
    movies,
    onFilter,
    query,
    onSave,
    onRemove,
    savedMovies,
    isSearching,
    searchError,
}) {

    //поля запроса
    const [inputValue, setInputValue] = useState(() => {
        const query = localStorage.getItem('inputValue');
        return query ? query : '';
    });
    //валидное поле поиска
    const [isSearchValid, setIsSearchValid] = useState(true);
    const [isShortMovie, setIsShortMovie] = useState(false);
    const filterShort = useState(false);

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

    //сохранение фильмов, значение инпута в локальное хранилище
    useEffect(() => {
        localStorage.setItem('films', JSON.stringify(movies));
    }, [movies])
    useEffect(() => {
        localStorage.setItem('inputValue', inputValue);
    }, [inputValue])
    useEffect(() => {
        localStorage.setItem('checkBox', filterShort[0])
    }, [filterShort])


    function isPreloaderActive() {
        if (isSearching) return <Preloader />
    }

    return (
        <main className="main">
            <div className="main">
                <div className="movies">
                    <SearchForm movies={movies}
                        filterFunc={onFilter}
                        shortFilterState={filterShort}
                        inputValue={inputValue}
                        handleChange={handleChange}
                        isSearchValid={isSearchValid} />
                    {isPreloaderActive()}
                    {searchError ? (
                        <p className="movie-search-status">{searchError}</p>
                    ) : (
                        <MoviesCardList movies={movies}
                            savedMovies={savedMovies}
                            typeIcon={'save'}
                            btnClass={'films__save'}
                            onSave={onSave}
                            onRemove={onRemove}
                            query={query}
                            isShortMovie={isShortMovie}
                            isfilterShortFilm={filterShort}
                            localStorageItems={'films'}
                            filterFunc={onFilter} //отправка формы
                        />
                    )}

                </div>
            </div>
            <Footer />
        </main>
    )
};

export default Movies;
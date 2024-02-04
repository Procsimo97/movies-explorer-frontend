import MoviesCardList from "./MoviesCardList/MovieCardList";
import SearchForm from "./SearchForm/SearchForm";
import Footer from "../Footer/Footer"
import { useState, useEffect } from "react";
import Preloader from "../Preloader/Preloader";
import { logDOM } from "@testing-library/react";

function Movies({
    movies,
    onFilter,//отображает запрос
    query,
    onSave,
    onRemove,
    savedMovies,
    isSearching,
    searchError,
    toggleShortMovies, //фильтрует на короткометр
    navigate,
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
        localStorage.setItem('films', JSON.stringify(movies)); //переданные фильмы
    }, [movies])
    useEffect(() => {
        localStorage.setItem('inputValue', inputValue); //значение инпута
    }, [inputValue])
    useEffect(() => {
        localStorage.setItem('checkBox', filterShort[0]) //состояние чекбокса
    }, [filterShort])
    useEffect(() => {
        localStorage.setItem('search-movie', JSON.stringify(query)); //массив фильмов по запросу
    })

    function isPreloaderActive() {
        if (isSearching) return <Preloader />
    }

    console.log(query.length, searchError);

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
                            toggleShortMovies={toggleShortMovies} //фильтр на короткометр
                            onFilter={onFilter} //фильтр на названия
                            inputValue={inputValue}
                            navigate={navigate}
                        />

                </div>
            </div>
            <Footer />
        </main>
    )
};

export default Movies;
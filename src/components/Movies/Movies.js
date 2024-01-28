import MoviesCardList from "./MoviesCardList/MovieCardList";
import SearchForm from "./SearchForm/SearchForm";
import Footer from "../Footer/Footer"
import { useState, useEffect } from "react";

function Movies({
    movies,
    onFilter,
    query,
    onSave,
    onRemove,
    savedMovies,
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

    useEffect(() => {
        localStorage.setItem('inputValue', inputValue);
    }, [inputValue])

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
        if(filterShort[0]) {
            setIsShortMovie(true);
        } else {
            setIsShortMovie(false);
        }
    }, [filterShort]);

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
/*                             filterShortFilm={showShortMovie} */
                            isfilterShortFilm={filterShort}
                        />
                    )}

                </div>
            </div>
            <Footer />
        </main>
    )
};

export default Movies;
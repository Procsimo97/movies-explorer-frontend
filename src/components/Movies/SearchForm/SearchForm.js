import FilterCheck from "./FilterCheck/FilterCheck";
import { useResize } from "../../../utils/windowSize";

export default function SearchForm({ filterFunc, shortFilterState, isSearchValid, handleChange, inputValue }) {

    const isMobaileWidth = useResize() <= 650;

    function submitQuery(e) {
        e.preventDefault();
        filterFunc(inputValue);
    }

    return (
        <>
            {isMobaileWidth ? (
                <form className="search-form " onSubmit={submitQuery}>
                    <div className="search-form__container">
                        <label className="search-form__label" />
                        <input
                            className="search-form__input"
                            type="search"
                            name="search_movie"
                            placeholder="Фильм"
                            value={inputValue}
                            onChange={handleChange}

                        />
                        <span className={isSearchValid ? "search-form__input-error" : 'search-form__input-error search-form__input-error_active'}>Нужно ввести ключевое слово</span>
                        <button className={isSearchValid ? "button button-search" : "button-search button-search_inactive"}
                            type="submit"
                            disabled={isSearchValid ? false : true}>Найти</button>
                    </div>
                    <FilterCheck shortFilterState={shortFilterState} />
                </form>
            ) : (
                <form className="search-form " onSubmit={submitQuery}>
                    <div className="search-form__container">
                        <label className="search-form__label" />
                        <input
                            className="search-form__input"
                            type="search"
                            name="search_movie"
                            placeholder="Фильм"
                            value={inputValue}
                            onChange={handleChange}

                        />
                        <button className={isSearchValid ? "button button-search" : "button-search button-search_inactive"}
                            type="submit"
                            disabled={isSearchValid ? false : true}>Найти</button>
                        <FilterCheck shortFilterState={shortFilterState} />
                    </div>
                    <span className={isSearchValid ? "search-form__input-error" : 'search-form__input-error search-form__input-error_active'}>Нужно ввести ключевое слово</span>

                </form>
            )
            }

        </>
    )
};

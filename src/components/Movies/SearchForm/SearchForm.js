import FilterCheck from "./FilterCheck/FilterCheck";
import { useResize } from "../../../utils/windowSize";

export default function SearchForm({filterFunc, shortFilterState, shortFilm, isSearchValid, handleChange, inputValue}) {

    const isMobaileWidth = useResize() <= 650;

    return (
        <>
            {isMobaileWidth ? (
                <form className="search-form " onSubmit={filterFunc}>
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
                        <button className="button button-search" type="submit" >Найти</button>
                    </div>
                    <FilterCheck filter={shortFilm}/>
                </form>
            ) : (
                <form className="search-form " onSubmit={filterFunc}>
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
                        <button className="button button-search" type="submit">Найти</button>
                        <FilterCheck shortFilterState={shortFilterState}/>
                    </div>
                    <span className={isSearchValid ? "search-form__input-error" : 'search-form__input-error search-form__input-error_active '}>Нужно ввести ключевое слово</span>
                    
              </form>
            )
            }

        </>
    )
};

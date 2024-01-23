import FilterCheck from "./FilterCheck/FilterCheck";
import { useResize } from "../../../utils/windowSize";

export default function SearchForm() {

    const isMobaileWidth = useResize() <= 650;

    return (
        <>
            {isMobaileWidth ? (
                <form className="search-form ">
                    <div className="search-form__container">
                        <label className="search-form__label" />
                        <input
                            className="search-form__input"
                            type="search"
                            name="search-movie"
                            placeholder="Фильм"
                        />
                        <button className="button button-search" type="submit">Найти</button>
                    </div>
                    <FilterCheck />
                </form>
            ) : (
                <form className="search-form ">
                    <div className="search-form__container">
                        <label className="search-form__label" />
                        <input
                            className="search-form__input"
                            type="search"
                            name="search-movie"
                            placeholder="Фильм"
                        />
                        <button className="button button-search" type="submit">Найти</button>
                        <FilterCheck />
                    </div>
                    
              </form>
            )
            }

        </>
    )
};

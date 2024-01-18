import FilterCheck from "./FilterCheck/FilterCheck";

export default function SearchForm() {
    return (
        <section className="search-form ">
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
        </section>
    )
}
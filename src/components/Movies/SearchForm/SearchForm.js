import FilterCheck from "./FilterCheck/FilterCheck";

export default function SearchForm() {
    return (
        <section className="search-form">
            <div className="search-form__container">
                <form className="search-form__form">
                    <fieldset className="search-form__fieldset">
                        <label className="search-form__label">
                            <input
                                className="search-form__input"
                                type="search"
                                name="search-movie"
                                placeholder="Фильм"
                            />
                        </label>
                    </fieldset>
                    <button className="button-search" type="submit">Найти</button>
                </form>
             <FilterCheck/>
            </div>
        </section>
    )
}
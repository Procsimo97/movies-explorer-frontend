import MoviesCard from "../MovieCard/MovieCard";

export default function MoviesCardList() {
    return (
        <section className="movies">
            <ul className="movies__list">
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
            </ul>
            <button className="movies__btn-more" type="button">Ещё</button>
        </section>
    )
}
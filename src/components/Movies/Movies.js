import MoviesCardList from "./MoviesCardList/MovieCardList";
import SearchForm from "./SearchForm/SearchForm";
import Footer from "../Footer/Footer"

function Movies(props) {
    return (
        <main className="main">
            <div className="main">
                <div className="movies">
                    <SearchForm />
                    <MoviesCardList movies={props.movies} />
                </div>
            </div>
            <Footer />
        </main>
    )
};

export default Movies;
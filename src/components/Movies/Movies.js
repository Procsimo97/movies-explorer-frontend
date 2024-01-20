import MoviesCardList from "./MoviesCardList/MovieCardList";
import SearchForm from "./SearchForm/SearchForm";
import Footer from "../Footer/Footer"

function Movies() {
    return (
        <>
            <div className="main">
                <div className="movies">
                    <SearchForm />
                    <MoviesCardList btnClass={'films__save'}
                                    typeIcon={'save'} />
                </div>
            </div>
            <Footer />
        </>
    )
};

export default Movies;
import MoviesCardList from "./MoviesCardList/MovieCardList";
import SearchForm from "./SearchForm/SearchForm";
import Footer from "../Footer/Footer"
import MoviesCard from "./MovieCard/MovieCard";
import Header from "../Header/Header";

function Movies() {
    return (
        <>
            <Header />
            <SearchForm />
            <MoviesCardList>
                <MoviesCard />
            </MoviesCardList>
            <Footer />
        </>
    )
};

export default Movies;
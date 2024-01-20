import MoviesCardList from "../MoviesCardList/MovieCardList";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../../Footer/Footer";

export default function SavedMovies() {
    return (
        <>
            <div className="main">
                <div className=" movies">
                    <SearchForm />
                    <MoviesCardList btnClass={'remove-btn'}
                                    typeIcon={'remove'}/>
                </div>
            </div>
            <Footer />
        </>
    )
};
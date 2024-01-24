import MoviesCardList from "../MoviesCardList/MovieCardList";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../../Footer/Footer";

export default function SavedMovies(props) {

    return (
        <main className="main">
            <div className="main">
                <div className=" movies">
                    <SearchForm />
                    <MoviesCardList btnClass={'remove-btn'}
                                    typeIcon={'remove'}
                                    movies={props.movies}
                                    onSave={props.onSave}
                                    />
                </div>
            </div>
            <Footer />
        </main>
    )
};
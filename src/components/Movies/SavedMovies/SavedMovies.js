import MoviesCardList from "../MoviesCardList/MovieCardList";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";

export default function SavedMovies(props) {
    return (
        <>
            <div className="main">
       {/*          <Header class={props.class} classIcon={props.classIcon}
                    isBurgerOpen={props.isBurgerOpen}
                    isOpen={props.onBurgerOpen}
                    onClose={props.onClose} /> */}
                <div className=" movies">
                    <SearchForm />
                    <MoviesCardList />
                </div>
            </div>
            <Footer />
        </>
    )
};
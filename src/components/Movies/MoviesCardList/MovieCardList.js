import MoviesCard from "../MovieCard/MovieCard";

export default function MoviesCardList(props) {
    return (
        <section className="movies-container">
            <ul className="movies__list">
                <MoviesCard btnClass={props.btnClass} 
                            typeIcon={props.typeIcon}
                />
                <MoviesCard btnClass={props.btnClass} 
                            typeIcon={props.typeIcon}
                />
                 <MoviesCard btnClass={props.btnClass} 
                            typeIcon={props.typeIcon}
                />
                <MoviesCard btnClass={props.btnClass} 
                            typeIcon={props.typeIcon}
                />
                 <MoviesCard btnClass={props.btnClass} 
                            typeIcon={props.typeIcon}
                />
            </ul>
            <button className="movies__btn-more" type="button">Ещё</button>
        </section>
    )
}
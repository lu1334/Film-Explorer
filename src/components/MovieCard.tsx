import type { Movie } from "../types/types";

interface Prop{
    movie: Movie
}

 export const MovieCard = ({ movie }: Prop) =>{

    return (
        <div className="movie-card">
        <h2 className="movie-card__title">{movie.title}</h2>
        <p className="movie-card__overview">{movie.overview}</p>
        <img className="movie-card__poster" src={`https://image.tmdb.org/t/p/w500${movie.posterPath}`} alt={movie.title} />
        <p className="movie-card__meta">Release Date: {movie.releaseDate}</p>
        <p className="movie-card__meta">Rating: {movie.voteAverage}</p>
        </div>
    )

}

import { useMovieContext } from "../context/MovieContex";
import type { Movie } from "../types/types";
interface PropFavorite{
    movie:Movie
}
export const BtnFavorite = ({movie}:PropFavorite) => {
  const { handlerAddFavorite,favorite } = useMovieContext();

  // Valida si la pelicula ya esta en favoritos.
  const isExistMovie = favorite.find((m)=>m.id ===movie.id)
  return (
    <div className="favorite-action">
      <button
        className={!isExistMovie?"favorite-action__button":"favorite-action__button--added"}
        // Agrega la pelicula a favoritos si no existe.
        onClick={() => handlerAddFavorite(movie)}
      >
       {isExistMovie?"Added":"Add favorite"} 
      </button>
    </div>
  );
};

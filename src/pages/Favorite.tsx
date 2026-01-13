import { MovieCard } from "../components/MovieCard";
import { useMovieContext } from "../context/MovieContex";

export const Favorite = () => {
  const { favorite, setFavorite } = useMovieContext();
  const handlerDeleteFavorite = (id: number) => {
    setFavorite((prev) => prev.filter((f) => f.id !== id));
  };
  return (
    <ul className="favorite-list">
      {favorite.map((f) => (
        <li key={f.id}>   
          <MovieCard movie={f} />
          <button
            className="favorite-list__delete"
            onClick={() => handlerDeleteFavorite(f.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

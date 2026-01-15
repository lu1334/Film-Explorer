import { useParams } from "react-router-dom";
import { MovieCard } from "../components/MovieCard";
import { getApiMovieId } from "../services/getApiMovieId";
import { getRecomendationMovie } from "../services/getRecomendationMovie";
import type { Movie } from "../types/types";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Details = () => {
  const { id } = useParams<{ id: string }>();
  // Estado para pelicula seleccionada y recomendaciones.
  const [datosId, setDatosId] = useState<Movie | null>(null);
  const [recomendation, setRecomendation] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }

    // Carga detalle de la pelicula actual.
    const fetchData = async () => {
      setLoading(true);
      const data = await getApiMovieId(Number(id));

      setDatosId(data || null);
      setLoading(false);
    };

    // Carga peliculas similares.
    const fetchRecomendation = async () => {
      const data = await getRecomendationMovie(Number(id));

      setRecomendation(data as Movie[]);
    };

    fetchData();
    fetchRecomendation();
  }, [id]);

  if (loading) return <p>loading film info...</p>;
  if (!datosId) return <p>we couldn't find that film.</p>;
  
  return (
    <div className="animate-fade-in">
      <MovieCard movie={datosId} />
      <h2>Similar Movies</h2>
      <ul>
        {recomendation.map((m) => (
          <li key={m.id}>
            <Link to={`/movie/${m.id}`}>
              <MovieCard movie={m} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

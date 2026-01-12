import { useParams } from "react-router-dom";
import { MovieCard } from "../components/MovieCard";
import { getApiMovieId } from "../services/getApiMovieId";
import type { Movie } from "../types/types";
import { useEffect, useState } from "react";

export const Details = () => {
  const { id } = useParams<{ id: string }>();
  const [datosId, setDatosId] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }
     
    const fetchData = async () => {
      setLoading(true);
      const data = await getApiMovieId(Number(id));

      setDatosId(data || null);
      setLoading(false);
    };

    fetchData();
  }, [id]);

  if (loading) return <p>loading film info...</p>;
  if (!datosId) return <p>we couldn't find that film.</p>;

  return (
    <div className="animate-fade-in">
      <MovieCard movie={datosId} />
    </div>
  );
};

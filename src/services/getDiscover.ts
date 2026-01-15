import { KEY } from "./api";
import type { ApiGlobal, ApiMovie } from "../types/types";

export const getDiscover = async (id:number) => {
  const URL = "https://api.themoviedb.org/3/discover/movie";
  try {
    // Busca peliculas filtradas por genero.
    const response = await fetch(`${URL}?api_key=${KEY}&with_genres=${id}`);
    if (!response.ok)
      throw new Error("No response from server" + response.status);
    const data: ApiGlobal = await response.json();
    // Mapea resultados a Movie.
    if (!Array.isArray(data.results)) throw new Error("Invalid data format");
    return data.results.map((m: ApiMovie) => ({
      id: m.id,
      title: m.title,
      overview: m.overview,
      posterPath: m.poster_path,
      backdropPath: m.backdrop_path,
      releaseDate: m.release_date,
      voteAverage: m.vote_average,
    }));
  } catch (err: any) {
    console.error(err.message);
    return [];
  }
};

import { apiUrl, KEY } from "./api";
import type { ApiGlobal, ApiMovie } from "../types/types";

export const getRecomendationMovie = async (id: number) => {
  const URL = apiUrl;
  const API_KEY = KEY;
  try {
    const response = await fetch(
      `${URL}/movie/${id}/recommendations?api_key=${API_KEY}`
    );
    if (!response.ok) {
      throw new Error(" Error fetching recommendation movies");
    }
    const data: ApiGlobal = await response.json();
    if (!Array.isArray(data.results))
      throw new Error(" No recommendation movies found");
    return data.results.map((data:ApiMovie) => ({
      id: data.id,
      title: data.title,
      overview: data.overview,
      posterPath: data.poster_path,
      backdropPath: data.backdrop_path,
      releaseDate: data.release_date,
      voteAverage: data.vote_average,
    }));
  } catch (err: any) {
    console.error(err.message);
  }
};

import type { Movie } from "../types/types";
import { apiUrl,KEY } from "./api";

export const getApiMovieId = async (id: number) => {
  
  const URL = apiUrl
  const API_KEY = KEY;
  const response = await fetch(`${URL}/movie/${id}?api_key=${API_KEY}`);
  try {
    if (!response.ok) {
      throw Error("Failed to fetch data from API" + response.status);
    }
    const data: any = await response.json();

    const dataResult:Movie = ({
      id: data.id,
      title: data.title,
      overview: data.overview,
      posterPath: data.poster_path,
      backdropPath: data.backdrop_path,
      releaseDate: data.release_date,
      voteAverage: data.vote_average,
    });

    return dataResult
  } catch (err) {
    console.error(err);
    return null;
  }
};

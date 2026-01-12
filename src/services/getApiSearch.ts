import { apiUrl, KEY } from "./api";
import type { Movie,ApiMovie } from "../types/types";

export const getApiSearch = async (text: string) => {
    
  const URl = apiUrl;
  const API_KEY = KEY;

  try {
    const response = await fetch(
      `${URl}/search/movie?query=${text}&api_key=${API_KEY}`
    );

    if (!response.ok)
      throw new Error("Failed to fetch data from API" + response.status);
    const data = await response.json();

    if(!Array.isArray(data.results))throw new Error("no results array in response");
    
    const result: Movie[] = data.results.map((data: ApiMovie) => ({
      id: data.id,
      title: data.title,
      overview: data.overview,
      posterPath: data.poster_path,
      backdropPath: data.backdrop_path,
      releaseDate: data.release_date,
      voteAverage: data.vote_average,
    }));

    return result;
      
    
  } catch (err) {
    console.error(err);
  }
};

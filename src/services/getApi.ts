import type { Movie,ApiMovie ,ApiGlobal} from "../types/types";
import { apiUrl,KEY } from "./api";

export const getApi = async () => {
  const  API_KEY =KEY;
  const URL = apiUrl

  try {
    const res = await fetch(`${URL}/movie/popular?api_key=${API_KEY}`);
    if (!res.ok) {
      throw Error("Failed to fetch data from API" + res.status);
    }
    const dataRes: ApiGlobal = await res.json();
    const result: Movie[] = dataRes.results.map((data: ApiMovie) => ({
      id: data.id,
      title: data.title,
      overview: data.overview,
      posterPath: data.poster_path,
      backdropPath: data.backdrop_path,
      releaseDate: data.release_date,
      voteAverage: data.vote_average,
    }));

    return result;
  } catch (err: any) {
    console.error(err.message);
    return [];
  }
};

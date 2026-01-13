import { KEY } from "./api";
import type { ApiCategoria } from "../types/types";
export const getGenres = async () => {
  const URl = "https://api.themoviedb.org/3/genre/movie/list";
  const API_KEY = KEY;
  try {
    const response = await fetch(`${URl}?api_key=${API_KEY}`);
    if (!response.ok)
      throw new Error("No response from server" + response.status);
    const data:any = await response.json();
    if (!Array.isArray(data.genres)) throw new Error("Invalid data format");
    const res:ApiCategoria[] = data.genres.map((m: any) => ({ id: m.id, category: m.name }));
    return res
  } catch (err: any) {
    return err.message;
  }
};

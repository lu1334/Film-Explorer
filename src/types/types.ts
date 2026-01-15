// Modelo interno usado por la app.
export interface Movie {
  id: number;
  title: string;
  overview: string;
  posterPath: string;
  backdropPath: string;
  releaseDate: string;
  voteAverage: number;
}

// Forma exacta que llega desde la API.
export interface ApiMovie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  vote_average: number;
}

// Respuesta generica de la API con lista.
export interface ApiGlobal {
  page: number;
  results: ApiMovie[];
  total_pages: number;
  total_results: number;
}

// Categoria de genero para el listado.
export interface ApiCategoria {
  id:number,
  category:string
}

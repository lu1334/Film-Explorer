export interface Movie {
  id: number;
  title: string;
  overview: string;
  posterPath: string;
  backdropPath: string;
  releaseDate: string;
  voteAverage: number;
}

export interface ApiMovie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  vote_average: number;
}

export interface ApiGlobal {
  page: number;
  results: ApiMovie[];
  total_pages: number;
  total_results: number;
}

export interface ApiCategoria {
  id:number,
  category:string
}
import React, { useState, useEffect } from "react";
import type { Movie } from "../types/types";
import { Link } from "react-router-dom";
import { getApi } from "../services/getApi";
import { NavBar } from "../components/NavBar";
import { getApiSearch } from "../services/getApiSearch";
import { MovieCard } from "../components/MovieCard";
import { SearchBar } from "../components/SearchBar";
import { BtnDelete } from "../components/BtnDelete";

export const Home = () => {
  const [movieList, setMovieList] = useState<Movie[]>([]);
  const [textoMovie, setTextoMovie] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getApi();
        if (!data) {
          throw Error(" No data returned from API");
        }
        setMovieList(data);
      } catch (error: any) {
        setErrorMessage(error.message);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  const handlerDeleteSearch = async ()=>{

     try {
        const data = await getApi();
        if (!data) {
          throw Error(" No data returned from API");
        }
        setMovieList(data);
        setTextoMovie("")
      } catch (error: any) {
        setErrorMessage(error.message);
      } finally {
        setLoading(false);
      }
  }

  const handlerSumit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setErrorMessage(null);
    setLoading(true);

    try {
      const dataSearch = await getApiSearch(textoMovie);

      if (!dataSearch) {
        setErrorMessage("does not return data");
      } else {
        setMovieList(dataSearch);
      }
    } catch (error: any) {
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SearchBar textoMovie={textoMovie} seTtextoMovie={setTextoMovie} />
      {loading && <p>Loading...</p>}
      {errorMessage && <p>{errorMessage}</p>}
      {
        <div className="search-panel">
          <form className="search-form" onSubmit={handlerSumit}>
            <button className="search-submit" type="submit">
              Send
            </button>
          </form>
          <BtnDelete handlerDeleteSearch={handlerDeleteSearch} />
        </div>
      }
      <ul>
        {movieList.map((m) => (
          <li key={m.id}>
            <Link to={`/movie/${m.id}`}>
              <MovieCard movie={m} />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

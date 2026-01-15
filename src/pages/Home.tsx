import React, { useState, useEffect } from "react";
import type { Movie } from "../types/types";
import { Link } from "react-router-dom";
import { getApi } from "../services/getApi";
import { getApiSearch } from "../services/getApiSearch";
import { MovieCard } from "../components/MovieCard";
import { SearchBar } from "../components/SearchBar";
import { BtnDelete } from "../components/BtnDelete";

export const Home = () => {
  // Estado principal del listado y busqueda.
  const [movieList, setMovieList] = useState<Movie[]>([]);
  const [textoMovie, setTextoMovie] = useState<string>("");
  const [isSearchActive, setIsSearchActive] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Carga la lista inicial de peliculas populares.
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

  const handlerDeleteSearch = async () => {
    // Restablece la busqueda y vuelve a la lista inicial.
    try {
      const data = await getApi();
      if (!data) {
        throw Error(" No data returned from API");
      }
      setMovieList(data);
      setTextoMovie("");
      setIsSearchActive(false);
    } catch (error: any) {
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handlerSumit = async (e: React.FormEvent<HTMLFormElement>) => {
    // Ejecuta la busqueda cuando se envia el formulario.
    e.preventDefault();
    if (!textoMovie) return;
    setErrorMessage(null);
    setLoading(true);
    setIsSearchActive(true);

    try {
      const dataSearch = await getApiSearch(textoMovie);

      if (!dataSearch.length) {
        setMovieList([]);
        setErrorMessage("No results found");
      } else {
        setMovieList(dataSearch);
      }
    } catch (error: any) {
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleTextoMovieChange: React.Dispatch<
    React.SetStateAction<string>
  > = (value) => {
    // Actualiza el texto sin activar busqueda automatica.
    setIsSearchActive(false);
    setTextoMovie((prev) => (typeof value === "function" ? value(prev) : value)); 
  };

  // Muestra el boton de submit solo cuando hay texto.
  const showSubmit = textoMovie.trim().length > 0 && !isSearchActive; 

  return (
    <>
      <div className="search-input-wrap">
        <SearchBar
          textoMovie={textoMovie}
          seTtextoMovie={handleTextoMovieChange} 
        />
        {textoMovie && <BtnDelete handlerDeleteSearch={handlerDeleteSearch} />}
      </div>
      {loading && <p>Loading...</p>}
      {errorMessage && <p>{errorMessage}</p>}
      {
        <div className="search-panel">
          {showSubmit && (
            <form className="search-form" onSubmit={handlerSumit}>
              <button className="search-submit" type="submit">
                Send
              </button>
            </form>
          )}
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

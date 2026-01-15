
import type { Movie } from "../types/types";

import React,{ useState,useContext,createContext,useEffect} from "react";

type containerContext = {
    favorite :Movie[]
    setFavorite :React.Dispatch<React.SetStateAction<Movie[]>>
    handlerAddFavorite :(movie:Movie) => void
       
}

// Contexto para manejar favoritos en toda la app.
const MovieContext = createContext<containerContext|undefined>(undefined)

// Lee favoritos desde localStorage y evita datos invalidos.
const readFavoritesFromStorage = (): Movie[] => {
    if (typeof window === "undefined") {
        return []
    }
    const raw = localStorage.getItem("favorite")
    if (!raw || raw === "undefined") {
        return []
    }
    try {
        const parsed = JSON.parse(raw)
        return Array.isArray(parsed) ? parsed : []
    } catch {
        localStorage.removeItem("favorite")
        return []
    }
}
export const  ProviderMovieContext = ({children}:{children:React.ReactNode})=>{

     const [favorite,setFavorite] = useState<Movie[]>(() => readFavoritesFromStorage())
    useEffect(()=>{
        // Mantiene sincronizado el estado con localStorage.
        if (typeof window === "undefined") {
            return
        }
        localStorage.setItem("favorite",JSON.stringify(favorite))
    },[favorite])

     const handlerAddFavorite = (movie:Movie) => {
    
    // Evita duplicados por id.
    const isExist = favorite.find((m) => m.id === movie.id);
    if (isExist) {
      alert("ya existe");
      return;
    }
    setFavorite((prev) => [...prev, movie]);
  };
  

    return(
        <MovieContext.Provider value={{favorite,setFavorite,handlerAddFavorite}}> 
            {children}
        </MovieContext.Provider>
    )
}
export const useMovieContext = ()=>{
    // Garantiza que el hook se use dentro del Provider.
    const res = useContext(MovieContext)
    if(!res){
        throw new Error("useMovieContext must be used within a ProviderMovieContext")
    }
    return res
}

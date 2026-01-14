
import type { Movie } from "../types/types";

import React,{ useState,useContext,createContext,useEffect} from "react";

type containerContext = {
    favorite :Movie[]
    setFavorite:React.Dispatch<React.SetStateAction<Movie[]>>
    
}
const MovieContext = createContext<containerContext|undefined>(undefined)

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
        if (typeof window === "undefined") {
            return
        }
        localStorage.setItem("favorite",JSON.stringify(favorite))
    },[favorite])

    return(
        <MovieContext.Provider value={{favorite,setFavorite}}>
            {children}
        </MovieContext.Provider>
    )
}
export const useMovieContext = ()=>{
    const res = useContext(MovieContext)
    if(!res){
        throw new Error("useMovieContext must be used within a ProviderMovieContext")
    }
    return res
}

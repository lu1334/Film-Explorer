
import type { Movie } from "../types/types";

import React,{ useState,useContext,createContext,useEffect} from "react";

type containerContext = {
    favorite :Movie[]
    setFavorite:React.Dispatch<React.SetStateAction<Movie[]>>
    
}
const MovieContext = createContext<containerContext|undefined>(undefined)
export const  ProviderMovieContext = ({children}:{children:React.ReactNode})=>{

     const [favorite,setFavorite] = useState<Movie[]>(()=>{
        const res = localStorage.getItem("favorite")
        return res?JSON.parse(res):[]
    })
    useEffect(()=>{
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
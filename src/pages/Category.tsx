import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import { getGenres } from "../services/getGenres";
import type { ApiCategoria } from "../types/types";

export const Category = ()=>{
    const [category,setCategory]= useState<ApiCategoria[]>([])
    const [loading,setLoading]= useState<boolean>(false)
    const [menssageError,setMessageError]= useState<string>("")
    
    useEffect(()=>{
    const getApiCategory = async ()=>{
        setLoading(true)
        try{
            const res = await getGenres()
            if(!res)throw new Error("No data returned from API");
            const data = res
            setCategory(data)

        }catch(err:any){
            setMessageError(err.message)
        }finally{
            setLoading(false)
        }
    }
    getApiCategory()
    },[])

    return(
        <>
        {loading && <p>Loanding...</p>}
        {menssageError&&<p>{menssageError}</p>}
        <ul>
        {category.map((c)=>(
            <li key={c.id}><Link to={`/category/${c.id}`}>{c.category}</Link></li>
        ))}
        </ul>
        </>
    )
}